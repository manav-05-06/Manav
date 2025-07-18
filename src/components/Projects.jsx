import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="font-mono max-w-6xl mx-auto px-4 mt-20">
      <h2 className="text-3xl ml-0 underline font-bold  mb-10">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
