let initialState = {
	counterValue: 0
};

// This reducer isn't pure! It updates the "counterValue" key of the original 
//     state object
// const reducer = (state = initialState, action) => {
// 	if (action.type == "INCREMENT") {
// 		state.counterValue++;
// 		return state;
// 	} else {
// 		return state;
// 	}
// }

const reducer = (state = initialState, action) => {
	let newState = {...state}
	if (action.type == "INCREMENT") {
		newState.counterValue++;
		return newState;
	} else {
		return newState;
	}
}

// const reducer = (state = initialState, action) => {
// 	if (action.type == "INCREMENT") {
// 		return {
// 			counterValue: state.counterValue + 1
// 		};
// 	} else {
// 		return state;
// 	}
// }
