/**
 * @class       : [eventId]
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Tuesday Apr 13, 2021 17:52:44 EDT
 * @description : [eventId]
 */

import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <div>
      <h1>Event Detail</h1>
      <h2>{event.title}</h2>
    </div>
  );
}

