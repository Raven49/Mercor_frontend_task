import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div >
      {/* <h1>Homepage</h1> */}
      {/* <p className="headline">
        
      </p> */}
      <ul>
        <li>
          <Link to="/cashapp">CashApp</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
