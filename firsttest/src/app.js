import React, { useContext } from "react";
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
import { ColorContext } from "./HooksExample/useContextExample";

const ShowFooter = () => {
  if (window.location.pathname === "/Footer") return <Footer />;
};
const App = () => {
  //5-useContext
  const { data, changeData } = useContext(ColorContext);
  return (
    <div>
      <UseRefExample />
      {data.name}
      {data.id}
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
          <Route path="/ref" element={<UseRefExample />} />
          <Route path="/effect" element={<UseEffectExample />} />
        </Routes>
      </BrowserRouter>
      {ShowFooter()}
    </div>
  );
};

export default App;
