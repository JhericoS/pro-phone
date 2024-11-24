const Home = () => (
  <section id="home" className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-400 h-screen">
    <div className="max-w-lg lg:max-w-xl xl:max-w-2xl text-center md:text-left">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4">
        Descubre el futuro con ProPhone
      </h1>
      <p className="text-gray-700 mb-6">
        El teléfono inteligente diseñado para simplificar tu vida.
      </p>
      <a
        href="#"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        ¡Reserva el tuyo ahora!
      </a>
    </div>
  </section>
);

export default Home;
