import React, {useState} from 'react'
import colorData from './color-data'
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";

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
      <div>
        <ColorList
            colors = {colors}
            onRateColor={rateColor}
            onRemoveColor={removeColor}
        />
        <AddColorForm/>
      </div>

  );
}

export default App;
