import Header from '../../components/logo/Logo'
import useWatchlistStore from "../../js-folder/watchlist";
import MainSection from '../../components/homPag/HomPag';
import Footer from '../../components/back/Back';

function WatchList() {
    const { watchlist } = useWatchlistStore();

    return (
        <>
            <Header />
            <MainSection
                array={watchlist}
                mainTitle={"watch list:"}
            />
            <Footer />
        </>
    )
}

export default WatchList;