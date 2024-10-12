import { IProject } from '../interfaces/project';
import { InfoLowerPart } from './infoSection/infoLowerPart';
import { InfoUpperPart } from './infoSection/infoUpperPart';

export const ProjectCard: React.FC<IProject> = (project) => {
    return (
        <div className="container w-[325px] 900px:w-[400px] flex flex-column shrink-0 gap-2 pt-6">
            <div
                style={{
                    height: '270px',
                    background: `url(${project.coverImage.url}) center center/cover`
                }}
            ></div>
            <div className="info flex flex-column justify-between gap-2">
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
