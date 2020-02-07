import React, { Component } from 'react';

class Banner extends Component {
  constructor(props){
    super(props);

    this.state = {
      isScrolling: false,
      scrollFromLeft: 0,
      activeIndex: 0,
      touchPosition: 0
    }

    this.bannerOuter = React.createRef();
    this.bannersInner = React.createRef();
    this.bannerWidth = null;
  }

  componentDidMount(){
    this.bannerWidth = this.bannerOuter.current.offsetWidth;
  }

  render(){
    return (
      <div ref={this.bannerOuter} className="banners-outer">
        <div className="arrow left-arrow" onClick={this.prev}>&lt;</div>
          <div ref={this.bannersInner} className="banners-inner">

            {this.renderBanner()}

          </div>
        <div className="arrow right-arrow" onClick={() => this.next()}>&gt;</div>
      </div>
    )
  }

  renderBanner = () => {
    const jsx = [];

    for(let i = 0; i < 5; i++){
      jsx.push(
        <div key={`banner-${i}`} className="banner-element">
          {i}
        </div>
      )
    }

    return jsx;
  }

  prev = () => {
    const newIndex = this.state.activeIndex - 1;

    if(newIndex > -1){
      this.bannersInner.current.style = `transform: translateX(-${newIndex * this.bannerWidth}px); transition: .5s;`
  
      this.setState(prevState => ({
        ...prevState,
          activeIndex: newIndex
      }))
    }
  }

  next = () => {
    const newIndex = this.state.activeIndex + 1;

    if(newIndex < 5){
      this.bannersInner.current.style = `transform: translateX(-${newIndex * this.bannerWidth}px); transition: .5s;`
  
      this.setState(prevState => ({
        ...prevState,
          activeIndex: prevState.activeIndex + 1
      }))
    }
  }
}

export default Banner;