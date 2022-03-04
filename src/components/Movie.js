import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, CoverImg, title, year, summary, rating, genres }) {
  return (
    <div>
      <img src={CoverImg} alt={title} />
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link> [{year}] , {rating}
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((genres) => (
          <li key={genres}>{genres}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  CoverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
