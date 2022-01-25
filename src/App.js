import React, {useState} from 'react'
import colorData from './color-data'
import ColorList from "./components/ColorList";

function App() {

  const [colors ,setColors] = useState(colorData)

    const removeColor = (id) => {
      const newColor = colors.filter(color => color.id !== id)
        setColors(newColor)
    }

    const rateColor = (id, rating) => {
        const newColors =  colors.map(color => color.id === id ?
            {...color, rating} : color)
        setColors(newColors)
    }



  return (
    <ColorList
        colors = {colors}
        onRateColor={rateColor}
        onRemoveColor={removeColor}
    />
  );
}

export default App;
