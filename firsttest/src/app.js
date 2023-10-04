import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import FormInput from "./component/formInput";

const ShowFooter = () => {
  if (window.location.pathname === "/Footer") return <Footer />;
};
const app = () => {
  return (
    <div>
      <Header />
      <Content />
      {ShowFooter()}
      <FormInput />
    </div>
  );
};

export default app;
