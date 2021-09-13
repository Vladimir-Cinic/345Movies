import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from '../../components/SearchForm/SearchForm';
import ContentGrid from '../../components/ContentGrid/ContentGrid';

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [errorMsg, setErrorMsg] = useState('');

  const fetchSearch = async () => {
    if (searchText) {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${
            type ? 'tv' : 'movie'
          }?api_key=${
            process.env.REACT_APP_API_KEY
          }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        );
        setContent(data.results);
        if (!data.results.length) {
          setErrorMsg('No match for your search criteria.');
        }
        setNumOfPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    } else if (searchText === '') {
      setContent([]);
      setNumOfPages(0);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);

  return (
    <>
      <SearchForm
        setPage={setPage}
        setType={setType}
        setSearchText={setSearchText}
        fetchSearch={fetchSearch}
        type={type}
      />
      <ContentGrid
        page={page}
        setPage={setPage}
        title={false}
        content={content}
        numOfPages={numOfPages}
        media_type={type === 0 ? 'movie' : 'tv'}
        errorMsg={errorMsg}
      />
    </>
  );
};

export default Search;
