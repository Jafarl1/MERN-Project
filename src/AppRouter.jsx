import { Routes, Route } from "react-router-dom";
import Bloggers from "./pages/bloggers/Bloggers";
import Places from "./pages/places/Places";
import About from "./pages/about/About";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import AddPlace from "./pages/addplace/AddPlace";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Bloggers />} />
      <Route path="/about" element={<About />} />
      <Route path="/:uid/places" element={<Places />} />
      <Route path="/addplace" element={<AddPlace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default AppRouter;
