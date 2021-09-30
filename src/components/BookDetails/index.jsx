import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Box, Typography, CardMedia, CardContent } from '@mui/material';

const BookDetails = ({ bookDetails }) => {
    if (!Object.keys(bookDetails).length) {
        return <Redirect to="/" />;
    }
    const { volumeInfo: { imageLinks, title, subtitle } } = bookDetails;
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '0 30px' }}>
                <Link to="/" style={{ widht: '100px' }}>Go Back</Link>
                <Typography variant="h4" component="h4" sx={{ textAlign: 'center', margin: '20px 0', width: 'calc(100% - 100px)' }}>Book Details</Typography>
            </Box>
            <Box sx={{ display: 'flex', padding: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CardMedia 
                        component="img" 
                        image={imageLinks.thumbnail}
                        alt={title} 
                        sx={{ minHeight: 300, minWidth: 250 }} 
                    />
                </Box>
                <CardContent>
                    <Typography variant="p" component="p">{subtitle}</Typography>
                </CardContent>
            </Box>
        </Box>
    );
}

const mapStateToProps = (state, props) => {
    const { match: { params } } = props;
    let bookDetails = {};
    if (state.books && state.books.items && state.books.items.length) {
        bookDetails = state.books.items.find((book) => book.id === params.id);
    }
    return {
        bookDetails,
    };
}

export default connect(mapStateToProps)(BookDetails);
