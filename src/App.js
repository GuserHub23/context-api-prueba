import Footer from "./components/Footer"
import MovieList from "./components/MovieList"
import Navbar from "./components/Navbar"
import { MoviesProvider } from "./contexts/MoviesContext"
import { UserProvider } from "./contexts/UserContext"


const App = () => {

  return (
    <div>
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
          <Footer />
        </MoviesProvider>
      </UserProvider>
    </div>
  )
}

export default App

