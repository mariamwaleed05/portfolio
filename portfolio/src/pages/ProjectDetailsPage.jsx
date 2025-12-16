import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails'; 
import PreLoader from '../common/PreLoader';
import { fetchProjectById } from '../data/services/api';

const serviceColorMapping = {
    'UX': '#690600',
    'Graphic Design': '#690600',
};

const ProjectDetailsPage = () => {
    const { projectId } = useParams(); 
    const location = useLocation(); 
    
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const fromServiceType = location.state?.fromServiceType;
    let backLink = fromServiceType ? `/services/${fromServiceType}` : '/services';

    useEffect(() => {
        const loadProject = async () => {
            setLoading(true);
            try {
                const data = await fetchProjectById(projectId);
                setProject({ ...data, backLink }); 
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadProject();
    }, [projectId, backLink]);

    if (loading) return <PreLoader />;

    if (!project) {
        return (
            <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h1>Project Not Found</h1>
                <a href={backLink} style={{ color: '#690600' }}>Back to Projects</a>
            </div>
        );
    }

    const detectedServiceColor = serviceColorMapping[project.category] || '#690600';

    return (
        <ProjectDetails 
            project={project} 
            serviceColor={detectedServiceColor} 
        />
    );
};

export default ProjectDetailsPage;