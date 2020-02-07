import React, { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

const Categories = () => {
  const [ activeCatIndex, setActiveCatIndex ] = useState([]);

  const categoryClicked = (currentIndex) => {

    if(activeCatIndex.includes(currentIndex)){
      setActiveCatIndex(activeCatIndex.filter(item => item !== currentIndex));
      return;
    } else {
      setActiveCatIndex([...activeCatIndex, currentIndex])

      return;
    }
  }

  const renderCategories = () => {
    const jsx = [];

    for(let i = 0; i < 20; i++){
      jsx.push(
        <div 
          key={`category-${i}`} 
          className={activeCatIndex.includes(i) ? 'navbar-category-element active' : 'navbar-category-element'}
          onClick={() => categoryClicked(i)}
        >
          {i}
        </div>
      )
    }

    return jsx;
  }

  return (
    <div className="navbar-categories-outer">
      <ScrollContainer 
        className="navbar-categories"
        hideScrollbars
        horizontal
      >
        {renderCategories()}
      </ScrollContainer>
    </div>
  )
}

export default Categories;