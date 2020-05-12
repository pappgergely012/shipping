import React, { Component } from 'react'; 
import { InputValidation } from '../../../utility/InputValidation/InputValidation';


class Input extends Component {
  constructor(props){
    super(props);

    this.state = {
      empty: true,
      errorMsg: ''
    }
  }

  componentDidMount(){
    if(this.props.initValue){
      this.input.value = this.props.initValue;

      this.setState(prevState => ({
        ...prevState,
          empty: false
      }))
    }
  }

  render(){
    const containerStyle   = this.props.half ? 'input-row half' : 'input-row';
    const { errorMsg, empty } = this.state;
    const { type, onChangeText } = this.props;

    return (
      <>
        <div className={containerStyle}>
          <input 
            onBlur={(evt) => this.blur(evt)}
            ref={ref => this.input = ref}
            className="basic-input"
            onChange={(ev) => onChangeText(ev.target.value)}
            type={type ? type : null}
          />

          <label className={empty ? '' : 'not-empty'}>{this.props.placeholder}</label>
        </div>
        
        <div className={errorMsg.length === 0 ? "input-error" : "input-error show"}>
          {errorMsg}
        </div>
      </>
    )
  }

  blur = (evt) => {
    if(evt.target.value !== ''){
      this.setState(prevState => ({
        ...prevState,
          empty: false
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
          empty: true
      }))
    }
  }

  getValue = () => {
    const hasError = this.validateInput();

    return hasError ? false : this.input.value;
  }

  validateInput = () => {
    const { hasError, errorMessage } = InputValidation(this.props.type, this.input.value, this.props.minLength, this.props.maxLength);

    if(hasError === true){
      this.setState(prevState => ({
        ...prevState,
          errorMsg: errorMessage
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
          errorMsg: ''
      }))
    }

    return hasError;
  }
};

export default Input;	