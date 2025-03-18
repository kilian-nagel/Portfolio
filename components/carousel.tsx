'use client';
import useSWR from 'swr';
import {useRef} from 'react';
import {IShortProjectsApiResponse} from './interfaces/project';
import {ProjectCard} from './projectCard/projectCard';
import {fetcher} from '../data/fetch';
import {getShortProjectQuery} from '../data/queries';
import Skeleton from 'react-loading-skeleton';

export const Carousel: React.FC = () => {
    // On récupére les différents projets dans un format court.
    const key = process.env.NEXT_PUBLIC_API_URL ? ['shortProjects', process.env.NEXT_PUBLIC_API_URL] : null;
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const {data, isLoading, error} = useSWR<IShortProjectsApiResponse | undefined>(
        key,
        () => fetcher<IShortProjectsApiResponse>(process.env.NEXT_PUBLIC_API_URL || '', getShortProjectQuery()),
        {
            dedupingInterval: 0, // Always refetch
            revalidateIfStale: true, // Always revalidate if data is stale
            revalidateOnFocus: true, // Refetch when window gets focused
            revalidateOnReconnect: true, // Refetch on network reconnect
        }
    );


    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({left: -200, behavior: "smooth"});
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({left: 200, behavior: "smooth"});
        }
    };


    const repeatedElements = new Array(4).fill(null).map((_, index) => (
        <div
            key={index}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                paddingTop: 'var(--spacing-md)'
            }}
        >
            <Skeleton
                baseColor="#202020"
                highlightColor="#444"
                borderRadius={0}
                style={{
                    width: 400,
                    height: 270,
                    background: 'rgb(20,20,20)',
                    flexShrink: 0
                }}
            />
            <Skeleton
                baseColor="#202020"
                height={40}
                highlightColor="#444"
                borderRadius={0}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '.25rem'
                }}
            >
                {new Array(3).fill(null).map((_, index) => (
                    <Skeleton
                        baseColor="#202020"
                        key={index}
                        borderRadius={0}
                        height={20}
                        highlightColor="#444"
                    />
                ))}
            </div>
        </div>
    ));

    if (isLoading) {
        return <div className="flex relative gap-4 overflow-y-hidden overflow-x-scroll pb-4">{repeatedElements}</div>;
    }

    if (
        data === undefined ||
        data === null ||
        error ||
        !process.env.NEXT_PUBLIC_API_URL
    ) {
        return <div>error</div>;
    }

    return (
        <div className="flex gap-4 relative">
            <button
                className="absolute left-2 top-1/2 -translate-y-[55px] flex justify-center items-center z-10 w-14 h-14 text-white p-2 rounded-full shadow-md text-2xl" style={{"backdropFilter": "blur(16px)", background: "rgba(0,0,0, 0.6)"}}
                onClick={scrollLeft}
            >{"<"}</button>

            <div
                ref={scrollContainerRef}
                className="flex relative gap-4 overflow-y-hidden overflow-x-scroll pb-4">
                {data.data.posts.map((d) => (
                    <ProjectCard
                        key={Math.random()}
                        title={d?.title}
                        id={d?.id}
                        tags={d?.tags}
                        excerpt={d?.excerpt}
                        coverImage={d?.coverImage}
                    ></ProjectCard>
                ))}
            </div>

            <button
                className="absolute right-2 top-1/2 -translate-y-[55px] flex justify-center items-center right-0 w-14 h-14 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 text-2xl" style={{"backdropFilter": "blur(16px)", background: "rgba(0,0,0, 0.6)"}}
                onClick={scrollRight}
            >
                {">"}
            </button>
        </div>
    );
};
