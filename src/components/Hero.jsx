function Hero() {
  return (
    <section id="hero" className="h-100vh flex flex-col justify-center items-center text-center pt-40 font-mono">
      <h1 className="text-5xl font-mono mb-4">Manav Khandelwal </h1>
      <p className="text-xl max-w-2xl mb-6">
        <span>Software Developer</span>
        
      </p>
      <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
        View My Work
      </a>
    </section>
  )
}

export default Hero
