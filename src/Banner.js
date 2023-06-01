import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Popular from "./popular";
import { Link } from "react-router-dom";

function Topbanner() {
  const [popular, setpopular] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0d5d318dc7663eee5e5462e95bbaec6a&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("jjj", data);
        setpopular(data.results);
      });
  }, []);

  return (
    <>
      <Carousel className="caroulp">
        {popular.map((movie) => (
          <Carousel.Item>
            <Link to={`/results/${movie.id}`}>
              <img
                className="d-block w-100 img-fluid bannerheight"
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.poster_path
                }`}
              />
              <Carousel.Caption>
                <div className="cont">
                  <h3 className="titel">{movie.original_title}</h3>

                  {/* <h1>{movie.original_language}</h1> */}
                  <p className="overview">{movie.overview}</p>
                  {/* <p>re{movie.release_date}</p> */}
                  <h2>
                    <span className="spanrat">rating</span>
                    <FaStar />
                    {movie.vote_average}
                  </h2>
                </div>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
      <Popular data={popular} />
    </>
  );
}

export default Topbanner;
