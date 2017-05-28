import React from 'react';
import { Link } from 'react-router';
import SearchByUrl from './search_by_url';
import EbayItems from './ebay_items';

const App = ({ children }) => (
  <div>
    <header>
    </header>
    <main>
      <SearchByUrl />
      <EbayItems />
      {children}
    </main>
  </div>
);

export default App;
