import React from 'react';
import {FaStar} from 'react-icons/fa'


const Star = ({selected = false, onSelect = f => f}) => {

    return (
        <div>
            <FaStar color ={selected ? 'red' : 'grey'} onClick = {onSelect}/>
        </div>
    );
};

export default Star;