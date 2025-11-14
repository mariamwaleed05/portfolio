import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails'; 

import { uxProjects } from './../data/services/uxProjects';
import { graphicDesignProjects } from './../data/services/graphicDesignProjects';
import { contentCreationProjects } from './../data/services/contentCreationProjects';
import { webDevelopmentProjects } from './../data/services/webDevelopmentProjects';
import { photographyProjects } from './../data/services/photographyProjects';
import { modelingProjects } from './../data/services/modelingProjects';
import { motionGraphicsProjects } from './../data/services/motionGraphicsProjects';

const allProjects = [
    ...uxProjects,
    ...graphicDesignProjects,
    ...contentCreationProjects,
    ...webDevelopmentProjects,
    ...photographyProjects,
    ...modelingProjects,
    ...motionGraphicsProjects,
];

const serviceColorMapping = {
    'Ux': '#690600',
    'GraphicDesign': '#690600',
    'ContentCreation': '#690600',
    'WebDevelopment': '#690600',
    'Photography': '#690600',
    'Modeling': '#690600',
    'MotionGraphics': '#690600',
};


const ProjectDetailsPage = () => {
    const { projectId } = useParams(); 
    const location = useLocation(); 

    const project = useMemo(() => {
        return allProjects.find(p => p.id === projectId);
    }, [projectId]);

    const fromServiceType = location.state?.fromServiceType;

    let backLink;
    if (fromServiceType) {
        backLink = `/services/${fromServiceType}`;
    } else {
    
        backLink = '/services';
    }


    const detectedServiceColor = project ? serviceColorMapping[project.category] || '#690600' : '#690600';


    if (!project) {
        return (
            <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h1>Project Not Found</h1>
                <p>The project with ID "{projectId}" could not be loaded.</p>
                <a href={backLink} style={{ color: '#690600' }}>Back to Projects</a>
            </div>
        );
    }

    return (
        <ProjectDetails 
            project={{ ...project, backLink: backLink }} 
            serviceColor={detectedServiceColor} 
        />
    );
};

export default ProjectDetailsPage;