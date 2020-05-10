import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BookCard = (props) => {

    return (
        <Card bg="dark" text="white" border="dark" className="text-center" id="bookCard">
            <Card.Header id="bcHeader">{props.title}</Card.Header>
            <Card.Body>
                <Card.Img src={props.image} alt="Card Image" />
                <Card.Text>{props.description}</Card.Text>
                <a href={props.link}><Button variant="primary">More Information</Button></a>
                <Button onClick={(event)=>props.save(event, props)} variant="primary">Save Book</Button>
            </Card.Body>
            <Card.Footer id="bcFooter">Author(s): {props.author}</Card.Footer>
        </Card>
    )
}

export default BookCard;