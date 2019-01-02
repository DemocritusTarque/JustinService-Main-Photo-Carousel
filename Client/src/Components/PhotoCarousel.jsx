// stateful component with currentPicture

// main window shows the main photo of the item/product when the page loads / is redirected to the item page when the item is clicked on that they want to purchase
// has a Mouse Hover Zoom image functionality
// has a click&drag swipe like functionality to go to the next photo either to the right or the left (down the picture column is to the right, up the picture column is to the left**)

// onClick this becomes the picture in the photoCarousel.... - does this component need to contain state? - considering this to be functional only and stateful to be the PhotoCarousel with a currentPic:  property in state.

import React from 'react';
import PicturesColumn from './PicturesColumn.jsx';
import Slider from 'react-slick';

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      images: [],
      productTitle: ''
    };

    this.getProductDetails = this.getProductDetails.bind(this);
    this.getProductPhotos = this.getProductPhotos.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
    this.getProductPhotos();
  }

  getProductDetails() {
    var itemId = this.state.id;
    fetch(`/api/item/${itemId}`)
      .then(response => {
        // console.log(response, 'CLIENT SIDE RES!!??')
        if (response.status !== 200) {
          console.log('error with client side Get Product details!');
          return;
        }

        response.json().then(data => {
          // console.log(data, 'DATA!!!');
          // console.log(data[0].productName, 'what is product response data??');
          this.setState({
            productTitle: data[0].productName
          });
        });
      })
      .catch(error => {
        console.log(
          error,
          'error with component did Mount Product Info Func!!'
        );
      });
  }

  getProductPhotos() {
    var itemId = this.state.id;
    fetch(`api/itemImages/${itemId}`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error with Client SIDE GET Pictures!');
          return;
        }

        response.json().then(data => {
          // console.log(data.images, 'Image DATA!?!?1');
          this.setState({
            images: data.images
          });
        });
      })
      .catch(error => {
        console.log(error, 'Error CLIENT Get Picture Func!!!');
      });
  }

  render() {
    // console.log(this.state.images, 'IMAGES?');
    // console.log(this.state.productTitle, 'PRODUCT TITLE??');

    // console.log(this.state, 'STATE?');

    // console.log(this.props, 'what are props???');
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <div>
          <h2> {this.state.productTitle}</h2>
          <div className="picColumn">
            <PicturesColumn
              images={this.state.images}
              imageId={this.state.id}
            />
          </div>
          <div className="slideCarousel">
            {this.state.images.length ? (
              <Slider {...settings}>
                {this.state.images.map((image, index) => (
                  <div key={index}>
                    <img src={image.urlLink} />
                  </div>
                ))}
              </Slider>
            ) : null}
          </div>
        </div>
      </div>
    );
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
