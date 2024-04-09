import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Component } from "react";
import "./OwlCarousel.css";

class Owldemo1 extends Component {
  render() {
    const options = {
      items: 1,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
    };

    const carouselItems = [
      {
        title: "Schools",
      },
      {
        title: "Hospitals",
      },
      {
        title: "Resort Park",
      },
      {
        title: "Shopping Malls",
      },
      {
        title: "Airport",
      },
      {
        title: "Train Station",
      },
      {
        title: "Nightlife",
      },
      {
        title: "Public Wifi",
      },
      {
        title: "Parking Lot",
      },
      {
        title: "Security",
      },
      {
        title: "Public Transport",
      },
      {
        title: "Bus Station",
      },
      {
        title: "Quiet",
      },
    ];

    return (
      <div className="container">
        <div className="owl-carousel-container">
          <OwlCarousel options={{ 
              items: 5,  
              loop: true,  
              nav: true,  
              margin: 10,  
              autoplay: true  
          }}>
              {/* Your buttons */}
              <button>Schools</button>
              <button>Hospitals</button>
              {/* Add more buttons */}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
