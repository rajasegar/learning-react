import React from 'react';
import Color from './Color.jsx';

export default function ColorList({ 
  colors = [], 
  onRemoveColor = f => f,
  onRateColor = f => f
}) {
  if(!colors.length) return <div>No colors listed.</div>;
  return(
    <div>
      {
        colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor}/>)
      }
    </div>
  );
}
