import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Movietop() {
  const [upcoming, setupcoming] = useState([]);
  let count = 1;
  let interval;
  const fetchapi = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0d5d318dc7663eee5e5462e95bbaec6a&page=" +
        count +
        ""
    )
      .then((res) => res.json())
      .then((data) => {
        let jjj = data.results;
        if (data.results !== 0) {
          setupcoming((data) => [...data, ...jjj]);
          count++;
        } else {
          clearInterval(interval);
        }
        // console.log("upcoming", data);
        // setupcoming(data.results);
      });
  };
  useEffect(() => {
    fetchapi();
    interval = setInterval(() => {
      fetchapi();
    }, 10000);
  }, []);
  return (
    <Container>
      {/* <div className="topposter">
        <div className="pp">
          <p className="graph">
            Welcome to the edge of your seat,because it's time to dive into the
            action.From classic westerns and war films to modern action hero
            adventures,find what you are looking for right here.Get your kung fu
            bullet time
          </p>
        </div>
      </div> */}

      <div className="horror">
        <h1 className="popmovie">
          top<span className="spanmo">rated</span>
        </h1>
      </div>

      <Row className=" rowcol my-3">
        {upcoming.map((item) => (
          // <Col xs={6} md={3} className="stylecol py-5">
          //    <Link to={`/results/${item.id}`} className="none">
          //   <div className="po cardimg ">
          //     <img
          //       src={`https://image.tmdb.org/t/p/original${
          //         item && item.backdrop_path
          //       }`}
          //       className="img-fluid text-center"
          //     />
          //     <p className="up">topmovies🌟</p>
          //   </div>
          //   <div className="cardname">{item.original_title}</div>
          //   <div className="release">{item.release_date}</div>

          //   <div className="adult text-white">{item.original_language}</div>
          //   <div className="vote text-white">{item.vote_count}</div>
          //   </Link>

          //   {/*
          //   {`${item.overview.substring(0, 20)}`} */}
          // </Col>

          <Col md={3} xs={6} className="py-3 my-3 mobile-scale">
            <Link to={`/results/${item.id}`} className="none">
              <div className="blurc">
                <div>
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
                </div>
                <p className="upp">topmovies🌟</p>
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

export default Movietop;
