import { IProject } from '../interfaces/project';
import { InfoLowerPart } from './infoSection/infoLowerPart';
import { InfoUpperPart } from './infoSection/infoUpperPart';

export const ProjectCard: React.FC<IProject> = (project) => {
    console.log(project);
    return (
        <div className="container">
            <div
                style={{
                    height: '270px',
                    background: `url(${project.coverImage.url}) center center/cover`
                }}
            ></div>
            <div className="info">
                <InfoUpperPart
                    title={project.title}
                    badges={project.tags}
                    excerpt={project.excerpt}
                />
                <InfoLowerPart id={project.id} />
            </div>
        </div>
    );
};
