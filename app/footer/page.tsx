"use client";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white py-6 select-none">
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
                    className="hover:text-rose-700"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("features")}
                    className="hover:text-rose-700"
                  >
                    Características
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("versions")}
                    className="hover:text-rose-700"
                  >
                    Versiones
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("reviews")}
                    className="hover:text-rose-700"
                  >
                    Reseñas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("contact")}
                    className="hover:text-rose-700"
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
                  <Link href="#" className="hover:text-rose-700">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-rose-700">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-rose-700">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sección Inferior */}
        <div className="text-center space-y-4 mt-6">
          <div className="flex justify-center space-x-6">
            <Link href="https://www.facebook.com/" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-800 dark:border-white hover:border-rose-700 dark:hover:border-rose-700 hover:text-rose-700">
                <FaFacebookF className="h-5 w-5" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-800 dark:border-white hover:border-rose-700 dark:hover:border-rose-700 hover:text-rose-700">
                <FaLinkedin className="h-5 w-5" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-800 dark:border-white hover:border-rose-700 dark:hover:border-rose-700 hover:text-rose-700">
                <FaInstagram className="h-5 w-5" />
              </div>
            </Link>
          </div>
          <p className="text-xs">
            &copy; 2024{" "}
            <Link
              href="https://www.jhericosolier.com"
              target="_blank"
              className="font-bold hover:text-rose-700"
            >
              Jherico Solier
            </Link>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
