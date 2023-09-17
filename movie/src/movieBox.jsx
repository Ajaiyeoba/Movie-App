import { Modal, Button } from "react-bootstrap";
import * as show from "react-bootstrap";
import React, { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const API_IMG =" https://image.tmdb.org/t/p/w500";


    const MovieBox = ({title,  poster_path,  release_date, overview, vote_average, genre_ids, name }) => {
        const [show, setShow] = useState(false);

        const handleShow = () => setShow(true);
        const handleClose= () => setShow(false);
        return(

        
            <div className="card text-center bg-secondary mb-3 okay">
             
                <div className="card-body cardBody">
                    <img className="card-img" style={{ width: '14rem'}} src={API_IMG +poster_path} />
                    <div className="card-body">
                    <h3 > {title}</h3>
                    <h4> {vote_average}</h4>
                    <h5> {name}</h5>

                    <button type="button" className="btn btn-light viewMovie" onClick={handleShow}> View Movie</button>


                   <Modal show={show} onHide={handleClose} > 
                        <Modal.Header closeButton> 
                            <Modal.Title > </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img className="card-img-top imageBox" style={{width: '10rem'}} src={API_IMG+poster_path}/>
                                <h3 className="Title">{title}</h3>
                                <h4 className="vote"> {vote_average}</h4>
                                <h5 className="date"> {release_date}</h5>
                                <br></br>
                                <h6 className="overview">Overview</h6>
                                <p>{overview}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='' onClick={handleClose} className="closeBtn"> Close</Button>
                            </Modal.Footer>
                   </Modal>
                    </div>
                     </div>
            </div>
        )
    }


    export default MovieBox;