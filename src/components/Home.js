import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { BsPlay } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import {BsPlayFill} from "react-icons/bs"

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
    <div className="row">
        <h2>{title}</h2>
        <div>
            {arr.map((item, index) => (
                <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
            ))}
        </div>
    </div>
);

const Home = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    // const [genre, setGenre] = useState([]);

    useEffect(() => {
        const fetchUpcoming = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            setUpcomingMovies(results);
        };
        const fetchNowPlaying = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
            setNowPlayingMovies(results);
        };
        const fetchPopular = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
            setPopularMovies(results);
        };
        const fetchTopRated = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
            setTopRatedMovies(results);
        };
        // const getAllGenre = async () => {
        //     const {
        //         data: { genres },
        //     } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
        //     setGenre(genres);
        //     console.log(genres);
        // };

        // getAllGenre();
        fetchUpcoming();
        fetchNowPlaying();
        fetchPopular();
        fetchTopRated();
    }, []);

    return (
        <section className="home">
            <div
                className="banner"
                style={{
                    backgroundImage: popularMovies[2]
                        ? `url(${`${imgUrl}/${popularMovies[2].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {popularMovies[0] && <h1>{popularMovies[2].title}</h1>}
                {popularMovies[0] && <p>{popularMovies[2].overview}</p>}

                <div>
                    <button> <BsPlayFill/>Play</button>
                    <button>My List <AiOutlinePlus/> </button>
                </div>
            </div>

            <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Now Playing"} arr={nowPlayingMovies} />
            <Row title={"Popular"} arr={popularMovies} />
            <Row title={"Top Rated"} arr={topRatedMovies} />

        </section>
    );
};

export default Home;