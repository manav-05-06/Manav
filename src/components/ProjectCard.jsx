function ProjectCard({ title, stack, description, repo, live }) {
  return (
    <div className="font-mono bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-blue-500 mb-2">{stack.join(' / ')}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex gap-4">
        {repo && <a href={repo} className="text-blue-600 hover:underline" target="_blank">GitHub</a>}
        {live && <a href={live} className="text-purple-600 hover:underline" target="_blank">Live Demo</a>}
      </div>
    </div>
  )
}

export default ProjectCard
