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
            title: "",
            author: "",
            description: "",
            image: "",
            link: ""
        }
    }

    handleSave = (event, props) => {
        event.preventDefault();
        this.setState({
            title: props.title,
            author: props.author,
            description: props.description,
            image: props.image,
            link: props.link
        });
        axios.post("/", props).then(props => {console.log(props)})
        // console.log(this.state.title)
        // console.log(this.state.author)
        // console.log(this.state.description)
        // console.log(this.state.image)
        // console.log(this.state.link)
    }

      apiSave = (event) => {
          event.preventDefault();
          console.log(this.title)
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

    render() {
        return (
            <Container className="resultsArea">
                <SearchBar apiSearch={this.apiSearch} handleSearch={this.handleSearch} />
                <BookList books={this.state.books} save={this.handleSave} apiSave={this.apiSave} />
            </Container>
        )
    }
}

export default Results;