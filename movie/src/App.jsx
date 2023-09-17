
import { useState, useEffect } from 'react'
import './App.css'
import MovieBox from './movieBox'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav, Form, FormControl, Button,} from 'react-bootstrap';
import * as input from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./assets/logo.svg";
// import * as Carousel from "react-bootstrap/Carousel";
// import * as ExampleCarouselImage from "react-bootstrap/Carousel";
// import { Carousel,  } from 'react-bootstrap/Carousel';
// import * as Carousel from "react-bootstrap/Carousel";
import { Carousel } from 'bootstrap';
// import caro from "./caro.jsx";


  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d5a553fa52193a73303ddb7b160aaccf";

  const  API_SEARCH  =" https://api.themoviedb.org/3/movie/?&append_to_response=videos&api_key=d5a553fa52193a73303ddb7b160aaccf";
  function App() {

  const [movies, setMovies] = useState([])
    const [query, setQuery]=useState('');
 useEffect(() => {
  fetch(API_URL)
  .then((res)=>res.json())
  .then(data=> {
    console.log(data);
    setMovies(data.results);
  })
 }, [])

  const searchMovie = async(e)=>  {   
  e.preventDefault();
  console.log("Searching");
  try {
    const  url = "https://api.themoviedb.org/3/movie/335977?&append_to_response=videos&api_key=d5a553fa52193a73303ddb7b160aaccf";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
  }
  catch(e) {
    console.log(e);
  }
}

const changeHandler= (e) => {
  setQuery(e.target.value);
}
  return (
    <>
    <Navbar bg=''  className='navbar' expand='lg' variant='dark'>
      <Container fluid > 
      <Navbar.Brand href='' className='navBar_brand'>
        <img src={logo} />MovieBox</Navbar.Brand>
     
      <Navbar.Toggle aria-controls='navbarScroll'>
      </Navbar.Toggle>

        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-3' 
          style={{maxHeight:"100px"}} 
          navbarScroll> </Nav>
  

<Form className="d-flex  col searchBtn " onSubmit={searchMovie}>
            <Form.Control
              type="search"
              placeholder="Search Movie" 
              className="col"
              aria-label="search" name='query' value={query} onChange={changeHandler}
              //  icon {({name: 'user'})}
            />
            <Button variant="secondary" type='submit'>Search</Button>
          </Form>



          {/* <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>{}</h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>{}</h3>
          <p>{}.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>{}</h3>
          <p>
            {}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}


    {/* <Button  variant="secondary" type="submit"> Search</Button>
    </Form> */}

    <Navbar.Brand href=''>Sign In</Navbar.Brand>

        </Navbar.Collapse>
      </Container>
    </Navbar>

<div>
  {movies.length > 0 ?(
    <div  className='container'> 
    <h2 className="featured"> Featured Movie</h2>
      <div className='grid'>
      {movies.map((moviesReq)  => 
<MovieBox key={moviesReq.id} {...moviesReq}/>  )}
</div>
        </div>
  ):(
      <h2>Movie Not Found!!! </h2>
  )}

       
</div>

     
    </>
  )
}

export default App
