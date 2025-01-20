export default function Hero() {
  return (
    <section className='relative text-center py-24 px-6 bg-gradient-to-br from-purple-700 via-purple-800 to-gray-900 text-gray-100 overflow-hidden'>
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 bg-opacity-40 bg-[url('/silver.svg')] bg-cover bg-center"></div>

      <div className='relative z-10 max-w-4xl mx-auto'>
        <h1 className='text-5xl font-extrabold mb-6 leading-tight'>
          Build Your Dream App with{' '}
          <span className='text-blue-400'>Next.js</span>
        </h1>
        <p className='text-xl mb-8 text-gray-300 max-w-2xl mx-auto'>
          Start your journey to create fast, scalable, and beautiful web
          applications. Powered by the powerhouses of{' '}
          <span className='text-blue-400'>Next.js</span> and
          <span className='text-purple-400'> TailwindCSS</span>.
        </p>
        <a
          href='#'
          className='inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition'
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
