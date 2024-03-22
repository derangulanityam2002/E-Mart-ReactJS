import React from "react";

import { acData } from "../data/ac";

const AcData = () => {
  return (
    <div className="pageSection">
      {acData.map((item) => {
        return (
          <div key={item.id}>
            {" "}
            {/* Add a unique key for each item */}
            <img src={item.image} alt="" />
            <p>{item.company}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AcData;
