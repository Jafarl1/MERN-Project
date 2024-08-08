import { Routes, Route } from "react-router-dom";
import Bloggers from "./pages/bloggers/Bloggers";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Bloggers />} />
    </Routes>
  );
}

export default AppRouter;
