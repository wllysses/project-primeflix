// import axios from "axios"
// import { useState, useEffect } from "react"
// import {useParams, Link} from 'react-router-dom'
// import { apiKey } from "../../variables"
// import './info.css'

// export default function Info() {
//     const imgUrl = 'https://image.tmdb.org/t/p/w500'
//     const [movie, setMovie] = useState('')
//     const {id} = useParams()
//     const [genre, setGenre] = useState([])
    

//     useEffect(() => {
//         axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
//         .then(response => {
//             setMovie(response.data)
//             setGenre(response.data.genres)
//         })
//     }, [id])

//     return (
//         <section className="info-container">
//             <div className="movie-poster">
//                 <img src={`${imgUrl}/${movie.poster_path}`} alt={movie.title} />
//             </div>
//             <div className="movie-data">
//                 <h2>{movie.title}</h2>
//                 <p>{movie.overview}</p>
//                 <div>
//                     <span>Release date - {movie.release_date}</span>
//                     <ul>
//                         <span>Genre(s) - </span>
//                         {
//                             genre.map((genre, index) => {
//                                 return (
//                                     <li key={index}>{genre.name}</li>
//                                 )
//                             })
//                         }
//                     </ul>
//                     <span>Note: {movie.vote_average}</span>
//                 </div>
//                 <Link to="/">
//                     <button className="btn-backToHome">Voltar</button>
//                 </Link>
//             </div>
//         </section>
//     )
// }

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import './info.css'

export default function MyVerticallyCenteredModal(props) {
    const [movie, setMovie] = useState('')
    const apiKey = '1dd7bab575c195bc4984778143c79c06'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${apiKey}&language=en-US`)
        .then(response => {return response.json()})
        .then(json => {
            setMovie(json)
            console.log(json)
        })
    }, [props.movieId])
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <section className="info-container">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movie-data">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <div className="infos">
                        <span>Release date - {movie.release_date}</span>
                        <span>Note - {movie.vote_average}</span>
                    </div>
                </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }