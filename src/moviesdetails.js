import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Detailspage() {
  const [loding, setloding] = useState(true);
  const percentage = 66;

  const [details, setdetails] = useState({});
  const [info, setifo] = useState([]);
  let { id } = useParams();

  const apiDFuctionPrt = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}
        ?api_key=0d5d318dc7663eee5e5462e95bbaec6a`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setdetails(json);
        setifo(json.info);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    apiDFuctionPrt();
  }, []);
  return (
    <Container>
      <Row className="rows py-3">
        <Col md={4} className="mt-3">
          <div className="ppp">
            <img
              src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
              className="img-fluid details-pathimg"
            />
            {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
            <div className="uibar">
              <div style={{ width: 70, height: 70 }}>
                <CircularProgressbar
                  className="cc"
                  text={details ? details.vote_average : ""}
                  maxValue={10}
                  value={details ? details.vote_average : ""}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col md={8} className="py-3">
          <div className="infocard">
            <div>
              <h1 className="col-head">{details.original_title}</h1>
              {/* <p className="p-head">{details.tagline}</p> */}
            </div>

            <div>
              <h3 className="overhead">overview</h3>
              <p className="overp">{details.overview}</p>
            </div>

            <div className="movie__genres">
              {details && details.genres
                ? details.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
            <span className="original-language">original-language:</span>
            <span className="lang">{details.original_language}</span>
            <hr className="hrcol1" />

            <div>
              <span className="status">status:</span>
              <span className="status1">{details.status}</span>
              <br />
              <hr className="hrcol" />
              <span className="status">release date:</span>
              <span className="status1">{details.release_date}</span>
              <br />
              <hr className="hrcol" />
              <span className="status">runtime:</span>
              <span className="status1">{details.runtime}</span>
            </div>

            <span className="official">
              <a href={details.homepage} target="_blank">
                official page
              </a>
            </span>
          </div>

          <br />
          <br />
          <br />
          <span className="movie__heading">Production companies :</span>
          <span className="movie__production">
            {details &&
              details.production_companies &&
              details.production_companies.map((company) => (
                <>
                  <span className="production">{company.name}</span>
                </>
              ))}
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Detailspage;

//  <div class="ui-widgets">
//             <div class="ui-values">{details ? details.vote_average : ""}</div>
//           </div>
