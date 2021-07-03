import React from "react";
import "./MissionEDpro.css";
function MissionEDpro() {
  return (
    <div>
      <div id="missioned-pro" className="pro_container">
        <h1 className="proheading">MISSIONED PRO</h1>
        <h2 className="proheading_h2">Experience the new way of learning</h2>
      </div>
      <div class="pricing pricing-palden">
        <div class="pricing-item features-item ja-animate">
          <div class="pricing-deco card1">
            <svg class="pricing-deco-img">
              <path class="deco-layer deco-layer--1"></path>
              <path class="deco-layer deco-layer--2"></path>
              <path class="deco-layer deco-layer--3"></path>
              <path class="deco-layer deco-layer--4"></path>
            </svg>
            <div class="pricing-price">
              <span class="pricing-currency">Rs</span>499
              <span class="pricing-period">/-</span>
            </div>
            <h3 class="pricing-title">MissionEd Classic</h3>
          </div>
          <ul class="pricing-feature-list">
            <h2>
              <p className="new_m">Monthly Subscription</p>
            </h2>

            <li className="liist">
              <strong>Live classes </strong>
              and pre-recorded lectures.
            </li>
            <li className="liist">
              <strong> Plenty of practice questions</strong>
              to make you prepared for internship examinations.
            </li>
            <li className="liist">
              <strong>Assured gift</strong>
              vouchers worth Rs. 1000 every month.
            </li>
          </ul>
          <button class="buy-button btn1">Buy Now</button>
        </div>
        <div class="pricing-item features-item ja-animate pricing__item--featured">
          <div class="pricing-deco card2">
            <svg class="pricing-deco-img">
              <path class="deco-layer deco-layer--1"></path>
              <path class="deco-layer deco-layer--2"></path>
              <path class="deco-layer deco-layer--3"></path>
              <path class="deco-layer deco-layer--4"></path>
            </svg>
            <div class="pricing-price">
              <span class="pricing-currency">Rs</span>1499
              <span class="pricing-period">/-</span>
            </div>
            <h3 class="pricing-title">MissionEd Premium</h3>
          </div>
          <ul class="pricing-feature-list">
            <h2>
              <p className="new_m">Quarterly Subscription</p>
            </h2>

            <li className="liist">
              <strong>All Facility</strong>
              from Monthly Subcription.
            </li>
            <li className="liist">
              <strong>Assured cashbacks</strong>
              and gift vouchers worth Rs. 2000 every month.
            </li>
            <li className="liist">
              <strong>Personalised mentor</strong>
              to clear any doubts and help you in internship preparation.
            </li>
          </ul>
          <button class="buy-button btn2">Buy Now</button>
        </div>
        <div class="pricing-item features-item ja-animate">
          <div class="pricing-deco card3">
            <svg class="pricing-deco-img">
              <path class="deco-layer deco-layer--1"></path>
              <path class="deco-layer deco-layer--2"></path>
              <path class="deco-layer deco-layer--3"></path>
              <path class="deco-layer deco-layer--4"></path>
            </svg>
            <div class="pricing-price">
              <span class="pricing-currency">Rs</span>5999
              <span class="pricing-period">/-</span>
            </div>
            <h3 class="pricing-title">MissionEd Classic</h3>
          </div>
          <ul class="pricing-feature-list">
            <h2>
              <p id="bootstrap-overrides" className="new_m">
                Annually Subscription
              </p>
            </h2>

            <li className="liist">
              <strong>Live classes</strong>
              and pre-recorded lectures
            </li>
            <li className="liist">
              <strong> Plenty of practice questions</strong>
              to make you prepared for internship examinations.
            </li>
            <li className="liist">
              <strong>Assured gift</strong>
              vouchers worth Rs. 8000 every month.
            </li>
            <li className="liist">
              <strong>Assured referral</strong>
              in atleast one company/startup.
            </li>
          </ul>
          <button class="buy-button btn3">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default MissionEDpro;
