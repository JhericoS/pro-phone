"use client";
import versions from "@/public/data/versions";
import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import colors from "@/public/data/colors";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    color: "",
    storage: "",
    termsAccepted: false,
    promotions: false,
  });
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setError("Por favor, ingresa un número de teléfono válido.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }

    if (!formData.termsAccepted) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }

    setError("");
    setIsButtonDisabled(true);

    const selectedVersion = versions.find(
      (version) => version.storage === formData.storage
    );

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      color: formData.color,
      storage: formData.storage,
      promotions: formData.promotions ? "Sí" : "No",
      totalPrice: selectedVersion ? selectedVersion.price : "",
    };

    try {
      // Correo para usuarios
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
      );
      // Correo para admin
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
      );

      alert(
        "¡Gracias por su reserva! Pronto recibirás más información en tu correo registrado."
      );
      setFormData({
        email: "",
        name: "",
        phone: "",
        color: "",
        storage: "",
        termsAccepted: false,
        promotions: false,
      });
    } catch (error) {
      console.error("Error al procesar el formulario", error);
    } finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-20 flex items-center justify-center text-zinc-500"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto">
        <div className="absolute inset-0 select-none">
          <Image
            src={"/images/contact.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 w-full max-w-xl mx-auto bg-white dark:bg-zinc-800 bg-opacity-90 dark:bg-opacity-75 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-8 text-zinc-800 dark:text-white">
            Reserva tu ProPhone
          </h2>
          <form onSubmit={handleSubmit} className="w-full">
            {/* Nombre */}
            <input
              type="text"
              name="name"
              placeholder="Nombre completo*"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md mb-4"
              required
            />
            {/* Teléfono */}
            <input
              type="tel"
              name="phone"
              placeholder="Número de teléfono*"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md mb-4"
              required
            />
            {/* Correo */}
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico*"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md mb-4 ${
                error && !formData.email ? "border-red-500" : "border-zinc-300"
              }`}
              required
            />
            {/* Select: Color */}
            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md mb-4"
              required
            >
              <option value="">Color preferido*</option>
              {colors.map((color) => (
                <option key={color.code} value={color.color}>
                  {color.color}
                </option>
              ))}
            </select>
            {/* Select: Almacenamiento */}
            <select
              name="storage"
              value={formData.storage}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md mb-4"
              required
            >
              <option value="">Almacenamiento deseado*</option>
              {versions.map((version) => (
                <option key={version.storage} value={version.storage}>
                  {version.storage}
                </option>
              ))}
            </select>
            {/* Checkbox: Términos y condiciones */}
            <label className="flex items-center mb-4 dark:text-white">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span className="inline-table items-center">
                Acepto los{" "}
                <Link href="#" className="font-semibold ml-1">
                  Términos y condiciones
                </Link>
                *
              </span>
            </label>
            {/* Checkbox: Recibir promociones */}
            <label className="flex items-center mb-4 dark:text-white">
              <input
                type="checkbox"
                name="promotions"
                checked={formData.promotions}
                onChange={handleChange}
                className="mr-2"
              />
              Deseo recibir más promociones
            </label>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="relative bg-rose-700 text-white rounded-lg flex w-full px-6 py-2 items-center justify-center overflow-hidden shadow-md transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-rose-800 before:duration-500 before:ease-out hover:shadow-rose-800 hover:before:h-96 hover:before:w-full"
              disabled={isButtonDisabled}
            >
              <span className="relative">Reservar</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
