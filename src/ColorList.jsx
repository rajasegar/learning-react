import React, { useContext } from 'react';
import { useColors } from './ColorProvider.jsx';
import Color from './Color.jsx';

export default function ColorList() {
  const { colors } = useColors();
  if (!colors.length) return <div>No colors listed.</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
