import { useEffect, useState } from "react";

const ConcertSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/kbraozdemir/fake-events-api/main/concert.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section>
      <h2>Concert Events</h2>
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConcertSection;
