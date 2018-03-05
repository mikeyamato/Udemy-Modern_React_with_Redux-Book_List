import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// this helps flow through the different reducers in our application
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList(){
		// map over an array of books
		return this.props.books.map((book) => {
			return (
				// for each book in the array, create an 'li' that contains the books title
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className='list-group-item'
				>
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className='list-group col-md-4'>
				{/* calls the helper function 'renderList' */}
				{this.renderList()}
			</ul>
		)
	}
}

// a container (aka smart component) is a react component that has a direct connection 
// to the state managed by redux. it's the bridge between react and redux. 

function mapStateToProps(state){
	// whatever is returned will show up as props inside of BookList (this.props)
	// we want access to 'this.props.books' that is why books is the key
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators ({ selectBook: selectBook }, dispatch); 
}

// connect helps return a container
export default connect (mapStateToProps, mapDispatchToProps)(BookList);
