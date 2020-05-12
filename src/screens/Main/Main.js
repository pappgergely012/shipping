import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';
import ProductModal from '../../components/PorudctModal/ProductModal';

import { onSetProduct } from '../../store/actions/ProductActions';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false
    }
  }

  render(){

    return (
      <div className="content-container">
        <div className="content-container-inner">
          <Banner />

          <Products 
            showProductModal={(modalStatus, product) => this.toggleModal(modalStatus, product)}
          />
        </div>

        <ProductModal 
          closeModal={() => this.toggleModal()}
          show={this.state.showModal}
        />
      </div>
    )
  }

  toggleModal = (modalStatus = null, product = null) => {
    if(modalStatus) {
      this.props.onSetProduct(product);
    }

    this.setState(prevState => ({
      ...prevState,
        showModal: !prevState.showModal
    }))
  }
};

const mapDispatchToProps = (dispatch) => ({
  onSetProduct: product => dispatch(onSetProduct(product))
})

export default connect(null, mapDispatchToProps)(Main);	