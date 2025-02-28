import Link from "next/link";

export const metadata={
    title: "Home"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
        <div>
            {movies.map((movie) => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
        </div>
    </>;
}

export default HomePage;