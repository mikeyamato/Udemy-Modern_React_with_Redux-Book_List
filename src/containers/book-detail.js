import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	// just remember that a component state is independant of the application state.
	// they don't mean the same thing. 

	render() {
		// check to see if a book is available. if not, return a message.
		if(!this.props.book){
			return <div>Select a book to get started.</div>;
		}
		
		return (
			<div>
				<h3>Details For:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect (mapStateToProps)(BookDetail);
