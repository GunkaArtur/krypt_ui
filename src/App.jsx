import React from "react";
import {
  Navbar,
  Welcome,
  Loader,
  Footer,
  Services,
  Transactions,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <Services></Services>
      <Transactions />
      <Footer></Footer>
    </div>
  );
};

export default App;
