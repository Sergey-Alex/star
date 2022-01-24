import React, {useState} from 'react';
import Star from "./Star";

const StarRating = ({totalStars = 5}) => {
    const createArray = length => [...Array(length)]

    const [selectedStar,setSelectedStar] = useState(0)

    return (
        <>
            {createArray(totalStars).map((n, i) =>
                <Star
                    key ={i}
                    selected={selectedStar > i}
                    onSelect={() =>setSelectedStar(i+1)}
                />
             )}
             <p>{selectedStar} of {totalStars}</p>
        </>

    )

};

export default StarRating;