import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useStyles } from '../pageStyles';
import ContentGrid from '../../components/ContentGrid/ContentGrid';

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  // const classes = useStyles();
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <ContentGrid
      page={page}
      setPage={setPage}
      title={'Trending'}
      content={content}
      type={false}
    />
  );
};

export default Trending;
