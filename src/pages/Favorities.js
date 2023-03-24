import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
    const favoriteContext = useContext(FavoritesContext);

    let context;

    if (favoriteContext.totalFavorites.length === 0) {
        context = <p>You got no favorites yet. Start adding some?</p>;
    } else {
        context = <MeetupList meetups={favoriteContext.favorites}/>;
    }

    return <section>
        <h1>My Favorites</h1>
        {context}
    </section>
}

export default Favorites;
