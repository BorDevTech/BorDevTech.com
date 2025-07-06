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
    title: "E-Commerce Platform Redesign",
    client: "TechStart Solutions",
    category: "website",
    package: "growth",
    completedDate: "2024-12-15",
    description: "Complete redesign and optimization of e-commerce platform with modern UI/UX and performance improvements.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    results: [
      { metric: "Conversion Rate", improvement: "+45%" },
      { metric: "Page Load Speed", improvement: "+60%" }
    ],
    featured: true
  },
  {
    id: "2",
    title: "Analytics Dashboard Development",
    client: "DataFlow Inc",
    category: "analytics",
    package: "growth",
    completedDate: "2024-11-28",
    description: "Custom analytics dashboard for real-time business intelligence and data visualization.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    results: [
      { metric: "Data Processing", improvement: "+80%" },
      { metric: "User Engagement", improvement: "+35%" }
    ],
    featured: true
  },
  {
    id: "3",
    title: "Marketing Automation Setup",
    client: "GrowthCorp",
    category: "marketing",
    package: "enterprise",
    completedDate: "2024-11-10",
    description: "Complete marketing automation workflow with lead nurturing and conversion tracking.",
    technologies: ["HubSpot", "Zapier", "Google Analytics", "Custom APIs"],
    results: [
      { metric: "Lead Generation", improvement: "+120%" },
      { metric: "Marketing ROI", improvement: "+85%" }
    ],
    featured: false
  },
  {
    id: "4",
    title: "Restaurant Management System",
    client: "Bistro Chain",
    category: "custom",
    package: "enterprise",
    completedDate: "2024-10-22",
    description: "Custom POS and inventory management system for restaurant chain operations.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
    featured: true
  },
  {
    id: "5",
    title: "Startup Landing Page",
    client: "InnovateLab",
    category: "website",
    package: "starter",
    completedDate: "2024-10-08",
    description: "Modern landing page with lead capture and conversion optimization.",
    technologies: ["Next.js", "Bootstrap", "Vercel"],
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
