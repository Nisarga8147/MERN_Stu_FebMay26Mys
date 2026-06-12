import BookButton from './components/BookButton';
import GenreFilter from './components/GenreFilter';
import LoginForm from './components/LoginForm';
import SearchShortcut from './components/SearchShortcut';
import './App.css'

function App() {

  return (
    <>
       <BookButton />
       <GenreFilter />
       <LoginForm />
       <SearchShortcut />
    </>
    );
}

export default App