import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Carousel } from '@/components/ui/apple-cards-carousel';
import { testimonials } from '@/data/carouselData';

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ card: testimonial, index }) => {
  return (
    <div className="h-full w-full p-4">
      <div className="h-full bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="p-8 h-full flex flex-col">
          <StarRating rating={testimonial.rating} />
          <div className="text-gray-500 mb-6 grow">
            <FaQuoteLeft className="text-3xl mb-4 text-gray-200" />
            <p className="text-gray-700 text-lg leading-relaxed">"{testimonial.content}"</p>
          </div>
          <div className="flex items-center border-t border-gray-100 pt-6">
            <div className="relative">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-white ring-offset-2"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative">
          <Carousel items={testimonials} CardComponent={TestimonialCard} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
