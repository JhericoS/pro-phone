import reviews from "@/public/data/reviews";

const Reviews = () => (
  <section id="reviews" className="p-12 bg-gray-100 text-zinc-800">
    <h2 className="text-3xl font-bold text-center mb-8">Reseñas</h2>
    <div className="space-y-8">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{review.name}</h3>
          <div className="flex items-center mb-4">
            {Array.from({ length: review.rating }).map((_, i) => (
              <span key={i} className="text-yellow-500">
                ★
              </span>
            ))}
            {Array.from({ length: 5 - review.rating }).map((_, i) => (
              <span key={i} className="text-gray-300">
                ★
              </span>
            ))}
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Reviews;
