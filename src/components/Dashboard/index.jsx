import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardMedia, CardContent, Typography, Box, Card, CircularProgress } from '@mui/material';
import { fetchBooks } from '../../redux/actions';

const Dashboard = ({ getBooks, books, history, ...rest }) => {
    useEffect(() => {
        getBooks();
    }, []);

    if (!Object.keys(books).length) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }
    return (
        <Box>
            <Typography variant="h4" component="h4" sx={{ textAlign: 'center', margin: '20px 0' }}>Books Listing</Typography>
            <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                {books.items.map((book) => {
                    const { volumeInfo: { imageLinks, title }, id } = book;
                    return (
                        <Link key={id} to={`/details/${id}`} style={{ textDecoration: 'none' }}>
                            <Card 
                                sx={{ width: 300, height: 300, margin: '10px' }} 
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <CardMedia 
                                        component="img" 
                                        image={imageLinks.smallThumbnail}
                                        alt={title} 
                                        sx={{ width: 'auto', height: 'auto' }} 
                                    />
                                </Box>
                                <CardContent>
                                    <Typography variant="p" component="div">{title}</Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </Box>
        </Box>
    );
}

const mapDispatchToProps = (dispatch) => ({
    getBooks: () => dispatch(fetchBooks()),
});

const mapStateToProps = (state) => ({
    books: state.books,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
