
import React from 'react';
import { Link } from 'react-router';
import UploadPicture from './upload_picture';

const App = ({ children }) => (
  <div>
    <header>
    </header>
    <main>
      <UploadPicture />
      {children}
    </main>
  </div>
);

export default App;
