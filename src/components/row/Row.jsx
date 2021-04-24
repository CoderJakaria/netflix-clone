import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from '../../lib/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL = "https://image.tmdb.org/t/p/original"
const Row = ({title, fetchUrl, isLargeRow}) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        };
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    
    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.name || "")
              .then(url => {
                  const urlParams = new URLSearchParams(new URL(url).search);
                  setTrailerUrl(urlParams.get('v'))
              })
              .catch(err => console.log(err))
        }
    }

    return (
        <div className="row">
 
            <h2 className="row__title"> {title} </h2>

            <div className="row__posters">
                {
                    movies.map(movie => (
                        <img
                          key={movie.id}
                          className={`row__poster ${isLargeRow && "row__LargePoster"}`} 
                          src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                          onClick={() => handleClick(movie)}
                          alt={movie.name} />
                    ))
                }
            </div>
            {
                trailerUrl ? (<YouTube videoId={trailerUrl} opts={opts} />) : null
            }
        </div>
    )
}

export default Row
