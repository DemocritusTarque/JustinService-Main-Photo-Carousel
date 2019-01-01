// stateful component with currentPicture

// main window shows the main photo of the item/product when the page loads / is redirected to the item page when the item is clicked on that they want to purchase
// has a Mouse Hover Zoom image functionality
// has a click&drag swipe like functionality to go to the next photo either to the right or the left (down the picture column is to the right, up the picture column is to the left**)

// onClick this becomes the picture in the photoCarousel.... - does this component need to contain state? - considering this to be functional only and stateful to be the PhotoCarousel with a currentPic:  property in state.

import React from 'react';
import PicturesColumn from './PicturesColumn.jsx';

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      images: [],
      products: [],
      currentProduct: []
    };
  }

  componentDidMount() {
    var itemId = this.state.id;
    fetch(`/api/item/${itemId}`)
    .then( (res) => {
      console.log(res, 'CLIENT SIDE RES!!??')
      res.json()
    })
    .then( (res) => {
      this.setState({
        currentProduct = res,
      })
    }) 
  }

  render () {
    return (
      <div>
        <h1>Yooooooo!!!</h1>
        <PicturesColumn images={this.state.images} imageId={this.state.id} currentProduct={this.state.currentProduct}/> 
      </div>
    ) 
  }

}

export default PhotoCarousel;


// import React, { Component } from 'react';
// // destructure component off of react so we dont need to call extends React.Component
// export default class PhotoCarousel extends Component {
//   render() {
//     return <div />;
//   }
// }
