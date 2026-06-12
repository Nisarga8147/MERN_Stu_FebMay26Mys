import MovieSearch from './components/MovieSearch';
import CitySelector from './components/CitySelector';
import './App.css'

function App() {

  return (
    <>
        <CitySelector />
        {/* controlled component */}
       <MovieSearch />
    </>
    );
}

export default App