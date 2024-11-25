const Footer = () => (
  <footer className="bg-gray-900 text-white py-6">
    <div className="text-center space-y-4">
      <p>
        &copy; 2024{" "}
        <a
          href="https://www.jhericosolier.com"
          target="_blank"
          className="font-bold hover:text-blue-400"
        >
          Jherico Solier
        </a>
        . Todos los derechos reservados.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-blue-400">
          Facebook
        </a>
        <a href="#" className="hover:text-blue-400">
          Twitter
        </a>
        <a href="#" className="hover:text-blue-400">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
