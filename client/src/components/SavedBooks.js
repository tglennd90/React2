// import React from 'react';
import axios from 'axios';

const SavedBooks = () => {
    
        axios.get('http://localhost:8000/saved')
            .then((response) => {
                console.log(response.data)    
            })
            .catch(() => {
                console.log("Data Not Received")
            })
    return null;
}

export default SavedBooks;