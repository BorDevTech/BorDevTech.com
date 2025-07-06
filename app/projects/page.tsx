"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Building2, FlaskConical, Zap, CheckCircle, Calendar, TrendingUp } from "lucide-react";
import { projects, getProjectStats } from "../data/projects";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPackage, setSelectedPackage] = useState<string>('all');
  
  const projectStats = getProjectStats();

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const packageMatch = selectedPackage === 'all' || project.package === selectedPackage;
    return categoryMatch && packageMatch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'website': return <Building2 size={20} />;
      case 'analytics': return <TrendingUp size={20} />;
      case 'marketing': return <Zap size={20} />;
      case 'custom': return <FlaskConical size={20} />;
      default: return <CheckCircle size={20} />;
    }
  };

  const getPackageBadge = (pkg: string) => {
    const badges = {
      starter: 'badge bg-secondary',
      growth: 'badge bg-info text-dark',
      enterprise: 'badge bg-warning text-dark'
    };
    return badges[pkg as keyof typeof badges] || 'badge bg-secondary';
  };

  return (
    <div className="d-flex flex-column vh-100 bg-dark text-light" style={{overflowX: 'hidden', overflowY: 'hidden'}}>
      <style jsx>{`
        body {
          overflow: hidden;
        }
        
        .project-card {
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid #495057;
        }
        
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(23, 162, 184, 0.2);
          border-color: #17a2b8;
        }
        
        .filter-btn {
          transition: all 0.3s ease;
          border: 1px solid #495057;
          background-color: #343a40;
          color: #f8f9fa;
        }
        
        .filter-btn.active {
          background-color: #17a2b8;
          border-color: #17a2b8;
          color: #000;
        }
        
        .filter-btn:hover {
          border-color: #17a2b8;
          color: #17a2b8;
          background-color: rgba(23, 162, 184, 0.1);
        }
        
        .stat-card {
          background: rgba(23, 162, 184, 0.1);
          border: 1px solid rgba(23, 162, 184, 0.3);
          border-radius: 0.5rem;
        }
        
        .projects-container {
          height: calc(100vh - 400px);
          overflow-y: auto;
          overflow-x: hidden;
        }
        
        .projects-container::-webkit-scrollbar {
          width: 8px;
        }
        
        .projects-container::-webkit-scrollbar-track {
          background: #343a40;
        }
        
        .projects-container::-webkit-scrollbar-thumb {
          background: #17a2b8;
          border-radius: 4px;
        }
        
        .projects-container::-webkit-scrollbar-thumb:hover {
          background: #20c997;
        }
        
        .featured-badge {
          background: linear-gradient(45deg, #17a2b8, #20c997);
        }
        
        @media (max-width: 767px) {
          .projects-container {
            height: calc(100vh - 350px);
          }
          
          .project-card {
            margin-bottom: 1rem;
          }
          
          .filter-btn {
            margin-bottom: 0.5rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
      
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-dark text-light py-3">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-10">
                <h1 className="h2 fw-bold text-white mb-3">
                  Our <span className="text-info">Projects</span>
                </h1>
                <p className="lead mb-4">
                  Explore our portfolio of successful projects across different industries and service packages.
                </p>
                
                {/* Stats */}
                <div className="row justify-content-center">
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="stat-card p-3 text-center">
                      <h3 className="text-info mb-1">{projectStats.total}/{projectStats.applicationsReceived}</h3>
                      <small className="text-light">Applications Completed</small>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="stat-card p-3 text-center">
                      <h3 className="text-info mb-1">{projectStats.featured}</h3>
                      <small className="text-light">Featured Projects</small>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="stat-card p-3 text-center">
                      <h3 className="text-info mb-1">{projectStats.completionRate}%</h3>
                      <small className="text-light">Project Completion Rate</small>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="stat-card p-3 text-center">
                      <h3 className="text-info mb-1">24/7</h3>
                      <small className="text-light">Support Available</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-3 bg-dark border-bottom border-secondary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <h6 className="text-info fw-bold mb-2">Filter by Category:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      <button 
                        className={`btn btn-sm filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('all')}
                      >
                        All Projects
                      </button>
                      <button 
                        className={`btn btn-sm filter-btn ${selectedCategory === 'website' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('website')}
                      >
                        Websites ({projectStats.byCategory.website})
                      </button>
                      <button 
                        className={`btn btn-sm filter-btn ${selectedCategory === 'analytics' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('analytics')}
                      >
                        Analytics ({projectStats.byCategory.analytics})
                      </button>
                      <button 
                        className={`btn btn-sm filter-btn ${selectedCategory === 'marketing' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('marketing')}
                      >
                        Marketing ({projectStats.byCategory.marketing})
                      </button>
                      <button 
                        className={`btn btn-sm filter-btn ${selectedCategory === 'custom' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('custom')}
                      >
                        Custom ({projectStats.byCategory.custom})
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h6 className="text-info fw-bold mb-2">Filter by Package:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      <button 
                        className={`btn btn-sm filter-btn ${selectedPackage === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedPackage('all')}
                      >
                        All Packages
                      </button>
                      <button 
                        className={`btn btn-sm filter-btn ${selectedPackage === 'starter' ? 'active' : ''}`}
                        onClick={() => setSelectedPackage('starter')}
                      >
                        Starter ({projectStats.byPackage.starter})
                      </button>
                      <button 
                        className={`btn btn-sm filter-btn ${selectedPackage === 'growth' ? 'active' : ''}`}
                        onClick={() => setSelectedPackage('growth')}
                      >
                        Growth ({projectStats.byPackage.growth})
                      </button>
                      <button 
                        className={`btn btn-sm filter-btn ${selectedPackage === 'enterprise' ? 'active' : ''}`}
                        onClick={() => setSelectedPackage('enterprise')}
                      >
                        Enterprise ({projectStats.byPackage.enterprise})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="flex-grow-1 bg-dark">
          <div className="container h-100">
            <div className="projects-container">
              <div className="row">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card bg-dark project-card h-100 position-relative">
                      {project.featured && (
                        <div className="position-absolute top-0 end-0 m-2">
                          <span className="badge featured-badge">Featured</span>
                        </div>
                      )}
                      
                      <div className="card-body p-3">
                        <div className="d-flex align-items-center mb-2">
                          <div className="text-info me-2">
                            {getCategoryIcon(project.category)}
                          </div>
                          <h5 className="card-title mb-0 text-white">{project.title}</h5>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <small className="text-light">
                            <Calendar size={14} className="me-1" />
                            {new Date(project.completedDate).toLocaleDateString()}
                          </small>
                          <span className={getPackageBadge(project.package)}>
                            {project.package}
                          </span>
                        </div>
                        
                        <p className="text-light mb-2">{project.client}</p>
                        <p className="card-text text-light small mb-3">{project.description}</p>
                        
                        {/* Technologies */}
                        <div className="mb-3">
                          <div className="d-flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech, index) => (
                              <span key={index} className="badge bg-secondary small">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="badge bg-secondary small">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Results */}
                        {project.results && (
                          <div className="mt-auto">
                            <h6 className="text-info small mb-2">Key Results:</h6>
                            {project.results.slice(0, 2).map((result, index) => (
                              <div key={index} className="d-flex justify-content-between text-light small mb-1">
                                <span>{result.metric}:</span>
                                <span className="text-success fw-bold">{result.improvement}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-5">
                  <p className="text-light">No projects found matching your filters.</p>
                  <button 
                    className="btn btn-outline-info"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedPackage('all');
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-4 bg-dark border-top border-secondary">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <h4 className="text-white mb-3">Ready to Start Your Project?</h4>
                <p className="text-light mb-3">
                  Join our growing list of satisfied clients and let us help bring your vision to life.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/pricing" className="btn btn-info text-dark px-4 py-2">
                    View Packages
                  </Link>
                  <button className="btn btn-outline-info px-4 py-2">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
