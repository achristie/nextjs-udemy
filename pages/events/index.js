/**
 * @class       : index
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Tuesday Apr 13, 2021 17:50:10 EDT
 * @description : index
 */
import { getEvents } from "../../helpers/api";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

export default function AllEventsPage({ events }) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 1600,
  };
}

