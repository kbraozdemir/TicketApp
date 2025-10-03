import { useEffect, useState } from "react";

const TheatreSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/kbraozdemir/fake-events-api/main/theatre.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section>
      <h2>Theatre Events</h2>
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

export default TheatreSection;
