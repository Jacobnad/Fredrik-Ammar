import { useEffect, useState } from 'react';
import axios from 'axios';
import './start.css';
import Header from '../../components/logo/Logo';
import MainSection from '../../components/homPag/HomPag';
import Footer from '../../components/back/Back';
import Trailer from '../../components/trailer/Trailer';
import backArrow from '../../assets/back-arrow.svg';
import nextArrow from '../../assets/next-arrow.svg';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let randomNumber = Math.floor(Math.random() * (i + 1));
        let movieIndex = array[i];
        array[i] = array[randomNumber];
        array[randomNumber] = movieIndex;
    }
    return array.slice(0, 5);
}

const fetchTop20Movies = async () => {
    try {
        const response = await axios.get('https://santosnr6.github.io/Data/movies.json');
        const data = response.data;
        return {
            top20: data,
            fiveMovies: shuffleArray(data)
        };
    } catch (error) {
        console.error('Error', error);
        return {
            top20: [],
            fiveMovies: []
        };
    }
}

function FrontPage() {
    const [movieData, setMovieData] = useState({ top20: [], fiveMovies: [] });
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTop20Movies();
            setMovieData(data);
        };
        fetchData();
    }, []);

    const nextSlide = () => {
        setActiveSlide((activeSlide + 1) % movieData.fiveMovies.length);
    }

    const prevSlide = () => {
        setActiveSlide((activeSlide - 1 + movieData.fiveMovies.length) % movieData.fiveMovies.length);
    }

    return (
        <div className="frontPage">
            <Header />
            <section className="carousel">
                {movieData.fiveMovies.map((movie, index) => (
                    index === activeSlide && (
                        <Trailer
                            key={index}
                            movie={movie}
                            trailer={movie.trailer_link}
                            index={index}
                        />
                    )
                ))}
                <button className="btnNext" onClick={nextSlide}>
                    <img src={nextArrow} alt="Next arrow" />
                </button>
                <button className="btnPrev" onClick={prevSlide}>
                    <img src={backArrow} alt="Previous arrow" />
                </button>
            </section>
            <MainSection
                array={movieData.top20}
                mainTitle={"TOP 20 Today:"}
            />
            <Footer />
        </div>
    );
}

export default FrontPage;
