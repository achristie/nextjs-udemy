import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";

export default function FilteredEvents() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 2021 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  ) {
    return <p className="center">Invalid filter. please adjust</p>;
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No Events Found!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

