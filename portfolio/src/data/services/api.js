import { supabase } from '../../Supabase';

const safeJsonParse = (input) => {
  if (!input) return [];
  if (Array.isArray(input)) return input; 
  if (typeof input === 'object') return Object.values(input);
  
  try {
    return JSON.parse(input);
  } catch (e) {
    console.warn("Skipping bad JSON data:", input); 
    return [];
  }
};

const formatProject = (data) => {
  let formattedTags = [];
  const rawTags = data.Tags || data.tags;
  if (rawTags) {
    if (Array.isArray(rawTags)) {
      formattedTags = rawTags;
    } else if (typeof rawTags === 'object') {
      formattedTags = Object.values(rawTags);
    } else if (typeof rawTags === 'string') {
        formattedTags = safeJsonParse(rawTags);
    }
  }

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
      
    tags: formattedTags,
    technologies: safeJsonParse(data.Technologies || data.technologies),
    features: safeJsonParse(data.KeyFeatures || data.keyFeatures),
    gallery: safeJsonParse(data.Gallery || data.gallery),
    
    backLink: '/services'
  };
};

export const fetchProjectsByCategory = async (category) => {
  const categoryMap = {
    'Ux': 'UX/UI',
    'UX': 'UX/UI',
    'GraphicDesign': 'Graphic Design',
    'ContentCreation': 'Content Creation',
    'WebDevelopment': 'Web Development',
    'Photography': 'Photography',
    'Modeling': 'Modeling',
    'MotionGraphics': 'Motion Graphics'
  };

  const dbCategory = categoryMap[category] || category;

  console.log(`[API] Searching for Type: "${dbCategory}"`);

  const { data, error } = await supabase
    .from('ProjectDetails')
    .select('*')
    .eq('Type', dbCategory);

  if (error) {
    console.error("[API] Supabase Error:", error);
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