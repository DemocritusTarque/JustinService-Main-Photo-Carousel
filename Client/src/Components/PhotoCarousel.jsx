// stateful component with currentPicture

// main window shows the main photo of the item/product when the page loads / is redirected to the item page when the item is clicked on that they want to purchase
// has a Mouse Hover Zoom image functionality
// has a click&drag swipe like functionality to go to the next photo either to the right or the left (down the picture column is to the right, up the picture column is to the left**)

// onClick this becomes the picture in the photoCarousel.... - does this component need to contain state? - considering this to be functional only and stateful to be the PhotoCarousel with a currentPic:  property in state.

import React, { Component } from 'react';
// destructure component off of react so we dont need to call extends React.Component
export default class PhotoCarousel extends Component {
  render() {
    return <div />;
  }
}
