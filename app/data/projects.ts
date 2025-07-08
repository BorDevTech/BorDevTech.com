// Dynamic project data management
export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'website' | 'analytics' | 'marketing' | 'custom';
  package: 'starter' | 'growth' | 'enterprise';
  completedDate: string;
  description: string;
  technologies: string[];
  results?: {
    metric: string;
    improvement: string;
  }[];
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "VisualDelights",
    client: "Commercial Cleaning Service",
    category: "website",
    package: "growth",
    completedDate: "2024-11-22",
    description: "Professional cleaning service website for commercial buildings and residential homes, featuring Airbnb cleaning specialization with booking system and service management.",
    technologies: ["TypeScript", "React", "Booking Integration"],
    results: [
      { metric: "Service Bookings", improvement: "+150%" },
      { metric: "Airbnb Partnerships", improvement: "+200%" }
    ],
    featured: true
  },
  {
    id: "2",
    title: "ClearView",
    client: "Data Analytics Firm",
    category: "analytics",
    package: "growth",
    completedDate: "2024-12-15",
    description: "Advanced lookup tool utilizing various data sources for comprehensive information retrieval and business intelligence analysis.",
    technologies: ["TypeScript", "Data APIs", "React"],
    results: [
      { metric: "Data Retrieval Speed", improvement: "+200%" },
      { metric: "Research Efficiency", improvement: "+150%" }
    ],
    featured: true
  },
  {
    id: "3",
    title: "Windows11-Clone",
    client: "UI/UX Portfolio Project",
    category: "custom",
    package: "enterprise",
    completedDate: "2023-11-15",
    description: "Pixel-perfect recreation of Windows 11 desktop experience demonstrating advanced UI/UX implementation and attention to detail.",
    technologies: ["TypeScript", "React", "Advanced CSS"],
    results: [
      { metric: "Design Accuracy", improvement: "99.9%" },
      { metric: "User Experience", improvement: "Industry Standard" }
    ],
    featured: true
  },
  {
    id: "4",
    title: "Healthcare Listing System",
    client: "Healthcare Provider",
    category: "custom",
    package: "enterprise",
    completedDate: "2024-01-19",
    description: "Comprehensive healthcare facility listing and management system with search functionality and provider information management.",
    technologies: ["TypeScript", "Database Integration", "Search APIs"],
    featured: false
  },
  {
    id: "5",
    title: "Professional Services Website",
    client: "Technology Consultant",
    category: "website",
    package: "starter",
    completedDate: "2024-01-19",
    description: "Clean business website showcasing development capabilities and project portfolio with contact integration.",
    technologies: ["TypeScript", "React", "CSS"],
    featured: false
  }
];

// Dynamic counters
export const getProjectStats = () => {
  const total = projects.length;
  const byPackage = {
    starter: projects.filter(p => p.package === 'starter').length,
    growth: projects.filter(p => p.package === 'growth').length,
    enterprise: projects.filter(p => p.package === 'enterprise').length
  };
  const byCategory = {
    website: projects.filter(p => p.category === 'website').length,
    analytics: projects.filter(p => p.category === 'analytics').length,
    marketing: projects.filter(p => p.category === 'marketing').length,
    custom: projects.filter(p => p.category === 'custom').length
  };

  // Real business metrics based on actual data
  const applicationsReceived = 7; // Total applications we've received
  const projectsCompleted = total; // Projects we've completed (5)
  const completionRate = Math.round((projectsCompleted / applicationsReceived) * 100);

  return {
    total,
    byPackage,
    byCategory,
    featured: projects.filter(p => p.featured).length,
    completionRate,
    applicationsReceived
  };
};

export const getFeaturedProjects = () => {
  return projects.filter(p => p.featured).sort((a, b) => 
    new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
  );
};
