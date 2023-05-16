import Navbar from './Component/Navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home'
import About from './Component/AboutUs/About';
import Galery from './Component/Galery/Galery';
import Team from './Component/Team/Team';
import Contact from './Component//ContactUs/Contact';
import Footer from './Component/Footer/Footer';
import Donate from './Component/Donate/Donate';
import Events from './Component/OurEvents/Events';
import EventsFullPage from './Component/Home/OurEvents/EventsFullPage';
import Alumni from './Component/Alumni/Alumni';
import Error from './Component/ErrorPage/Error';
import AlumniDetails from './Component/Alumni/AlumniDetails';
import Test from './Component/Test';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event'>
          <Route index element={<Events />} />
          <Route path=":id" element={<EventsFullPage />} />
          <Route path="/event/:id" element={<EventsFullPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni"  >
          <Route index element={<Alumni />} />
          <Route path=":year" element={<AlumniDetails />} />
        </Route>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
