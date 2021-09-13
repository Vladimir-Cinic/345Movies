import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';
import Search from './Pages/Search/Search';
import Layout from './components/Layout';
import { ThemeProvider } from '@material-ui/styles';
import { darkTheme, lightTheme } from './theme';

import { useGlobalContext } from './Context';

function App() {
  const { toggleTheme, selectedTheme } = useGlobalContext();
  return (
    <ThemeProvider theme={selectedTheme ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Layout toggleTheme={toggleTheme}>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} exact />
            <Route path='/series' component={Series} exact />
            <Route path='/search' component={Search} exact />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
