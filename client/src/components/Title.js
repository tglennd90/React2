import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Title = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>(React) Google Books Search</h1>
                <p>Search for books, and Save the ones you like!</p>
            </Container>
        </Jumbotron>
    )
}

export default Title;