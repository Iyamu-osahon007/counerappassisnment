import React, { useReducer } from "react";
import reducer from "./Reducer";
import Slide from "./Slider"


function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, move: 1 });

  return (
    <div className="container">
      <div className="card">
        <h1> Counter Application </h1>
        <h3> {state.count} </h3>
        <div>
          <button className="btn1" onClick={() => dispatch("increment")}>increment
          </button>

          <button className="btn2" onClick={() => dispatch("decrement")}>decrement</button>

          <button className="btn3" onClick={() => dispatch("reset")}>Reset</button>

        </div>
        <div>
          <Slide
            min={1}
            max={100}
            onchange={(value) => 
              dispatch({
                type: "stepUpdate",
                step: value,
              })
            }

          />


        </div>

      </div>


    </div>
  );
}


export default Counter;