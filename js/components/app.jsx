import React from 'react';
import { Link } from 'react-router';
import SearchByUrl from './search_by_url';
import EbayItemsContainer from './ebay_items_container';

const App = ({ children }) => (
  <div>
    <header>
    </header>
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <SearchByUrl />
          </div>
          <div className="col-md-6">
            <EbayItemsContainer />
          </div>
          {children}
        </div>
      </div>
    </main>
  </div>
);

export default App;
