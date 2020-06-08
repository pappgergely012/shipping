import React from 'react'; 
import './Products.scss';
import { useSelector } from 'react-redux';
import { dataFormat, isExist } from '../../utility/common';

const Products = ({showProductModal}) => {
  const { products } = useSelector(state => state.products);

  const getParams = (product) => {
    if (isExist(product.params)) {
      return product.params.map((param, index) => {
        return (
          <li key={`${param}-${index}`} className="list-item">
            {param}
          </li>
        )
      })
    }
  }

  const getPrice = (product) => {
    if (product.price_sales) {
      return (
        <>
          <span>{dataFormat('priceFormat', product.price_sales)}</span>
          <div>{dataFormat('priceFormat',product.price)}</div>
        </>
      )
    } else {
      return dataFormat('priceFormat', product.price)
    }
  }

  const renderProducts = () => {
    if (isExist(products)) {
      return products.map((item, i) => {
        return (
          <div 
            key={`product-${i}`} 
            onClick={() => showProductModal(true, products[i])} 
            className="product-element"
          >
            <div className="product-inner">
              <div className="product-image">
                <img src={item.image_url} alt={item.image_url}/>
              </div>

              <div className="product-datas">
                <div className="product-name">
                  {item.name}
                </div>

                <div className="product-description">
                  {item.description}
                </div>

                <ul className="product-list">
                  {getParams(item)}
                </ul>

                <div className="product-price">
                  {getPrice(item)}
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
  }

  return (
    <div className="products-outer">
      {renderProducts()}
    </div>
  )
}

export default Products;