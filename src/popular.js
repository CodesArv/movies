import Container from "react-bootstrap/Container";
import img from "./asset/OIP.jpg";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function popularmovies(props) {
  console.log("moviedata", props.data);
  return (
    <Container>
      <h1 className="popmovie">
        popular <span className="spanmo">movie's</span>
      </h1>

      <Row>
        {props.data.map((item) => (
          <Col xs={6} md={3} className="stylecol py-3 my-3">
            <Link to={`/results/${item.id}`} className="none">
              <div className="imgposter">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    item && item.poster_path
                  }`}
                  className="img-fluid bbimgs"
                />
                <div className="uibar2">
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbar
                      className="cc"
                      text={item ? item.vote_average : ""}
                      maxValue={10}
                      value={item ? item.vote_average : ""}
                    />
                  </div>
                </div>
              </div>
              <div className="titlename">
                <p className="py-3">{item.original_title}</p>
              </div>
              <div className="rldate">
                <p>{item.release_date}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default popularmovies;
