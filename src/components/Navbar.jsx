import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

function Navbar({ dark, setDark }) {
  return (
    <nav className="font-mono fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#hero" className="text-xl font-sans">Manav</a>
        <div className="flex gap-5 items-center">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <button
      onClick={() => setDark(x => !x)}
      className="p-2 rounded hover:pointer-events-auto"
      aria-label="Toggle dark mode"
    >
      {dark 
        ? <SunIcon className="h-6 w-6 text-yellow-400" /> 
        : <MoonIcon className="h-6 w-6 text-gray-100" />
      }
    </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
