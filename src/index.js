import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Protected from './components/Protected';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import BookingPage from './pages/Booking/BookingDate';
import BookingRoom from './pages/Booking/Booking';
import About from './pages/Hotel/components/About/About';
import Contact from './pages/Hotel/components/Contact/Contact';
import MapLocation from './pages/Hotel/components/Map/Location';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<Home />} />
        <Route path="booking" index element={<BookingPage />} />
        <Route path="bookingroom" index element={<BookingRoom />} />
        <Route path="aboutpage" index element={<About />} />
        <Route path="contactpage" index element={<Contact />} />
        <Route path="Mappage" index element={<MapLocation />} />
      </Route>
    </Route>
  ),
  { basename: '/React_Js_Firebase_leaflet_Hotell_App' }
);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);