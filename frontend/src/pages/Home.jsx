import React from "react";
import Theme from "../components/Theme";
import Form from "../components/Form";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white min-h-screen">
      <div>Application tracker</div>
      <Theme />
      <div>
       <Form/>
      </div>
    </div>
  );
};

export default Home;
