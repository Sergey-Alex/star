import React from 'react';
import Color from "./Color";

const ColorList = ({
                       colors = [],
                       onRemoveColor = f => f,
                       onRateColor = f => f
                   }) => {
    if (!colors.length) return <h3>No colors Listed</h3>

    return (
        <div>
            {
                colors.map(color => (
                        <Color
                            key = {color.id}
                            {...color}
                            onRemove={onRemoveColor}
                            onRate={onRateColor}
                        />)
                    )

            }
        </div>
    );
};

export default ColorList;