import React, { useState } from "react";
import Data from "./data";
import "./style.css";

const Accordion = () => {
  const [select, setselected] = useState(null);
  const [add, setadd] = useState("+");

  const [enableMultiselect, setenableMultiselect] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleSingleselect(id) {
    setselected(id === select ? null : id);

    setadd(add === "+" ? "-" : "+");
  }

  function handleMultiselect(getcurrentId) {
    let cpyMultiple = [...multiple];

    const findIndexofCurrentid = cpyMultiple.indexOf(getcurrentId);

    if (findIndexofCurrentid === -1) {
      cpyMultiple.push(getcurrentId);
    } else {
      cpyMultiple.splice(findIndexofCurrentid, 1);
    }

    setmultiple(cpyMultiple);
  }

  function expandAll() {
    //  it work when multiselect is true
    if (multiple.length > 0) {
      setmultiple([]);
    } else {
      let allId = Data.map((dataitem) => dataitem.id);

      setmultiple(allId);
    }
  }
  console.log(multiple);
  console.log(select);

  return (
    <div className="wrapper">
      <button onClick={() => setenableMultiselect(!enableMultiselect)}>
        Enable Multi select
      </button>

      <button
        onClick={() => {
          expandAll();
        }}
      >
        ExpandAll
      </button>
      <div className="accordion">
        {Data.map((dataitem, index) => (
          <div className="item" key={index}>
            <div
              className="title"
              onClick={
                enableMultiselect
                  ? () => handleMultiselect(dataitem.id)
                  : () => handleSingleselect(dataitem.id)
              }
            >
              <h3>{dataitem.question}</h3>
              <span>
                {select === dataitem.id || multiple.includes(dataitem.id)
                  ? "-"
                  : "+"}
              </span>
            </div>
            {enableMultiselect ? (
              multiple.indexOf(dataitem.id) !== -1 && (
                <div className="answers">{dataitem.answer}</div>
              )
            ) : select === dataitem.id ? (
              <div className="answers">{dataitem.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
