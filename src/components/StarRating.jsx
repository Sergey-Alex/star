import React from 'react';
import Star from "./Star";
import {createArray} from "./lib";
import cl from './Star.module.css'
const StarRating = ({totalStars = 5, selectedStars = 0, onRate = f => f }) => {

    return (
        <div className={cl.container}>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
};

export default StarRating;