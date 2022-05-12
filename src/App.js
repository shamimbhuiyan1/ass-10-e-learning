import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Banner from "./Pages/Home/Home/Banner/Banner";
import Experience from "./Pages/Home/Experience/Experience";

import Service from "./Pages/Home/Service/Service";
import Review from "./Pages/Home/Review/Review";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/banner" element={<Banner></Banner>}></Route>
        <Route path="/experience" element={<Experience></Experience>}></Route>

        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
