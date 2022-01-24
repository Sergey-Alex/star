import React, {useState} from 'react'
import StarRating from "./components/StarRating";
import colorData from './color-data'
import ColorList from "./components/ColorList";

function App() {

  const [colors ,setColors] = useState(colorData)

  return (
    <div>
    <StarRating />
    <ColorList
        colors = {colors}
        onRateColor={(id, rating) =>{
          const newColors = colors.map(color => color.id === id ? {...color, rating} : color)
          setColors(newColors)
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id)
          setColors(newColors)
        }}
    />
    </div>
  );
}

export default App;
