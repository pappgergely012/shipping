import React, { Component } from 'react'; 


class Input extends Component {
  constructor(props){
    super(props);

    this.state = {
      empty: true,
      errorMsg: ''
    }
  }

  render(){
    const containerStyle   = this.props.half ? 'input-row half' : 'input-row',
          {errorMsg, empty} = this.state;

    return (
      <div>
        <div className={containerStyle}>
          <input 
            onBlur={(evt) => this.blur(evt)}
            ref={ref => this.input = ref}
            className="basic-input"
          />

          <label className={empty ? '' : 'not-empty'}>{this.props.placeholder}</label>
        </div>
        <div className={errorMsg.length === 0 ? "input-error" : "input-error show"}>
          {errorMsg}
        </div>
      </div>
    )
  }

  blur = (evt) => {
    if(evt.target.value !== ''){
      this.setState(prevState => ({
        ...prevState,
          empty: false
      }))
    }
  }

  getValue = () => {
    this.validateInput();

    return this.input.value;
  }

  validateInput = () => {
    if(this.input.value.length === 0){
      this.setState(prevState => ({
        ...prevState,
          errorMsg: 'Töltsd ki a mezőt'
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
          errorMsg: ''
      }))
    }
  }
};

export default Input;	