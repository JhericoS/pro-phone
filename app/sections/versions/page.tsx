"use client";
import { useState } from "react";
import colors from "@/public/data/colors";
import versions from "@/public/data/versions";
import Image from "next/image";

const Versions = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0].image);
  const [selectedVersion, setSelectedVersion] = useState(versions[0]);

  return (
    <section id="versions" className="px-6 pt-24 pb-12 bg-white text-zinc-800">
      <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-16">
        Versiones del ProPhone
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center">
        <div className="mb-8 lg:mb-0 lg:mr-24">
          <Image
            src={selectedColor}
            alt="ProPhone"
            width={960}
            height={960}
            className="h-auto max-h-96 w-auto"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex space-x-4 mb-4">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`w-12 h-12 rounded-full border-2 ${
                  selectedColor === color.image
                    ? "border-black"
                    : "border-zinc-200"
                }`}
                style={{ backgroundColor: color.code }}
                onClick={() => setSelectedColor(color.image)}
              />
            ))}
          </div>
          <p className="mb-6 font-semibold">
            Color:{" "}
            {colors.find((color) => color.image === selectedColor)?.color}
          </p>
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex space-x-4 mb-6">
              {versions.map((version, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg border-2 ${
                    selectedVersion.storage === version.storage
                      ? "border-black"
                      : "border-zinc-200"
                  }`}
                  onClick={() => setSelectedVersion(version)}
                >
                  {version.storage}
                </button>
              ))}
            </div>
            <div className="text-xl font-semibold">
              Precio: ${selectedVersion.price}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Versions;
