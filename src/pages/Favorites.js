import { useContext} from 'react';
import FavoritesContex from '../store/favorites-contex';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {

    const favoritesCtx = useContext(FavoritesContex);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>Sul pole lemmikuid veel. Tahad lisada?</p>
    }
    else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return <section>
        <h1>Minu lemmikud</h1>
        {content}
    </section>;
}

export default FavoritesPage;