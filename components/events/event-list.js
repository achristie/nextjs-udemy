import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((d) => {
        return (
          <EventItem
            key={d.id}
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

