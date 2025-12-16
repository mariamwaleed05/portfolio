import { supabase } from '../../Supabase';

const formatProject = (data) => {
  return {
    id: data.id, 
    title: data.Title,
    description: data.Info,
    thumbnail: data.HeroImage, 
    date: data.Date, 
    category: data.Type,
    duration: data.Duration,
    overview: data.Overview,
    challenge: data.Challenge,
    solution: data.Solution,
    role: data.Role,
    achievements: data.Achievements ? data.Achievements.split('\n') : [], 
    tags: data.Tags || [], 
    technologies: data.Technologies || [], 
    features: data.KeyFeatures ? JSON.parse(data.KeyFeatures) : [], 
    gallery: data.Gallery || [], 
    process: [], 
    backLink: '/services' 
  };
};

export const fetchProjectsByCategory = async (category) => {
  const categoryMap = {
    'Ux': 'UX/UI',
    'GraphicDesign': 'Graphic Design',
    'ContentCreation': 'Content Creation',
    'WebDevelopment': 'Web Development', 
    'Photography': 'Photography',
    'Modeling': 'Modeling',
    'MotionGraphics': 'Motion Graphics'
  };

  const dbCategory = categoryMap[category] || category;

  const { data, error } = await supabase
    .from('ProjectDetails')
    .select('*')
    .eq('Type', dbCategory);

  if (error) throw error;
  return data.map(formatProject);
};

export const fetchProjectById = async (id) => {
  const { data, error } = await supabase
    .from('ProjectDetails')
    .select('*')
    .eq('id', id) 
    .single();

  if (error) throw error;
  return formatProject(data);
};