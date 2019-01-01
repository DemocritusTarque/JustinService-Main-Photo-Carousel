// functional component - will map the pictures and pass that to the Picture Component
import React from 'react';

function PicturesColumn(props) {
    console.log(props, 'Props in Pic Column?')
    return (
        <div>
            Hello!
        </div>
    )
}

export default PicturesColumn;