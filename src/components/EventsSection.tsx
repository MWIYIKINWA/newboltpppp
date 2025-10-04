import EventCard from './EventCard';

const upcomingEvents = [
  {
    title: 'CHARLOTTE DE WITTE',
    artist: 'Techno Queen',
    date: 'FRI 17 JAN',
    time: '23:00',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'TECHNO',
    soldOut: true,
  },
  {
    title: 'FOUR TET',
    artist: 'Live Performance',
    date: 'SAT 25 JAN',
    time: '22:00',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'ELECTRONIC',
  },
  {
    title: 'DISCLOSURE',
    artist: 'DJ Set',
    date: 'FRI 31 JAN',
    time: '23:00',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'HOUSE',
  },
  {
    title: 'PEGGY GOU',
    artist: 'All Night Long',
    date: 'SAT 8 FEB',
    time: '23:00',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'HOUSE',
  },
  {
    title: 'MACEO PLEX',
    artist: 'Live',
    date: 'FRI 14 FEB',
    time: '23:00',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'TECHNO',
  },
  {
    title: 'TALE OF US',
    artist: 'Extended Set',
    date: 'SAT 22 FEB',
    time: '23:00',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'MELODIC',
  },
];

const justConfirmed = [
  {
    title: 'JAMIE XX',
    artist: 'Album Tour',
    date: 'THU 6 MAR',
    time: '21:00',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'LIVE',
  },
  {
    title: 'NINA KRAVIZ',
    artist: 'All Night Long',
    date: 'SAT 15 MAR',
    time: '23:00',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/2170473/pexels-photo-2170473.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'TECHNO',
  },
  {
    title: 'BONOBO',
    artist: 'Live Band',
    date: 'FRI 21 MAR',
    time: '21:00',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'LIVE',
  },
];

export default function EventsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-[#B823C0] text-white text-sm font-bold rounded-full mb-4">
            JUST CONFIRMED
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">New Announcements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {justConfirmed.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        <div className="border-t pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold">Upcoming Events</h2>

            <div className="hidden md:flex space-x-2">
              <button className="px-4 py-2 bg-[#B823C0] text-white rounded-full text-sm font-medium hover:bg-[#701475] transition-colors">
                ALL
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
                TECHNO
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
                HOUSE
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
                LIVE
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-[#B823C0] text-white font-bold rounded-full hover:bg-[#701475] transition-all transform hover:scale-105">
              VIEW ALL EVENTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
