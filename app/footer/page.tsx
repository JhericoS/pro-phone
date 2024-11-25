const Footer = () => (
  <footer className="bg-zinc-900 text-white py-6">
    <div className="text-center space-y-4">
      <p>
        &copy; 2024{" "}
        <a
          href="https://www.jhericosolier.com"
          target="_blank"
          className="font-bold hover:text-rose-400"
        >
          Jherico Solier
        </a>
        . Todos los derechos reservados.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-rose-400">
          Facebook
        </a>
        <a href="#" className="hover:text-rose-400">
          Twitter
        </a>
        <a href="#" className="hover:text-rose-400">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
