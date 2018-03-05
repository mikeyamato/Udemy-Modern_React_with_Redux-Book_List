// state argument is not application state, only the state this reducer is 
// responsible for.
// 'state=null' is a default value placed there or else we will get error when 
// starting the app. if state is undefined, set to null.
export default function(state = null, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	// base case
	return state;
}
