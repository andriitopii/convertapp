import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import App from "./component/App/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./component/NotFound/NotFound";
import Faq from "./component/Faq/Faq";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/crypto" element={<App />} />
          <Route path="/resoursec" element={<App />} />
          <Route path="/blog" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  </>
);
