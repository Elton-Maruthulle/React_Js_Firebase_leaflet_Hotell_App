import React from "react";
import CleanerImage from "../../assets/hotelcleaner.jpg";
import FoodImage from "../../assets/hotelfood.jpg";
import SecurityImage from "../../assets/hotelsecurity.jpg";
import ParkingImage from "../../assets/hotelparking.jpg";
import "./landingpagecontent.css";

function landingpagecontent() {
  return (
    <div className="landingpagecontent">
      <div className="landingpagecontentcontainer">
        <div className="firstrow">
          <div className="imagescontainer1">
            <img src={CleanerImage} className="imagesimported1" alt="Image" />
            <p className="image1text">
              Your comfort and well-being are our top priorities. Our commitment
              to excellence is reflected in our exceptionally trained cleaning
              staff who are dedicated to maintaining impeccable standards of
              cleanliness. We take pride in their rigorous training, attention
              to detail, and passion for ensuring your stay is spotless and
              inviting. With industry-leading cleaning products and a focus on
              safety, we provide a sanitized environment that promotes peace of
              mind. Your relaxation and satisfaction are paramount, and we look
              forward to offering you an exceptional experience that goes above
              and beyond your expectations.
            </p>
          </div>
        </div>
        <div className="secondrow">
          <div className="imagescontainer2">
            <p className="image2text">
              Experience culinary excellence at our Hotel, where our dedicated
              culinary team, led by our masterful chef, is committed to
              delivering a dining experience like no other. Our diverse menu
              showcases local and international flavors, ensuring a delightful
              journey for your taste buds. Each dish is a work of art, prepared
              with passion and flair. Whether it's a romantic dinner, a special
              celebration, or a casual meal, our exceptional food and impeccable
              service will exceed your expectations. We are ready to cater to
              your unique preferences and dietary requirements, making every
              meal a personalized delight. Come and savor the finest in culinary
              craftsmanship at our Hotel.
            </p>
            <img src={FoodImage} className="imagesimported2" alt="Image" />
          </div>
        </div>
        <div className="thirdrow">
          <div className="imagescontainer3">
            <img src={SecurityImage} className="imagesimported3" alt="Image" />
            <p className="image3text">
              Discover the epitome of safety and security at our Hotel. We are
              dedicated to providing you with an unwavering sense of protection
              and peace of mind throughout your stay. Our highly trained
              security professionals, equipped with state-of-the-art technology
              and vigilant monitoring, ensure your safety and well-being at all
              times. Whether it's 24/7 assistance or a secure and welcoming
              atmosphere, we prioritize your security as if you were at home.
              Choose our Hotel for an experience where you can relax and unwind
              with the utmost confidence in your safety. Your tranquil stay with
              us begins with your security, and we take that responsibility
              seriously.
            </p>
          </div>
        </div>
        <div className="forthrow">
          <div className="imagescontainer4">
            <p className="image4text">
              Discover effortless and convenient parking at our Hotel. With
              ample parking space that ensures you'll always find a spot, our
              well-lit and secure facilities prioritize the safety of both you
              and your vehicle. For added ease, we offer professional valet
              services. Our accessibility and close proximity to the hotel
              entrance make your arrival and departure a breeze, allowing you to
              focus on what truly matters during your stay. Choose our Hotel for
              the best in parking convenience, where every aspect of your visit
              is designed to enhance your experience. Your journey begins with
              stress-free parking at our hotel.
            </p>
            <img src={ParkingImage} className="imagesimported4" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default landingpagecontent;
