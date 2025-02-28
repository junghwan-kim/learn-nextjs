import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type Props ={
    params: {id: string},
    searchParams: {region: string; page: Number}
}

export default async function MovieDetail({params, searchParams}: Props) {
    
    const {id} = await params;
    const {region, page} = await searchParams;

    /*
    1번타입
    const movie = await getMovie(id);
    const videos = await getVideos(id);

    2번타입
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    */

    return (
        <div>
            <h3>Movie detail page</h3>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}