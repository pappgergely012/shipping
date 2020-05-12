import React, { Component } from 'react'; 


class MessageModal extends Component {
  render(){
    return (
      <div className={this.props.show ? "modal --message-modal show" : "modal"}>
        <div className="overlay" onClick={() => this.props.closeModal()}></div>

        <div className="modal-inner">
          <div className="modal-title title-center-xxl ">{this.props.title}</div>

          <div className="modal-message">
            {this.props.message}
          </div>

          <button 
            className="main-button --horizontal passive no-hover"
            onClick={() => this.props.closeModal()}
          >
            Ok
          </button>
        </div>
      </div>
    )
  }
};

export default MessageModal;	