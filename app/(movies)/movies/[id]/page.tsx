import { Metadata } from "next";
import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface Props {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const movie = await getMovie(resolvedParams.id);
    return {
        title: movie.title,
    };
}

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={resolvedParams.id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={resolvedParams.id} />
            </Suspense>
        </div>
    );
}