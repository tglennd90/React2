import React from 'react';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';

const SearchBar = (props) => {
    return (
        <Jumbotron fluid>
            <Container>
                <Form onSubmit={props.apiSearch}>
                    <Form.Group controlId="formBasicText">
                        <Form.Control onChange={props.handleSearch} type="text" placeholder="Enter Book Name" className="searchBar" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </Container>
        </Jumbotron>
    )
}

export default SearchBar;