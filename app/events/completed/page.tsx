import { getCompletedEvents } from '@/lib/api/events';
import { Event } from '@/types/events';
import EventCard from '@/components/EventCard';

export default async function CompletedEventsPage() {
  const events: Event[] = await getCompletedEvents();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Completed Events
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Explore our past cybersecurity events, workshops, and conferences 
              that brought together industry experts and security professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Past Events
            </h2>
            <p className="text-lg text-gray-600">
              {events.length} {events.length === 1 ? 'event' : 'events'} completed
            </p>
          </div>

          {/* Events Grid */}
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">📅</div>
              <p className="text-gray-500 text-xl">No completed events found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}