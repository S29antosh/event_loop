import { useParams } from "react-router-dom";
import dummyData from "../dummy";
import { useEffect } from "react";

const EventPage = () => {
  const { eventId } = useParams();
  const data = dummyData.find((item) => item.id === parseInt(eventId));

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <h2>{data.date}</h2>
          <h3>{data.description}</h3>
        </div>
      ) : (
        <h1>Event not found</h1>
      )}
    </div>
  );
};

export default EventPage;
