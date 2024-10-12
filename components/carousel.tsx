'use client';
import useSWR from 'swr';
import { IShortProjectsApiResponse, IProject } from './interfaces/project';
import { ProjectCard } from './projectCard/projectCard';
import { fetcher } from '../data/fetch';
import { getShortProjectQuery } from '../data/queries';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const Carousel: React.FC = () => {
    // On récupére les différents projets dans un format court.
    const { data, isLoading, error } = useSWR<
        IShortProjectsApiResponse | undefined
    >(
        !process.env.NEXT_PUBLIC_API_URL
            ? null
            : process.env.NEXT_PUBLIC_API_URL,
        () =>
            fetcher<IShortProjectsApiResponse>(
                process.env.NEXT_PUBLIC_API_URL || '',
                getShortProjectQuery()
            )
    );
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
        <>
            <div className="flex relative gap-4 overflow-y-hidden overflow-x-scroll pb-4">
                {data.data.posts.map((d) => (
                    <ProjectCard
                        key={Math.random()}
                        title={d.title}
                        id={d.id}
                        tags={d.tags}
                        excerpt={d.excerpt}
                        coverImage={d.coverImage}
                    ></ProjectCard>
                ))}
            </div>
        </>
    );
};
