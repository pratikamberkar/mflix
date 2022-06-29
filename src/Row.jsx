import { useEffect, useState } from "react";
import Axios from './Axios';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl}) => {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await Axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return(
        <div>
            <h2>{title}</h2>
            <div className="container">
                {movies.map(movie => (
                    <img className="original_img" src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>

        </div>
    )
}

 export default Row;