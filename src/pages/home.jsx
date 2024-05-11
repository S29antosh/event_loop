import EventCard from "../components/EventCard";
import dummyData from "../dummy";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(dummyData);

  return (
    <>
      <div className="Search-section ">
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            flexDirection: "row",
            margin: "1rem",
          }}
        >
          <input
            type="text"
            placeholder="Search for a Event"
            value={search}
            className="border-2 border-gray-300 p-2 rounded-md w-1/2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-[#00D809] hover:bg-[#00d807af] text-white font-semibold border-indigo-400 rounded-md p-2"
            onClick={(e) => {
              e.preventDefault();
              setSearch("");
            }}
          >
            🔍
          </button>
        </form>
      </div>

      <div className=" Event-section flex gap-3 justify-center min-h-screen ">
        {data
          .filter((item) => {
            const searchTerm = search;
            if (searchTerm === "") {
              return true; // Include all items when search is empty
            } else {
              return item?.name?.includes(searchTerm) ?? false;
            }
          })
          .map((item) => (
            <EventCard key={item.id} data={item} />
          ))}
      </div>
    </>
  );
};

export default Home;
