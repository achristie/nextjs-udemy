/**
 * @class       : index
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Tuesday Apr 13, 2021 17:50:10 EDT
 * @description : index
 */
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

export default function AllEventsPage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

