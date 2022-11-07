


const reducer = (state, action) => {
  if (action === "increment") {
    return {count: state.count + state.move,
            move: state.move,
           };
    
  } else if (action === "decrement") {
    return {count: state.count - state.move,
            move: state.move,
           };

    
  } else if (action === "reset") {
    return {count: 0,
            move: state.move,
             };
            }

    else if (action.type === "moveUpdate")
  {
    return {
      count: state.count,
      move: action.move,
    };
  
    
  } else {
    throw new Error();
  }
};

export default reducer;