import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails';
import { getAllProjects } from '../data/projectsData';

const ProjectDetailsPage = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const allProjects = getAllProjects();
        const foundProject = allProjects.find(p => p.id === projectId);
        
        setProject(foundProject);
        setLoading(false);
        
        window.scrollTo(0, 0);
    }, [projectId]);

    if (loading) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                background: '#0a0a0a', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff' 
            }}>
                <h2>Loading...</h2>
            </div>
        );
    }

    if (!project) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                background: '#0a0a0a', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#fff',
                gap: '20px'
            }}>
                <h2>Project Not Found</h2>
                <a href="/services" style={{ color: '#690600' }}>Back to Services</a>
            </div>
        );
    }

    return <ProjectDetails project={project} serviceColor="#690600" />;
};

export default ProjectDetailsPage;
