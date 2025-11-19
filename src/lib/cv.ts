import { getCollection, type CollectionEntry } from 'astro:content';

type CVFlavor = CollectionEntry<'cv-flavors'>;
type Experience = CollectionEntry<'experience'>;
type Education = CollectionEntry<'education'>;
type Skills = CollectionEntry<'skills'>;

/**
 * Get CV data filtered by flavor
 */
export async function getCV(flavorId: string) {
  // Get the flavor configuration
  const flavors = await getCollection('cv-flavors');
  const flavor = flavors.find(f => f.data.id === flavorId);
  
  if (!flavor) {
    throw new Error(`CV flavor "${flavorId}" not found`);
  }

  // Get all CV data
  const [experiences, education, skills] = await Promise.all([
    getCollection('experience'),
    getCollection('education'),
    getCollection('skills'),
  ]);

  // Filter function based on tags
  const includeAllTags = flavor.data.tags.includes('*');
  const matchesTags = (itemTags: string[]) => {
    if (includeAllTags) return true;
    return itemTags.some(tag => flavor.data.tags.includes(tag));
  };

  // Filter and sort data
  const filteredExperience = experiences
    .filter(exp => matchesTags(exp.data.tags))
    .sort((a, b) => a.data.order - b.data.order);

  const filteredEducation = education
    .filter(edu => matchesTags(edu.data.tags))
    .sort((a, b) => a.data.order - b.data.order);

  const filteredSkills = skills
    .map(skillCategory => ({
      ...skillCategory,
      data: {
        ...skillCategory.data,
        items: skillCategory.data.items.filter(item => matchesTags(item.tags)),
      },
    }))
    .filter(category => category.data.items.length > 0)
    .sort((a, b) => a.data.order - b.data.order);

  return {
    flavor: flavor.data,
    experience: filteredExperience,
    education: filteredEducation,
    skills: filteredSkills,
  };
}

/**
 * Get all available CV flavors
 */
export async function getAllFlavors() {
  const flavors = await getCollection('cv-flavors');
  return flavors.sort((a, b) => a.data.order - b.data.order);
}
