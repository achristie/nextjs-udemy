/**
 * @class       : api
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Monday Apr 19, 2021 18:40:51 EDT
 * @description : api
 */

export async function getEvents() {
  const res = await fetch(
    "https://next-test-16187-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getEventById(id) {
  const events = await getEvents();
  return events.find((e) => e.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const events = await getEvents();

  let filteredEvents = events.filter((e) => {
    const date = new Date(e.date);
    return date.getFullYear() === year && date.getMonth() === month - 1;
  });

  return filteredEvents;
}

