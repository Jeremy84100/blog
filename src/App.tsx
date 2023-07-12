import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import JsonCreator from "./components/JsonCreator";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:articleId" element={<Article />} />
        <Route path="/creator" element={<JsonCreator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
