import React from 'react';
import Star from "./Star";
import classes from './Star.module.css'


const StarRating = ({totalStars = 5,
                        selectedStar = 0,
                        onRate = f => f }) => {
    const createArray = length => [...Array(length)]

   // const [selectedStar,setSelectedStar] = useState(0)

    return (
        <div className={classes.container}>
            {createArray(totalStars).map((n, i) =>
                <Star
                    key ={i}
                    selected={selectedStar > i}
                    onSelect={() => onRate(i+1)}
                />
             )}
             <p>{selectedStar} of {totalStars}</p>
        </div>

    )

};

export default StarRating;