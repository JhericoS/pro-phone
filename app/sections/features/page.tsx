import features from "@/public/data/features";

const Features = () => (
  <section id="features" className="px-6 pt-24 pb-12 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white">
    <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-8 xl:mb-16">
      Características del ProPhone
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative bg-zinc-100 rounded-lg shadow-md overflow-hidden group h-80"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${feature.image})` }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 transition-all duration-300 group-hover:mb-4">
              {feature.title}
            </h3>
            <p className="text-zinc-300 overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-500">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
