import React, { useEffect, useState } from "react";
import './MovieCard.css';
import { Form, Col, Button, Navbar, Nav, FormControl, Modal} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./MovieList";
import MovieAdd from "./MovieAdd"
import Filtre from "./Filtre"



const AppMovies = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movies, setMovies] = useState([
        {
            titre: "Terminator",
            description: "An augmented human and Sarah Connor must stop an advanced liquid Terminator from hunting down a young girl, whose fate is critical to the human race. whose fate is critical to the human race whose fate is critical to the human race ",
            url: "terminator.jpg",
            note: '5',
            imgSrc:'terminator.jpg'},
        {
            titre: "Shang-Chi",
            description: "In the film, Callum Lynch explores the memories of his ancestor Aguilar de Nerha and gains the skills of a Master Assassin, before taking on the secret Templar society. Filming began in late August 2015 and concluded in January 2016.",
            url: "123456",
            note: '5',
            imgSrc:"Shang.jpg"
        },
        {
            titre: "Last Samurai",
            description: "In the film, Callum Lynch explores the memories of his ancestor Aguilar de Nerha and gains the skills of a Master Assassin, before taking on the secret Templar society. Filming began in late August 2015 and concluded in January 2016.",
            url: "123456",
            note: '5',
            imgSrc:"download.jpg"
        },
        {
            titre: "Mission Impossble",
            description: "In the film, Callum Lynch explores the memories of his ancestor Aguilar de Nerha and gains the skills of a Master Assassin, before taking on the secret Templar society. Filming began in late August 2015 and concluded in January 2016.",
            url: "123456",
            note: '5',
            imgSrc:"mission.jpg"
        },
        {
            titre: "Mortal Kombat ",
            description: "In the film, Callum Lynch explores the memories of his ancestor Aguilar de Nerha and gains the skills of a Master Assassin, before taking on the secret Templar society. Filming began in late August 2015 and concluded in January 2016.",
            url: "123456",
            note: '5',
            imgSrc:"Mortal_Kombat.jpg"
        },
        {
            titre: "Black Friday",
            description: "An ancient Egyptian princess is awakened from her crypt beneath the desert, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.",
            url: "BF.jpg",
            note: '5',
            imgSrc:"BF.jpg"
        },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleMovieAdd = (newValue) => {
        setMovies([...movies, newValue]);
    };
    
    const handleChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };
    useEffect(() => {
        const results = movies.filter(movie =>
            movie.titre.toLowerCase().includes(searchTerm)
        );
    
        setSearchResults(results);
        console.log(searchResults.map(item => (
            { item }
        )))
    }, [searchTerm]);
    


    return (
        
        <div className='AppMovies'>

            <>
                <Navbar bg="light" variant="light" fixed="top">
                    <Navbar.Brand  href="#home">Movie Card</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Filtre searchTerm={searchTerm} handleChange={handleChange} />
                        
                        <Button variant="primary" class="btn btn-dark"onClick={handleShow}>Add Movie</Button>
                    </Form>
                </Navbar>



                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <MovieAdd handleMovieAdd={handleMovieAdd}></MovieAdd>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
          </Button>
                   
                    </Modal.Footer>
                </Modal>
            </>

            

            <MovieAdd handleMovieAdd={handleMovieAdd}></MovieAdd>
            

            <MovieList movies={movies.filter(movie => movie.titre.toLowerCase().includes(searchTerm))} />
        </div>
    );
};

export default AppMovies;
