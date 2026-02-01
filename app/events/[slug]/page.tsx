import { getEventBySlug } from '@/lib/api/events';
import { Event } from '@/types/events';
import Link from 'next/link';

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event: Event = await getEventBySlug(slug);

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Determine which events page to link back to
  const backLink = event.status === 'upcoming' ? '/events/upcoming' : '/events/completed';
  const backText = event.status === 'upcoming' ? 'Back to Upcoming Events' : 'Back to Completed Events';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative h-[500px] bg-black">
        <img 
          src={event.mainImage} 
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="relative container mx-auto px-6 max-w-7xl h-full flex items-end pb-16">
          <div className="text-white max-w-4xl">
            <Link
              href={backLink}
              className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6 text-base font-medium transition-colors"
            >
              <span className="mr-2">←</span>
              {backText}
            </Link>
            
            {/* Date and Status Badges */}
            <div className="mb-4 flex flex-wrap gap-3">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                {formatDate(event.eventDate)}
              </span>
              {event.status === 'upcoming' && (
                <span className="inline-block bg-green-500 px-4 py-2 rounded-full text-sm font-bold">
                  Upcoming Event
                </span>
              )}
              {event.status === 'completed' && (
                <span className="inline-block bg-blue-500 px-4 py-2 rounded-full text-sm font-bold">
                  Completed
                </span>
              )}
            </div>
            
            <h1 className="text-6xl font-bold mb-6 leading-tight">{event.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span>📍</span>
                <span className="font-medium">{event.location}</span>
              </span>
              {event.attendees && event.attendees > 0 && (
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span>👥</span>
                  <span className="font-medium">{event.attendees} attendees</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-blue-600 text-4xl font-bold mb-2">
                {event.attendees && event.attendees > 0 ? event.attendees : 'TBA'}
              </div>
              <div className="text-gray-600">Attendees</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-blue-600 text-2xl font-bold mb-2 truncate">
                {event.organizer || 'GCCF'}
              </div>
              <div className="text-gray-600">Organizer</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-blue-600 text-4xl font-bold mb-2">
                {event.status === 'completed' ? 'Completed' : 'Upcoming'}
              </div>
              <div className="text-gray-600">Status</div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              About This Event
            </h2>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
              {event.description}
            </div>
          </div>

          {/* Gallery */}
          {event.galleryImages && event.galleryImages.length > 0 && (
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Event Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <img 
                      src={image} 
                      alt={`${event.title} - Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action for Upcoming Events */}
          {event.status === 'upcoming' && (
            <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-lg p-8 mt-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Join?</h3>
              <p className="text-lg mb-6 text-green-100">
                Don't miss this opportunity to connect with cybersecurity professionals and industry leaders.
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors">
                Register Now
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}