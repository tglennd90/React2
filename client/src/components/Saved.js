import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
// import axios from 'axios';

import SavedBooks from './SavedBooks';
import Header from './Header';
import Title from './Title';

class Saved extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Title />
                <SavedBooks />
            </Container>
            )
    }
}

export default Saved;