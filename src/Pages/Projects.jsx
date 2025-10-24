import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Projects = () => {
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
    return (
        <div>
              <div className="container mx-auto px-8 py-8 ">
      <h1 className="text-3xl text-cyan-400 font-bold mb-8 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border  rounded-lg shadow-md shadow-[#898AC4] p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl text-[#D3EE98] font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <p className="mb-2">
  <strong className="text-[#36C2CE]">Tech :</strong>
  <div className="flex flex-wrap gap-2 mt-2">
    {project.tech.map((item, index) => (
      <span
        key={index}
        className="px-3 py-1 rounded-full text-sm border border-[#77E4C8]"
      >
        {item}
      </span>
    ))}
  </div>
</p>
            <p className="mb-2">
              <strong className='text-[#36C2CE]'>Duration : </strong> {project.duration}
            </p>
            <div className="flex gap-4 mt-4">

              <Link to={`/projects/${project.id}`} className='btn btn-bg  px-3 py-1 rounded-xl'>View More</Link>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-bg  px-3 py-1 rounded-xl hover:bg-blue-600"
              >
                Live Demo
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Projects;