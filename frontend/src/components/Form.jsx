import React, { useState } from "react";

const Form = () => {
  const [showform, setShowform] = useState(false);

  return (
    <div>
      <button onClick={() => setShowform(!showform)}>New Application</button>
      {showform && (
        <form>
          Position <br />
          <input
            type="text"
            required
            placeholder="Enter Position you're applying for"
          />
          <br />
          Company name <br />
          <input
            type="text"
            required
            placeholder="Enter the name of the company"
          />{" "}
          <br />
          Application date <br />
          <input type="date" />
          <br />
          Status <br />
          <select name="" id="">
            <option value="0">Select</option>
            <option value="1">Applied</option>
            <option value="2">Waiting</option>
            <option value="3">Interview Scheduled</option>
            <option value="4">Rejected</option>
            <option value="5">Accepted</option>
          </select><br />
          <button>Save Application</button>
        </form>
      )}
    </div>
  );
};

export default Form;
