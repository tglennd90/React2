import React from 'react';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <Form>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Enter Book Name" className="searchBar" />
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