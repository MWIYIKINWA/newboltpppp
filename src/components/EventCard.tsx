import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  category: string;
  soldOut?: boolean;
}

export default function EventCard({
  title,
  artist,
  date,
  time,
  venue,
  image,
  category,
  soldOut = false,
}: EventCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-3 aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {soldOut && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
            SOLD OUT
          </div>
        )}
        <div className="absolute top-3 left-3 px-3 py-1 bg-[#B823C0] text-white text-xs font-bold rounded-full">
          {category}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold group-hover:text-[#B823C0] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 font-medium">{artist}</p>

        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <span>•</span>
          <span>{time}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 space-x-1">
          <MapPin size={16} />
          <span>{venue}</span>
        </div>
      </div>
    </div>
  );
}
