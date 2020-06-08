import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import Button from '../UI/Button/Button';
import { setCartItem } from '../../store/actions/CartActions';
import { dataFormat } from '../../utility/common';

class ProductModal extends Component {
  render(){
    const { product, show, closeModal,  } = this.props;

    return (
      <div className={show ? 'product-modal animate' : 'product-modal'}>
        <div className="overlay" onClick={() => closeModal()}></div>

        <div className="product-modal-inner">
          <div className="modal-close" onClick={() => closeModal()}>X</div>

          <div className="product-image">
            <img src={product.image_url} alt={product.image_url}/>
          </div>

          <div className="product-datas-container">
            <div className="product-name">
              {product.name}
            </div>

            <div className="product-description">
              {product.description}
            </div>

            <ul className="product-list">
              {this.getParams(product)}
            </ul>

            <div className="product-price">
              {dataFormat('priceFormat', product.price)}
            </div>

            <Button
              title="Kosárba"
              classes="main-button--md main-button--center main-button--long  passive"
              onClick={() => this.addToCart()}
            />
          </div>
        </div>
      </div>
    )
  }

  addToCart = () => {
    const { product, onSetCartItem, closeModal } = this.props;

    onSetCartItem(product);
    closeModal();
  }

  getParams = (product) => {
    if(product.params.length > 0){
      return product.params.map((param, index) => {
        return (
          <li key={`${param}-modal-${index}`} className="list-item">
            {param}
          </li>
        )
      })
    }
  }

};

const mapStateToProps = state => ({
  product: state.products.singleProductData
});

const mapDispatchToProps = (dispatch) => ({
  onSetCartItem: product => dispatch(setCartItem(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);	