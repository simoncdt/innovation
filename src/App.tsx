// App.tsx
import React from 'react';
import Header from './Header/Header';
import './App.css'; // Fichier CSS où nous gérons les styles

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="hero">
        <div className="hero-content">
          <h1>Coming Home Never Felt So Good!</h1>
          <p>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
          <button className="cta-button">Find Your Style</button>
        </div>
      </div>
    </div>
  );
};

export default App;
