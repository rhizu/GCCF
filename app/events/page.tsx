import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            GCCF Events
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Join us at our cybersecurity events, workshops, and conferences. 
            Connect with industry experts and security professionals.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Upcoming Events Card */}
            <Link
              href="/events/upcoming"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative z-10">
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-3xl font-bold mb-4">
                  Upcoming Events
                </h2>
                <p className="text-green-100 mb-6 text-lg">
                  Discover and register for our upcoming cybersecurity conferences, 
                  workshops, and training sessions.
                </p>
                <div className="inline-flex items-center gap-2 text-lg font-semibold">
                  <span>Explore Upcoming Events</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Completed Events Card */}
            <Link
              href="/events/completed"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative z-10">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-3xl font-bold mb-4">
                  Past Events
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Explore our archive of completed cybersecurity events, 
                  workshops, and their highlights.
                </p>
                <div className="inline-flex items-center gap-2 text-lg font-semibold">
                  <span>View Past Events</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}