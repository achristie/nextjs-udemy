import { getFilteredEvents } from "../../helpers/api";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";

export default function FilteredEvents({ events, year, month }) {
  // const router = useRouter();

  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const year = +filterData[0];
  // const month = +filterData[1];

  // if (
  //   isNaN(year) ||
  //   isNaN(month) ||
  //   year < 2021 ||
  //   year > 2030 ||
  //   month < 1 ||
  //   month > 12
  // ) {
  //   return <p className="center">Invalid filter. please adjust</p>;
  // }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No Events Found!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

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
    return {
      notFound: true,
    };
  }

  const filteredEvents = await getFilteredEvents({ year, month });

  return {
    props: {
      events: filteredEvents,
      year: year,
      month: month,
    },
  };

  // return {
  //   props: { events: filteredEvents, year: year, month: month },
  // };
}

