"use client";
import colors from "@/public/data/colors";
import versions from "@/public/data/versions";
import Image from "next/image";
import { useState } from "react";

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

  const validateEmail = (email: string): boolean => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(email);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }

    if (!formData.termsAccepted) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }

    setError("");
    alert("¡Gracias por su reserva! Pronto recibirás más información en tu correo registrado.");
    setFormData({
      email: "",
      name: "",
      phone: "",
      color: "",
      storage: "",
      termsAccepted: false,
      promotions: false,
    });
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-20 flex items-center justify-center bg-white text-zinc-500"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto">
        <div className="absolute inset-0">
          <Image
            src={"/images/contact.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 w-full max-w-lg mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-zinc-800">
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
            <label className="flex items-center mb-4">
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
                <a href="#" className="font-semibold ml-1">
                  Términos y condiciones
                </a>*
              </span>
            </label>
            {/* Checkbox: Recibir promociones */}
            <label className="flex items-center mb-4">
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
              className="w-full bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700"
            >
              Reservar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
