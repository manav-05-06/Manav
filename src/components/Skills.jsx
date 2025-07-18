const skills = [
  { name: "JavaScript" },
  
  { name: "React.js" },
  { name: "TailwindCSS" },
 { name: "Node.js" },
 { name: "Express.js" },
  { name: "CSS" },
  
  { name: "MongoDB" },
  {name:"SQL"},
  {name:"JAVA"},
  
  
  
  // Add any more skills
];

function Skills() {
  return (
    <section id="skills" className="font-mono max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-3xl max-w-max mb-6 underline rounded-lg hover:bg-yellow-200 hover:text-black transition-colors  ">Tools</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map(skill => (
          <span
            key={skill.name}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition text-base font-medium"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
