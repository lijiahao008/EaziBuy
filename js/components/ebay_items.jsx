import React from 'react';


const EbayItems = ({ ebayUrl, totalResults, items }) => {
  if (totalResults === 0) {
    return <div></div>;
  }
  return(
    <div className="ebay-items">
      <div className="ebay-url"><span>Browse on Ebay:</span> <a href={ebayUrl}></a></div>
      <div className="total-results"><span>Results found:</span>{totalResults}</div>
      {items.map((item)=>{
        return <div className="single-item" key={item.itemId[0]}>
          <a href={item.viewItemURL[0]}>
            <div className="item-image"><img src={item.galleryURL[0]} /></div>
            <div className="item-title">{item.title[0]}</div>
            <div className="item-location">{item.location[0]}</div>
            <div className="item-condition">{item.condition ? item.condition[0].conditionDisplayName[0] : ""}</div>
          </a>
        </div>
      })}

    </div>
  );
};


export default EbayItems;
