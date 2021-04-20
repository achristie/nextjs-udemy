/**
 * @class       : [eventId]
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Tuesday Apr 13, 2021 17:52:44 EDT
 * @description : [eventId]
 */

import { useRouter } from "next/router";
import { getEventById, getEvents } from "../../helpers/api";

export default function EventDetailPage({ event }) {
  const router = useRouter();

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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event: event,
    },
    revalidate: 800,
  };
}

export async function getStaticPaths() {
  const events = await getEvents();

  const paths = events.map((e) => ({
    params: {
      eventId: e.id,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

