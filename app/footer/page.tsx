"use client";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-white text-zinc-800 py-6 select-none">
      <div className="container mx-auto px-6">
        {/* Sección Superior */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 border-b border-zinc-500 max-w-5xl mx-auto">
          <div className="mb-6 lg:mb-0 text-4xl font-bold font-sans text-rose-700 flex items-center mx-auto">
            <Image
              src="/images/pro_logo.png"
              alt="ProPhone"
              width={80}
              height={80}
            />
            Phone
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 mx-auto text-center md:text-left">
            <div>
              <h3 className="font-bold mb-2">Secciones</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleScroll("home")}
                    className="hover:text-rose-500"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("features")}
                    className="hover:text-rose-500"
                  >
                    Características
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("versions")}
                    className="hover:text-rose-500"
                  >
                    Versiones
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("reviews")}
                    className="hover:text-rose-500"
                  >
                    Reseñas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("contact")}
                    className="hover:text-rose-500"
                  >
                    Reserva
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Soporte</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-rose-400">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sección Inferior */}
        <div className="text-center space-y-4 mt-6">
          <div className="flex justify-center space-x-6">
            <a href="#">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-800 hover:border-rose-400 hover:text-rose-400">
                <FaFacebookF />
              </div>
            </a>
            <a href="#">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-800 hover:border-rose-400 hover:text-rose-400">
                <FaLinkedin />
              </div>
            </a>
            <a href="#">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-800 hover:border-rose-400 hover:text-rose-400">
                <FaInstagram />
              </div>
            </a>
          </div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
