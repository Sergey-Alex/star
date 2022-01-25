import React, {useState} from 'react'
import colorData from './color-data'
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import {v4} from "uuid";

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

    const addNewColor = ((title, color) => {
        const newColors = [...colors, {id: v4(), rating: 0, title, color}]
        setColors(newColors)
    })



  return (
      <div>
        <AddColorForm onNewColor={addNewColor}/>
        <ColorList
            colors = {colors}
            onRateColor={rateColor}
            onRemoveColor={removeColor}
        />
      </div>

  );
}

export default App;
