import React from 'react';
import { Link } from 'react-router';
import SearchByUrl from './search_by_url';
import EbayItemsContainer from './ebay_items_container';

const App = ({ children }) => (
  <div>
    <header>
    </header>
    <main>
      <SearchByUrl />
      <EbayItemsContainer />
      {children}
    </main>
  </div>
);

export default App;
