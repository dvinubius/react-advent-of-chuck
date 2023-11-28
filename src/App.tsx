import React from 'react';
import './App.css';
import ChuckNorrisGallery from './ChuckNorrisGallery';


const App: React.FC = () => {
  return (
    <div className="App">
      <div className="title">Chuck Norris Facts</div>
      <div className="exhibit">
        <ChuckNorrisGallery></ChuckNorrisGallery>
      </div>
    </div>
  );
}

export default App;