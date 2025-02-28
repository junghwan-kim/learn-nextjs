import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/Home.module.css";
import { API_URL } from "../constants";

export const metadata={
    title: "Home"
}

async function getMovies(){
    //return fetch(URL).then(res => res.json());
    //await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(API_URL);
    const json = await res.json();
    return json;
}

async function HomePage(){
    
    const movies = await getMovies();

    return <>
        <div className={styles.container}>
            {movies.map((movie) =>
                <Movie key={movie.id} {...movie} />
            )}
        </div>
    </>;
}

export default HomePage;