import EventItem from "./event-item";

function EventList({ items }) {
  return (
    <ul>
      {items.map((d) => {
        console.log(d);
        return (
          <EventItem
            id={d.id}
            title={d.title}
            image={d.image}
            date={d.date}
            location={d.location}
          />
        );
      })}
    </ul>
  );
}

export default EventList;

