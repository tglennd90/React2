import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header';
import Title from './Title';
import SearchBar from './SearchBar';
import Results from './Results';

class Search extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Title />
                <SearchBar />
                <Results />
            </Container>
        )
    }
}

export default Search;