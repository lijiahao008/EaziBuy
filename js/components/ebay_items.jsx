import React from 'react';


const EbayItems = ({ ebayUrl, totalResults, items, loading }) => {
  if (loading) {
    return <div className="loader">Loading...</div>
  }

  if (totalResults === 0) {
    return <div></div>;
  }

  return(
    <div className="ebay-items">
      <div className="total-results">
        <span>Results found: {totalResults}</span>
        <a className="btn btn-primary btn-sm" target="_blank" href={ebayUrl}>Browse on Ebay</a>
      </div>
      <div className="card-columns">
        {items.map((item, idx)=>{
          let title = item.title[0].length > 20 ? item.title[0].slice(0, 20) + "..." : item.title[0];
          let condition = item.condition ? item.condition[0].conditionDisplayName[0] : "Unknown";
          return <div className="card" key={idx}>
              <img className="card-img-top" src={item.galleryURL[0]} />
              <div className="card-block">
                <div className="card-title">{title}</div>
                <div className="item-location"><span>Location: </span>{item.location[0]}</div>
                <div className="item-condition"><span>Condition: </span>{condition}</div>
                <a className="btn btn-primary btn-block" target="_blank" href={item.viewItemURL[0]}>View On Ebay</a>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};


export default EbayItems;
