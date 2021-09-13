import axios from 'axios';
import { useEffect, useState } from 'react';
import useGenre from '../../hooks/useGenre';
import ContentGrid from '../../components/ContentGrid/ContentGrid';

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
      );
      setContent(data.results);
      if (!data.results.length) {
        setErrorMsg('No match for your search criteria.');
      }
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, page]);

  return (
    <ContentGrid
      page={page}
      setPage={setPage}
      title={'Movies'}
      content={content}
      type={'movie'}
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      genres={genres}
      setGenres={setGenres}
      numOfPages={numOfPages}
      media_type={'movie'}
      errorMsg={errorMsg}
    />
  );
};

export default Movies;
