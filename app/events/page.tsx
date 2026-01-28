import { Event } from "@/types/events";

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Cyber Meet 2026",
    date: "2026-02-15",
    location: "Kathmandu",
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Upcoming Events</h1>
      {mockEvents.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>
            {event.date} — {event.location}
          </p>
        </div>
      ))}
    </>
  );
}
