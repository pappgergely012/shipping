import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import Button from '../UI/Button/Button';

class ProductModal extends Component {
  render(){
    return (
      <div className={this.props.show ? 'product-modal animate' : 'product-modal'}>
        <div className="overlay" onClick={() => this.props.closeModal()}></div>

        <div className="product-modal-inner">
          <div className="modal-close" onClick={() => this.props.closeModal()}>X</div>

          <div className="product-image">

          </div>

          <div className="product-datas-container">
            <div className="product-name">
              {this.props.product.name}
            </div>

            <div className="product-description">
              {this.props.product.description}
            </div>

            <div className="product-price">
              {this.props.product.price}
            </div>

            <Button
              title="Kosárba"
              classes="main-button--md main-button--center main-button--long  passive"
              onClick={() => console.log('clicked')}
            />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  product: state.products.singleProductData
});

export default connect(mapStateToProps, null)(ProductModal);	