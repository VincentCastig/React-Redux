import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
//bindActionCreators makes sure the action selectBook return value flows through all our reducers
import { bindActionCreators } from 'redux';

class Booklist extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

render() {
    console.log(this.props)
    return (
        <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
    )
}
}

function mapStateToProps(state) {
    //Whatever is returned will show up as props
    //inside of Booklist
    return {
        books: state.books
    };
}

//anything return from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    //Whatever selectBook is called, the result should be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}
//Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);