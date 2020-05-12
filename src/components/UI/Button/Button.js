import React, { Component } from 'react'; 


class Button extends Component {
  render(){
    const { onClick, title, classes } = this.props;

    return (
      <button 
        className={"main-button " + classes}
        onClick={() => onClick()}
      >
        {title}
      </button>
    )
  }
};

export default Button;	