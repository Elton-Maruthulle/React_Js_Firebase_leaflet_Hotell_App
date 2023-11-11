import './Booking.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import room1 from './Rooms/Room (1).jpg';
import room2 from './Rooms/Room (2).jpg';
import room3 from './Rooms/Room (3).jpg';
import room4 from './Rooms/Room (4).jpg';
import room5 from './Rooms/Room (5).jpg';
import room6 from './Rooms/Room (6).jpg';
import room7 from './Rooms/Room (7).jpg';
import room8 from './Rooms/Room (8).jpg';
import room9 from './Rooms/Room (9).jpg';
import room10 from './Rooms/Room (10).jpg';
import room11 from './Rooms/Room (11).jpg';
import room12 from './Rooms/Room (12).jpg';



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
const Book = () => {
    let Rooms = [
        {
            name: "Twinsize",
            price: "2500 per night",
            image: room1,
        },
        {
            name: "Selaloqiue",
            price: "4500 per night",
            image: room2,
        },
        {
            name: "Clean Linen",
            price: "3200 per night",
            image: room3,
        },
        {
            name: "Dark Night",
            price: "4000 per night",
            image: room4,
        },
        {
            name: "Ecxotic Home",
            price: "5000 per night",
            image: room5,
        },
        {
            name: "Buddy Mate",
            price: "2500 per night",
            image: room6,
        },
        {
            name: "Woody Tame",
            price: "3000 per night",
            image: room7,
        },
        {
            name: "Family",
            price: "4000 per night",
            image: room8,
        },
        {
            name: "Little Paris",
            price: "3500 per night",
            image: room9,
        },
        {
            name: "House Of Gold",
            price: "3000 per night",
            image: room10,
        },
        {
            name: "Italian Rose",
            price: "5000 per night",
            image: room11,
        },
        {
            name: "Full House",
            price: "8000 per night",
            image: room12,
        },

        

        
    ]
    // console.log(Rooms[0].price);
    const bookRoom1 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[0].image;
        nameTarget.innerHTML = Rooms[0].name;
        priceTarget.innerHTML = 'R' + Rooms[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[0].image,
            RoomName: Rooms[0].name,
            RoomPrice: 'R' + Rooms[0].price,
            });
        }

    }
    const bookRoom2 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[1].image;
        nameTarget.innerHTML = Rooms[1].name;
        priceTarget.innerHTML = 'R' + Rooms[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[1].image,
            RoomName: Rooms[1].name,
            RoomPrice: 'R' + Rooms[1].price,
            });
        }
    }

    const bookRoom3 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[2].image;
        nameTarget.innerHTML = Rooms[2].name;
        priceTarget.innerHTML = 'R' + Rooms[2].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[2].image,
            RoomName: Rooms[2].name,
            RoomPrice: 'R' + Rooms[2].price,
            });
        }
    }
    const bookRoom4 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[3].image;
        nameTarget.innerHTML = Rooms[3].name;
        priceTarget.innerHTML = 'R' + Rooms[3].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[3].image,
            RoomName: Rooms[3].name,
            RoomPrice: 'R' + Rooms[3].price,
            });
        }
    }
    const bookRoom5 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[4].image;
        nameTarget.innerHTML = Rooms[4].name;
        priceTarget.innerHTML = 'R' + Rooms[4].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[4].image,
            RoomName: Rooms[4].name,
            RoomPrice: 'R' + Rooms[4].price,
            });
        }
    }

    const bookRoom6 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[5].image;
        nameTarget.innerHTML = Rooms[5].name;
        priceTarget.innerHTML = 'R' + Rooms[5].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[5].image,
            RoomName: Rooms[5].name,
            RoomPrice: 'R' + Rooms[5].price,
            });
        }
    }

    const bookRoom7 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[6].image;
        nameTarget.innerHTML = Rooms[6].name;
        priceTarget.innerHTML = 'R' + Rooms[6].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[6].image,
            RoomName: Rooms[6].name,
            RoomPrice: 'R' + Rooms[6].price,
            });
        }
    }

    const bookRoom8 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[7].image;
        nameTarget.innerHTML = Rooms[7].name;
        priceTarget.innerHTML = 'R' + Rooms[7].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[7].image,
            RoomName: Rooms[7].name,
            RoomPrice: 'R' + Rooms[7].price,
            });
        }
    }

    const bookRoom9 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[8].image;
        nameTarget.innerHTML = Rooms[8].name;
        priceTarget.innerHTML = 'R' + Rooms[8].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[8].image,
            RoomName: Rooms[8].name,
            RoomPrice: 'R' + Rooms[8].price,
            });
        }
    }

    const bookRoom10 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[9].image;
        nameTarget.innerHTML = Rooms[9].name;
        priceTarget.innerHTML = 'R' + Rooms[9].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[9].image,
            RoomName: Rooms[9].name,
            RoomPrice: 'R' + Rooms[9].price,
            });
        }
    }

    const bookRoom11 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[10].image;
        nameTarget.innerHTML = Rooms[10].name;
        priceTarget.innerHTML = 'R' + Rooms[10].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[10].image,
            RoomName: Rooms[10].name,
            RoomPrice: 'R' + Rooms[10].price,
            });
        }
    }

    const bookRoom12 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[11].image;
        nameTarget.innerHTML = Rooms[11].name;
        priceTarget.innerHTML = 'R' + Rooms[11].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            RoomImage: Rooms[11].image,
            RoomName: Rooms[11].name,
            RoomPrice: 'R' + Rooms[11].price,
            });
        }
    }
    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    }
    return (
        
        <div className="box">
        <div className='bookingbookingconent'>
            <div className="content">
                <div className="text">Choose the best Room</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' alt="" />
                         <div className="Room_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookRoom1}>
                            <img src={Rooms[0].image} alt="Room1" />
                            <div className="Room_name">{Rooms[0].name}</div>
                            <div className="price">{'R' + Rooms[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom2}>
                            <img src={Rooms[1].image} alt="Room2" />
                            <div className="Room_name">{Rooms[1].name}</div>
                            <div className="price">{'R' + Rooms[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom3}>
                            <img src={Rooms[2].image} alt="Room3" />
                            <div className="Room_name">{Rooms[2].name}</div>
                            <div className="price">{'R' + Rooms[2].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom4}>
                            <img src={Rooms[3].image} alt="Room4" />
                            <div className="Room_name">{Rooms[3].name}</div>
                            <div className="price">{'R' + Rooms[3].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom5}>
                            <img src={Rooms[4].image} alt="Room4" />
                            <div className="Room_name">{Rooms[4].name}</div>
                            <div className="price">{'R' + Rooms[4].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom6}>
                            <img src={Rooms[5].image} alt="Room4" />
                            <div className="Room_name">{Rooms[5].name}</div>
                            <div className="price">{'R' + Rooms[5].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom7}>
                            <img src={Rooms[6].image} alt="Room4" />
                            <div className="Room_name">{Rooms[6].name}</div>
                            <div className="price">{'R' + Rooms[6].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom8}>
                            <img src={Rooms[7].image} alt="Room4" />
                            <div className="Room_name">{Rooms[7].name}</div>
                            <div className="price">{'R' + Rooms[7].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom9}>
                            <img src={Rooms[8].image} alt="Room4" />
                            <div className="Room_name">{Rooms[8].name}</div>
                            <div className="price">{'R' + Rooms[8].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom10}>
                            <img src={Rooms[9].image} alt="Room4" />
                            <div className="Room_name">{Rooms[9].name}</div>
                            <div className="price">{'R' + Rooms[9].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom11}>
                            <img src={Rooms[10].image} alt="Room4" />
                            <div className="Room_name">{Rooms[10].name}</div>
                            <div className="price">{'R' + Rooms[10].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRoom12}>
                            <img src={Rooms[11].image} alt="Room4" />
                            <div className="Room_name">{Rooms[11].name}</div>
                            <div className="price">{'R' + Rooms[11].price}</div>
                        </div>
                        
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Book;