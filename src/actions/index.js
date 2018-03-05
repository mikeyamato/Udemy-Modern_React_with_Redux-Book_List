// this will house all the different action creators we make
export function selectBook(book) {
	// selectBook is an action creator and needs to return an action, an object
	// with type property.  
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}

