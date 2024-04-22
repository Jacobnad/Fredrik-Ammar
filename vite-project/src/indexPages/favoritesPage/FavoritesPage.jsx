import Footer from '../../components/back/Back';
import Header from '../../components/logo/Logo'
import MainSection from '../../components/homPag/HomPag';
import useFavoriteStore from "../../js-folder/favorites";

function FavoritesPage() {
    const { favorites } = useFavoriteStore();

    return (
        <>
            <Header />
            <MainSection
                array={favorites}
                mainTitle={"Favorit List:"}
            />
            <Footer />
        </>
    )
}

export default FavoritesPage
