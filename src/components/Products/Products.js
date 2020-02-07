import React, { PureComponent } from 'react'; 

class Products extends PureComponent {
  render(){

    return (
      <div className="products-outer">
        {this.renderProducts()}
      </div>
    )
  }

  renderProducts = () => {
    const jsx = [];

    for(let i = 0; i < 60; i++){
      jsx.push(
        <div key={`product-${i}`} onClick={() => this.showProductModal(i)} className="product-element">
          <div className="product-inner">
            <div className="product-image">

            </div>

            <div className="product-datas">
              <div className="product-name">
                Terméknév {i}
              </div>

              <div className="product-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, illum tenetur velit quibusdam accusantium culpa consequatur cupiditate ab odio corporis. Aliquid, a neque voluptates aut maiores voluptate facilis exercitationem ipsa?
              </div>

              <div className="product-price">
                8 999 Ft
              </div>
            </div>
          </div>
        </div>
      )
    }
 
    return jsx;
  }

  showProductModal = (i) => {
    const product = {
      name: `Terméknév ${i}`,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, illum tenetur velit quibusdam accusantium culpa consequatur cupiditate ab odio corporis. Aliquid, a neque voluptates aut maiores voluptate facilis exercitationem ipsa?',
      price: '8 999 Ft'
    }

    this.props.showProductModal(true, product)
  }
};

export default Products;	