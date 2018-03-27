import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
//bindActionCreators makes sure the action selectBook return value flows through all our reducers
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
render() {
    if(!this.props.book) {
        return <div>Select a book to get started.</div>
    }
    return (
        <div>
           <h3>Detail For</h3>
           <div>{this.props.book.title}</div>
           <div>{this.props.book.pages}</div>
        </div>
    )
}
}

function mapStateToProps(state) {
    return  {
        book: state.activeBook
    }
}

//Promote BookList from a component to a container
export default connect(mapStateToProps)(BookDetail);