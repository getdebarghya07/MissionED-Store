import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";
import img7 from "../images/img-7.jpg";
import img8 from "../images/img-8.jpg";
import "./ImgCarousel.css";

function ImgCarousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <div id="store" className="imgCarousel">
      <div className="deals-container">
        <h1 className="deals-header">Deals of the Day</h1>
        <h2 className="coins">
          Spend your
          <span className="mission-coin"> MISSIONED Coins</span> here
        </h2>
      </div>
      <div className="Carousel">
        <Slider {...settings}>
          <div className="cardd-wrapper">
            <div className="cardd">
              <div className="cardd-image">
                <img src={img1} alt="image1" />
              </div>
              <ul className="buy">
                <a href="#">
                  <i class="fas fas-buy fa-shopping-cart"></i>
                </a>
              </ul>
              <div className="details">
                <h2>Fire Boltt Headphones</h2>
              </div>
            </div>
          </div>

          <div className="cardd-wrapper">
            <div className="cardd">
              <div className="cardd-image">
                <img src={img2} alt="image2" />
              </div>
              <ul className="buy">
                <a href="#">
                  <i class="fas fas-buy fa-shopping-cart"></i>
                </a>
              </ul>
              <div className="details">
                <h2>Color Fit Pro Smartwatch</h2>
              </div>
            </div>
          </div>

          <div className="cardd-wrapper">
            <div className="cardd">
              <div className="cardd-image">
                <img src={img3} alt="image3" />
              </div>
              <ul className="buy">
                <li>
                  <a href="#">
                    <i class="fas fas-buy fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>Fogg Perfume for Men</h2>
              </div>
            </div>
          </div>

          <div className="cardd-wrapper">
            <div className="cardd">
              <div className="cardd-image">
                <img src={img4} alt="image4" />
              </div>
              <ul className="buy">
                <li>
                  <a href="#">
                    <i class="fas fas-buy fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>Fogg Perfume for Men</h2>
              </div>
            </div>
          </div>

          <div className="cardd-wrapper">
            <div className="cardd">
              <div className="cardd-image">
                <img src={img5} alt="image5" />
              </div>
              <ul className="buy">
                <li>
                  <a href="#">
                    <i class="fas fas-buy fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>Men's Shoes Sneakers</h2>
              </div>
            </div>
          </div>

          <div className="cardd-wrapper">
            <div className="cardd">
              <div className="cardd-image">
                <img src={img6} alt="image6" />
              </div>
              <ul className="buy">
                <li>
                  <a href="#">
                    <i class="fas fas-buy fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>Leather Wallet for Men</h2>
              </div>
            </div>
          </div>

          <div className="cardd-wrapper">
            <div className="cardd">
              <div className="cardd-image">
                <img src={img7} alt="image7" />
              </div>
              <ul className="buy">
                <li>
                  <a href="#">
                    <i class="fas fas-buy fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>Fifty Shades of Grey</h2>
              </div>
            </div>
          </div>

          <div className="cardd-wrapper">
            <div className="cardd">
              <div className="cardd-image">
                <img src={img8} alt="image8" />
              </div>
              <ul className="buy">
                <li>
                  <a href="#">
                    <i class="fas fas-buy fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>Amazon Prime Subscription</h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ImgCarousel;
