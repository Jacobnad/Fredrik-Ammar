import React from 'react'
import Header from '../../components/logo/Logo'
import MainSection from '../../components/homPag/HomPag'
import useSearchStore from '../../js-folder/search';
import Footer from '../../components/back/Back';

function SearchPage() {
    const { movies } = useSearchStore();

    return (
        <>
            <Header />
            <MainSection
                array={movies}
                mainTitle={"Search results:"}
            />
            <Footer />
        </>
    )
}

export default SearchPage
