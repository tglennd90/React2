import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookCard = (props) => {
    return (
        <div className="bookCard">
            <Card className="bg-dark text-white">
                <Card.Img src={props.image} alt="Card Image" />
                <Card.ImgOverlay>
                    <Card.Title>Title:{props.title}</Card.Title>
                    <Card.Text>Author(s):{props.author}</Card.Text>
                    <Card.Text>Description:{props.description}</Card.Text>
                    <a href={props.link}><Button variant="primary">More Information</Button></a>
                    <a href={props.save}><Button variant="success">Save Book</Button></a>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default BookCard;