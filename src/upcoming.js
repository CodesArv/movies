import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Upcoming() {
  const [upcoming, setupcoming] = useState([]);
  // const [loding, setloding] = useState(true);
  let count = 1;
  let interval;
  const fetchapi = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=0d5d318dc7663eee5e5462e95bbaec6a&page=" +
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
      <Row className="leftm">
        <h1 className="popmovie">
          coming<span className="spanmo">soon</span>
        </h1>
        {upcoming.map((item) => (
          <Col md={3} xs={6} className="py-3 my-3">
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

              {item.genre_ids
                ? item.genre_ids.map((genres) => (
                    <>
                      <span className="movie__genres" id={genres.id}>
                        {genres.name}
                      </span>
                    </>
                  ))
                : ""}
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Upcoming;

// <div className="blurc">
// <div>
//   <div className="div-path">
//     <div class="ui-widgets">
//       <div class="ui-values">
//         {item ? item.vote_average : ""}
//       </div>
//     </div>
//     <img
//     src={`https://image.tmdb.org/t/p/original${
//       item && item.poster_path
//     }`}
//     className="img-fluid bbimgs"
//   />
//   </div>

//   {/* <p className="upp">upcoming</p> */}
//   <div className="info">
//     <div className="titlename">
//       <p>{item.original_title}</p>
//     </div>
//     <div className="rldate">
//       <p>{item.release_date}</p>
//     </div>
//   </div>
// </div>
// </div>

// <Col xs={6} md={3} className="stylecol py-5">
//   <div className="lay">
//   <Link to={`/results/${item.id}`} className="none">

//     <div className="po cardimg">
//       <img
//         src={`https://image.tmdb.org/t/p/original${
//           item && item.backdrop_path
//         }`}
//         className="img-fluid text-center"
//       />
//       <p className="up">upcoming</p>
//     </div>

//     <div className="cardname">{item.original_title}</div>
//     <div className="release">{item.release_date}</div>

//     {/*
//     {`${item.overview.substring(0, 20)}`} */}

//      </Link>
//   </div>

// </Col>
