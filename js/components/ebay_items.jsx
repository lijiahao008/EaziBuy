import React from 'react';


const EbayItems = ({ ebayUrl, totalResults, items }) => {
  if (totalResults === 0) {
    return <div></div>;
  }
  return(
    <div className="ebay-items">
      <div className="total-results">
        <span>Results found: {totalResults}</span>
        <a className="btn btn-primary btn-sm" href={ebayUrl}>Browse on Ebay</a>
      </div>
      <div className="card-columns">
        {items.map((item, idx)=>{
          return <div className="card" key={idx}>
              <img className="card-img-top" src={item.galleryURL[0]} />
              <div className="card-block">
                <div className="card-title">{item.title[0]}</div>
                <div className="item-location">{item.location[0]}</div>
                <div className="item-condition">{item.condition ? item.condition[0].conditionDisplayName[0] : ""}</div>
                <a className="btn btn-primary" href={item.viewItemURL[0]}>View On Ebay</a>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};


export default EbayItems;
