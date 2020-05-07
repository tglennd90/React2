import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Request from 'superagent';
import axios from 'axios';

// import BookCard from './BookCard';
import SearchBar from './SearchBar';
import BookList from './BookList';

class Results extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            books: [],
            searchField: "",
            posts: []
        }
    }

    apiSearch = (event) => {
        event.preventDefault();
        Request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField})
            .then((data) => {
                this.setState({
                    books: [...data.body.items]
                })
                console.log(this.state.books)
            })
    }

    handleSearch = (event) => {
        // console.log(event.target.value)
        this.setState({
            searchField: event.target.value
        });
    }

    // getDbData = () => {
    //     axios.get('/')
    //       .then((response) => {
    //         const data = response.data
    //         this.setState({ posts: data })
    //         console.log("Data Recieved!")
    //       })
    //       .catch(() => {
    //         console.log("No Data")
    //       })
    //   }

    render() {
        return (
            <Container className="resultsArea">
                <SearchBar apiSearch={this.apiSearch} handleSearch={this.handleSearch} />
                <BookList books={this.state.books} />
            </Container>
        )
    }
}

export default Results;