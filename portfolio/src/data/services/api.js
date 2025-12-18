import { supabase } from '../../Supabase';

const smartParse = (input) => {
  if (!input) return [];
  if (Array.isArray(input)) return input;
  if (typeof input === 'object') return Object.values(input);
  if (typeof input === 'string') {
    try {
      return JSON.parse(input);
    } catch (e) {
      if (input.includes(',')) {
        return input.split(',').map(item => item.trim());
      }
      return [input];
    }
  }
  return [];
};

const formatProject = (data) => {
  const rawGallery = smartParse(data.Gallery || data.gallery);
  const formattedGallery = rawGallery.map(item => {
    if (typeof item === 'string') {
      return { url: item, caption: '' };
    }
    return item;
  });

  return {
    id: data.id,
    title: data.Title || data.title,
    description: data.Info || data.info,
    thumbnail: data.HeroImage || data.heroImage || data.Herolmage || '',
    heroImage: data.HeroImage || data.heroImage || data.Herolmage || '',
    date: data.Date || data.date,
    category: data.Type || data.type,
    duration: data.Duration || data.duration,
    overview: data.Overview || data.overview,
    challenge: data.Challenge || data.challenge,
    solution: data.Solution || data.solution,
    role: data.Role || data.role,
    achievements: (data.Achievements || data.achievements) 
      ? (typeof (data.Achievements || data.achievements) === 'string' 
          ? (data.Achievements || data.achievements).split('\n') 
          : (data.Achievements || data.achievements)) 
      : [],
    tags: smartParse(data.Tags || data.tags),
    technologies: smartParse(data.Technologies || data.technologies),
    gallery: formattedGallery,
    features: smartParse(data.KeyFeatures || data.keyFeatures),
    backLink: '/services'
  };
};

export const fetchProjectsByCategory = async (category) => {
  const categoryMap = {
    'Ux': 'UX/UI',
    'UX': 'UX/UI',
    'GraphicDesign': 'Graphic Design',
    'ContentCreation': 'Content Creation',
    'WebDevelopment': 'Coding',
    'Photography': 'Photography',
    'Modeling': '3D Modeling',
    'MotionGraphics': 'Motion Graphics'
  };

  const dbCategory = categoryMap[category] || category;

  let { data, error } = await supabase
    .from('ProjectDetails')
    .select('*')
    .eq('Type', dbCategory);

  if (!error && (!data || data.length === 0)) {
     const { data: looseData, error: looseError } = await supabase
       .from('ProjectDetails')
       .select('*')
       .ilike('Type', dbCategory);
     if (!looseError && looseData.length > 0) data = looseData;
  }

  if (error) {
    console.error(error);
    throw error;
  }

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