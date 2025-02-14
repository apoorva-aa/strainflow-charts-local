// import React from "react";
// import CasesLeftGraph from "./CasesLeftGraph";

// const Cards = (country) => {
//   console.log(country.country);
//   const history = country.country.map((c) => {
//     return (
//       <div className="centered seven wide column">
//         <CasesLeftGraph country={c} labels={c.predDates} />
//       </div>
//     );
//   });
//   return <>{history}</>;
// };

// export default Cards;
import React, { useState } from "react";
import { cloneDeep } from "lodash";

import CasesLeftGraph from "./CasesLeftGraph";
import Dropdown from "./Dropdown";

const Cards = (country) => {
  // console.log(country)
  const [month, selectMonth] = useState(country.country !== "France" ? "Oct '21" : "Jul '22");
  let monthList = [];
  let history;
  for (const c of country.country) {
    if (c.month === month) history = cloneDeep(c);
    monthList.push(c.month);
  }

  return (
    <>
      <div className="ui row">
        <div
          className="centered four wide column"
          style={{ paddingTop: "20px" }}
        >
          <Dropdown
            selection={month}
            label={"Select the month"}
            onSelect={selectMonth}
            options={monthList}
          />
        </div>
      </div>

      <div className="centered seven wide column">
        <CasesLeftGraph country={history} labels={history.predDates} />
      </div>
    </>
  );
};

export default Cards;