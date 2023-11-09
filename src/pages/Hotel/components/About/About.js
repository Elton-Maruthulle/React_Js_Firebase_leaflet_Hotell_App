import React from 'react'
import Navbar from '../navbar/navbar'
import './About.css'
import { Link, useNavigate } from 'react-router-dom'

function About
() {
    const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const targetPosition = window.pageYOffset + viewportHeight * 0.92;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth', // Add smooth scrolling behavior
        });
      };
  return (
    <>
    <Navbar />
    <div className='containeraboutabout'>
    <div className="scroll-down-arrow" onClick={handleScroll}>
          <div className="arrow"></div>
  </div>
    <div className='aboutcontainer'>
        <h2>About StayEase</h2>
        <p className='aboutparagraghs'>Welcome to StayEase, where comfort and luxury meet to provide you with an unforgettable hospitality experience. Nestled in the heart of Johanessburg, our hotel is the perfect destination for both leisure and business travelers.</p>

        <p className='aboutparagraghs'>At StayEase, we take pride in offering a seamless blend of modern elegance and warm hospitality. Our commitment to excellence is reflected in every aspect of your stay, from our meticulously designed rooms and suites to our exceptional dining options and world-class amenities.</p>
    </div>
    <div className='aboutcontainer'>
        <h2 className='aboutcontainercontainer'>
            Our Story
        </h2>
        <p className='aboutparagraghs'>
        Established in 2003, StayEase has been a beacon of hospitality for StayEase for decades. Our story is one of continuous evolution, as we've adapted to the changing needs and preferences of our guests while maintaining our unwavering dedication to exceptional service.
        </p>
        
    </div>
    <div className='aboutcontainer'>
        <h2 className='aboutcontainercontainer'>
            Our Commitment
        </h2>
        <p className='aboutparagraghs'>
            At StayEase, our commitment to your comfort and satisfaction is unwavering. We strive to make your stay with us a memorable one by providing:
        </p>
        <ul className='aboutparagraghs'>
            <li><strong>Luxurious Accommodations:</strong> Our rooms and suites are designed with your comfort in mind, featuring modern amenities, plush bedding, and breathtaking views.</li>
            <li><strong>Exquisite Dining:</strong> Indulge your palate at our on-site restaurants, where our culinary experts craft a symphony of flavors to satisfy every craving.</li>
            <li><strong>World-Class Facilities:</strong> From our state-of-the-art fitness center to our rejuvenating spa, we offer a range of facilities designed to enhance your stay.</li>
            <li><strong>Event Hosting:</strong> Whether it's a wedding, conference, or special event, our versatile venues provide the perfect backdrop for your gatherings.</li>
            <li><strong>Exceptional Service:</strong> Our dedicated staff is here to ensure your needs are met, and your expectations are exceeded.</li>
        </ul>
    </div>
    <div className='aboutcontainer2'>
        <h2 className='aboutcontainercontainer'>
            Explore StayEase
        </h2>
        <p className='aboutparagraghs'>
        Our hotel's prime location allows you to explore the vibrant culture and attractions of StayEase with ease. Whether you're here for business or pleasure, you'll find that our convenient proximity to Carnival City makes your stay all the more enriching.
        </p>

    </div>
    <div className='aboutcontainer2'>
        <h2 className='aboutcontainercontainer'>
        Book Your Stay
        </h2>
        <p className='aboutparagraghs'>
        We invite you to experience the unparalleled comfort and hospitality that StayEase has to offer. Make your reservation today and allow us to be a part of your memorable journey in Johanessburg.


        </p>
        <p className='aboutparagraghs'>
        We look forward to welcoming you to StayEase and creating lasting memories for you and your loved ones.
        </p>
        <Link to="/booking">
          <button className="booknownowbutton">Explore Now!</button>
        </Link>
    </div>
    <div className='aboutparagraghs'>
        
    </div>
    </div>
    </>
  )
}

export default About;
