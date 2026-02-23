const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Dashboard</h1>
      <p className="text-xl mb-6">Build your projects with ease</p>
      <button className="bg-white text-blue-500 px-6 py-3 rounded hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
