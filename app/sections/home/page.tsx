const Home = () => (
  <section
    id="home"
    className="-mt-16 flex flex-col md:flex-row items-center justify-center md:justify-between p-8 lg:pl-24 xl:pl-36 2xl:pl-48 bg-gray-400 text-white h-screen relative overflow-hidden"
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
      <a
        href="#"
        className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 shadow-sm hover:shadow-md shadow-zinc-700 hover:shadow-zinc-700"
      >
        ¡Reserva el tuyo ahora!
      </a>
    </div>
  </section>
);

export default Home;
