// functional component - will map the pictures and pass that to the Picture Component
import React from 'react';

function PicturesColumn(props) {
  //   console.log(props, 'Props in Pic Column?');
  //   console.log(props.images, 'IMAGES HERE??');
  return (
    <div>
      <div>
        <h4> "Target. Expect More. Pay Less" </h4>
      </div>

      <div>
        {props.images.map((image, index) => (
          <div key={index}>
            <img src={image.urlLink} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PicturesColumn;
