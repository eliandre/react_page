import { createContext, useState } from 'react';

const FavoriteContex = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoriteContexProvider(props){

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length 
    };

    return <FavoriteContex.Provider value={context}>
        {props.children}
    </FavoriteContex.Provider>
}