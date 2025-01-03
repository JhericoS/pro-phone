"use client";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import reviews from "@/public/data/reviews";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - cardsToShow ? prevIndex : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <section id="reviews" className="px-4 py-24 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white">
      <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-8 xl:mb-16">Reseñas</h2>
      <div className="relative max-w-5xl mx-auto select-none ">
        <div className="overflow-hidden p-1" {...swipeHandlers}>
          <div
            className="flex transition-transform duration-500 gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-zinc-100 dark:bg-zinc-700 p-6 rounded-lg shadow-md w-80 flex-shrink-0"
                style={{ minWidth: `calc(${100 / cardsToShow}% - 1rem)` }}
              >
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <span key={i} className="text-zinc-300">
                      ★
                    </span>
                  ))}
                </div>
                <p className="">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6 space-x-4  max-w-5xl mx-auto">
        <button
          onClick={handlePrev}
          className={`bg-rose-700 p-2 rounded-full hover:bg-rose-800 text-white ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className={`bg-rose-700 p-2 rounded-full hover:bg-rose-800 text-white ${
            currentIndex === reviews.length - cardsToShow
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentIndex === reviews.length - cardsToShow}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
