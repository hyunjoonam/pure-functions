let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
// const reducer = (state = initialState, action) => {
// 	let { type, counterIndex } = action;
// 	if (type == "INCREMENT") {
// 		state.counters[counterIndex]++;
// 		return state;
// 	} else if (type == "ADD_COUNTER") {
// 		state.counters.push(0);
// 		return state;
// 	} else {
// 		return state;
// 	}
// }

const reducer = (state = initialState, action) => {
	let newState = {...state, counters: [...state.counters] };
	let { type, counterIndex } = action;
	if (type == "INCREMENT") {
		newState.counters[counterIndex]++;
		return newState;
	} else if (type == "ADD_COUNTER") {
		newState.counters.push(0);
		return newState;
	} else {
		return newState;
	}
}
