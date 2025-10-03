import { useEffect, useState } from "react";

const TourSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/kbraozdemir/fake-events-api/main/tour.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section>
      <h2>Tour Events</h2>
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>{event.startDate}</p>
            <p>{event.cities.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourSection;
