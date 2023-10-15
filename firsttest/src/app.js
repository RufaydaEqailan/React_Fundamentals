import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
// import FormInput from "./component/formInput";
import About from "./about";
import Error404 from "./error404";
import Home from "./home";
import UseStateExample from "./HooksExample/useStateCount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateText from "./HooksExample/useStateText";
import UseStateLarsh from "./HooksExample/useStateLarsh";
import StateCount from "./HooksExample/stateCount";
import UseEffectExample from "./HooksExample/useEffectExample";
import UseRefExample from "./HooksExample/useRefExample";

const ShowFooter = () => {
  if (window.location.pathname === "/Footer") return <Footer />;
};
const app = () => {
  return (
    <div>
      <UseEffectExample />
       <UseRefExample />
      <BrowserRouter>
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/state" element={<UseStateExample />} />
          <Route path="/text" element={<UseStateText />} />
          <Route path="/larsh" element={<UseStateLarsh />} />
          <Route path="/count" element={<StateCount />} />
        </Routes>
      </BrowserRouter>
      {ShowFooter()}
    </div>
  );
};

export default app;
