import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getMovie = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
  };

  useEffect(() => { 
    getMovie();
  },[])

  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.medium_cover_image} alt={movie.title} />
      {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
    </div>
  );
}

export default Detail;
