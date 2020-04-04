import React from 'react';
import './App.css';
import Content from './components/content.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
