import React, { useState } from "react";
import { partners } from "./Partners";
import "./OurPartners.css";

const OurPartners = () => {
  const [ourPartners, setOurPartners] = useState(partners);
  return (
    <div>
      <div>
        <marquee className="marquee">
          <div className="photo">
            {ourPartners.map((ele) => (
              <img src={ele} alt="company"></img>
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default OurPartners;
