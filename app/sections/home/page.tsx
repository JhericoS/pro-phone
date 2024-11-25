"use client";
const Home = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="-mt-16 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-12 lg:pl-24 xl:pl-36 2xl:pl-48 bg-zinc-400 text-white h-screen relative overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video_home.webm" type="video/webm" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-5"></div>
      <div className="relative z-10 max-w-lg lg:max-w-xl xl:max-w-5xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 font-serif text-shadow">
          Descubre el futuro con{" "}
          <span className="animate-colors font-black">ProPhone</span>
        </h1>
        <p className="mb-6 text-shadow 2xl:text-lg">
          El teléfono diseñado para simplificar tu vida.
        </p>
        <button
          onClick={() => handleScroll("contact")}
          className="bg-rose-600 px-6 py-3 rounded-lg hover:bg-rose-700 shadow-sm hover:shadow-md shadow-zinc-700 hover:shadow-zinc-700"
        >
          ¡Reserva el tuyo ahora!
        </button>
      </div>
    </section>
  );
};

export default Home;
