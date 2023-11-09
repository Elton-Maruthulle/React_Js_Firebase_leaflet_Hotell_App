import  './BookingDate.css';
import BookPage from './Booking';
import { useState } from 'react';
import Navbar from '../Hotel/components/navbar/navbar'

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Home = () => {
    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');
        
        const leave_date = document.getElementById('leave-date');
        const leave_time = document.getElementById('leave-time');

        if(!book_date.value || !book_time.value || !leave_date.value || !leave_time.value){
            alert('Please fill all the fields');
        }else{
            writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'data/'), {
            bookingdate: book_date.value,
            bookingtime: book_time.value,
            leave_date: leave_date.value,
            leave_time: leave_time.value,
            });
        }
            alert('Your booking has been made');
            const BookPageDiv = document.querySelector('.box');
            const container = document.querySelector('.container');
            setvalid(!valid + BookPageDiv.classList.add("show"));
            sethide(!hide + container.classList.add("hide"));
        }
    }
  return (
      <>
        <Navbar />
        <BookPage />
        <div className='bookingdatecontainer'>
        <div className="container">
      <div className="content">
        <div className="text">Book Now</div>
        <div className="form2">
          <div className="txt">Date & Time you would like to Stay</div>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputData">
              <input type="date" name="" id="book-date"/>
            </div>
            <div className="inputData">
              <input type="time" name="" id="book-time" />
            </div>
            <div className="txt">Date & Time you would like to leave</div>
            <div className="inputData">
              <input type="date" name="" id="leave-date" />
            </div>
            <div className="inputData">
              <input type="time" name="" id="leave-time" />
            </div>
            <div className="book">
                <button type="submit" className='bookbutton'>Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
      </>
  );
};
export default Home;