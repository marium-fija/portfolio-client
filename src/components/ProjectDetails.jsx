import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useParams } from 'react-router';

const ProjectDetails = () => {
     const { id } = useParams(); 
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedProject = data.find((p, index) => index === Number(id));
                setProject(selectedProject);
            })
            .catch(err => console.error(err));
    }, [id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-lime-200 text-xl">
        Loading project details...
      </div>
    );
  }
    return (
        <div>
            <section className="bg-[#0f0f13] text-white py-16 px-4 flex flex-col items-center">
      <div className="max-w-3xl text-center">
        {/* Project Image */}
        <img
          src={project.img}
          alt={project.name}
          className="rounded-2xl w-full object-cover mb-8 shadow-lg border border-blue-400"
        />

        {/* Project Name */}
        <h2 className="text-3xl font-bold mb-3 text-blue-400">
          {project.name}
        </h2>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {project.tech.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-yellow-500/20  rounded-full text-sm border border-cyan-500"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Challenges */}
        <div className="text-gray-300 mb-6">
          <h3 className="text-xl text-blue-400 font-semibold mb-2">
            Challenges
          </h3>
          <p>{project.challenges}</p>
        </div>

        {/* Duration */}
        <div className="mb-8">
          <span className="text-blue-500 font-semibold">Duration : </span>{" "}
          {project.duration}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-bg  px-5 py-2 rounded-full font-semibold flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-bg  px-5 py-2 rounded-full font-semibold flex items-center gap-2 transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ProjectDetails;