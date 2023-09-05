import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
import SingleArticle from "./components/pages/SingleArticle";

function App() {
  return (
    <section className="app">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
      </Routes>
    </section>
  );
}

export default App;
