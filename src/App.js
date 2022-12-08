import './components/homePage/movies.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import MyVerticallyCenteredModal from './components/infoPage/info.jsx'
import {Navbar} from './components/navbar/navbar.jsx'
import Scroll from './components/scrollToTop/scrollToTop';


function App() {
    const [modalShow, setModalShow] = useState(false);
    const [movie, setMovie] = useState([])
    const [movieid, setMovieId] = useState(1010712)
    let [page, setPage] = useState(1)
    const imgUrl = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=1dd7bab575c195bc4984778143c79c06&language=en-US&page=${page}`)
        .then(response => {
        setMovie(response.data.results)
        setPage(response.data.page)
        }).catch(err => {
        console.log('Error: ' + err)
        })
    }, [page])
    
    return (
        <>  
            <Navbar />
            <section className="movies-container">
                {
                    movie.map((movies) => {
                        return (
                              <div 
                              className="movie" 
                              key={movies.id} 
                              onClick={() => setModalShow(true)}
                              >   
                                  <img src={`${imgUrl}/${movies.poster_path}`} alt={movies.title} onClick={() => setMovieId(movies.id)}/>
                                  <h3>{movies.title}</h3>
                              </div>
                                
                        )
                    })
                }
            </section>
            <div className="buttons">
                <button 
                onClick={() => {
                    if(page === 1) {
                        return
                    } else {
                        setPage(page - 1)
                    }
                }}>
                    Prev
                </button>
                <button 
                onClick={() => {
                    setPage(page + 1)
                }}>
                    Next
                </button>
            </div>

            <Scroll />

            <MyVerticallyCenteredModal
              show={modalShow}
              movieId={movieid}
              onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default App;