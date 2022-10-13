// import './movies.css'
// import { Navbar } from '../navbar/navbar'
// import {useState, useEffect} from 'react'
// import {baseUrl, apiKey} from '../../variables.js'
// import axios from 'axios';
// import Scroll from '../scrollToTop/scrollToTop'
// import MyVerticallyCenteredModal from '../infoPage/info'

// export const Movies = () => {

//     const [modalShow, setModalShow] = useState(false);
//     const [movie, setMovie] = useState([])
//     const [movieId, setMovieId] = useState(1010712)
//     let [page, setPage] = useState(1)
//     const imgUrl = 'https://image.tmdb.org/t/p/w500'

//     useEffect(() => {
//         axios
//         .get(`${baseUrl}api_key=${apiKey}&language=en-US&page=${page}`)
//         .then(response => {
//         setMovie(response.data.results)
//         setPage(response.data.page)
//         }).catch(err => {
//         console.log('Erro: ' + err)
//         })
//     }, [page])
    
//     return (
//         <>  
//             <Navbar to="/" />
//             <section className="movies-container">
//                 {
//                     movie.map((movies, index) => {
//                         return (
//                             //<Link to={`/info/${movies.id}`} key={index}>
//                                 <div 
//                                 className="movie" 
//                                 key={movies.id} 
//                                 onClick={() => setModalShow(true)}>
//                                     <img src={`${imgUrl}/${movies.poster_path}`} alt={movies.title} onClick={() => setMovieId(movies.id)}/>
//                                     <h3>{movies.title}</h3>
//                                 </div>
//                             //</Link>     
//                         )
//                     })
//                 }
//             </section>
//             <div className="buttons">
//                 <button 
//                 onClick={() => {
//                     if(page === 1) {
//                         return
//                     } else {
//                         setPage(page - 1)
//                     }
//                 }}>
//                     Prev
//                 </button>
//                 <button 
//                 onClick={() => {
//                     setPage(page + 1)
//                 }}>
//                     Next
//                 </button>
//             </div>
//             <Scroll />

//             <MyVerticallyCenteredModal
//               show={modalShow}
//               movieId={movieId}
//               onHide={() => setModalShow(false)}
//             />
//         </>
//     )
// }