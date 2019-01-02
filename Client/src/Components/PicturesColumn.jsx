// functional component - will map the pictures and pass that to the Picture Component
import React from 'react';

function PicturesColumn(props) {
    console.log(props, 'Props in Pic Column?')
    return (
        <div>
            <h4> "Target. Expect More. Pay Less" </h4>
        </div>
    )
}

export default PicturesColumn;