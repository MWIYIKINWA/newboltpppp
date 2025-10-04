import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const featuredEvents = [
  {
    id: 1,
    title: 'BICEP',
    date: 'FRI 24 JAN',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'ELECTRONIC',
  },
  {
    id: 2,
    title: 'AMELIE LENS',
    date: 'SAT 15 FEB',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'TECHNO',
  },
  {
    id: 3,
    title: 'FLOATING POINTS',
    date: 'THU 6 MAR',
    image: 'https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'LIVE',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
  };

  const currentEvent = featuredEvents[currentSlide];

  return (
    <div className="relative h-[70vh] mt-20 overflow-hidden bg-gradient-to-br from-[#701475] to-[#B823C0]">
      <div className="absolute inset-0">
        <img
          src={currentEvent.image}
          alt={currentEvent.title}
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4">
            {currentEvent.tag}
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            {currentEvent.title}
          </h2>
          <p className="text-xl sm:text-2xl font-medium mb-8">{currentEvent.date}</p>
          <button className="px-8 py-3 bg-white text-[#B823C0] font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">
            GET TICKETS
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex space-x-3">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
