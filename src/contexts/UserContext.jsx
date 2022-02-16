import React,{ createContext,  } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'

const UserContext = createContext();

const initialUser = { id:1, name:'user', favouriteMovies: [] };

const UserProvider = ({ children }) => {
    
    const [ user, setUser ] = useLocalStorage('user', initialUser )

    
    const login = () => {
        setUser(initialUser);
    }
    
    const logout = () => {
        setUser(null);
    }

    const toggleFavouriteMovieToUser = (movieId) => {

        const isFavourite = user.favouriteMovies.includes(movieId);

        const favouriteMovies = isFavourite ? user.favouriteMovies.filter(favMovId => favMovId !== movieId) : [...user.favouriteMovies, movieId]
    
        setUser({
            ...user,
            favouriteMovies
        });
    }

    const data = { user, login, logout, toggleFavouriteMovieToUser };
    
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );

}
export { UserProvider };
export default UserContext;