import AuthStatus from './components/AuthStatus';
import MovieLoader from './components/MovieLoader';
import MovieResults from './components/MovieResults';
import './App.css'

function App() {

  return (
    <>
       <AuthStatus />
       <MovieLoader />
       <MovieResults />
    </>
    );
}

export default App