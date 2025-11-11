import { uxProjects } from './services/uxProjects';
import { graphicDesignProjects } from './services/graphicDesignProjects';
import { contentCreationProjects } from './services/contentCreationProjects';
import { webDevelopmentProjects } from './services/webDevelopmentProjects';
import { photographyProjects } from './services/photographyProjects';
import { modelingProjects } from './services/modelingProjects';
import { motionGraphicsProjects } from './services/motionGraphicsProjects';

export const getAllProjects = () => {
    return [
        ...uxProjects,
        ...graphicDesignProjects,
        ...contentCreationProjects,
        ...webDevelopmentProjects,
        ...photographyProjects,
        ...modelingProjects,
        ...motionGraphicsProjects
    ];
};

export const getProjectById = (id) => {
    const allProjects = getAllProjects();
    return allProjects.find(project => project.id === id);
};
