import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating.jsx';
import colorData from './color-data.json';
import ColorList from './ColorList.jsx';
import AddColorForm from './AddColorForm.jsx';
import { v4 } from 'uuid';

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color,
          );
          setColors(newColors);
        }}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title: title.value,
              color: color.value,
            },
          ];
          setColors(newColors);
        }}
      />
    </div>
  );
}

export default App;
