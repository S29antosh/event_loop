import { useEffect } from "react";
import EventCard from "../components/EventCard";
import dummyData from "../dummy";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    // list events
    fetch(
      "http://192.168.102.246:4000/event.list?batch=1&input=%7B%220%22%3A%7B%22json%22%3Anull%2C%22meta%22%3A%7B%22values%22%3A%5B%22undefined%22%5D%7D%7D%7D",
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdzFvd3htNDAwMDBrbThoMHNha2ZlNG0iLCJub09mUGFzc3dvcmRzQ2hhbmdlZCI6MSwiaWF0IjoxNzE1NDU0MDI4LCJleHAiOjE3NDY5OTAwMjh9.rFwruZHkxLwQmq5CpqqXXSmcnnKsqhwdVbGZMCa51qObZd4SH9DdX9FvgOOm2IrNeL1QczJyvP9uOVwaj60hWxkfa-LSp6Pes7JjFK9PRdsuOABRb9skMkpRIIef5NCarBxlmzVUerlDZHwDtJqfd8qyEvXY_Oo59sqYytsaF0o0hyJnOIBhFbUA65XHj6zNBGj6zPtMaX7dekvSrm-yPA1KSY3nk3_GBE7sNX0JL2FozS3X5P2UwJPm3I0o0n8E4vLIMgdpCmdfKOnOr8KKwOiSJy7mVWKgqPz8EdLAeJ7MIXliQW__aZ9vpQchkE4t1PfmF4VZpE1Q8MT3byzj7KdUKN3opo9dmuBs2OrlowYKsbwjV6bLmxzO9CrZ1iEajf6p3J0JTCP9E5OQK6cRgKFO_uemukFW8wovxuB1ksYH6NWsBenoS_H94i8v5vbODsGOrJ2cKpWeyVo5L7-ZDjDimvj5GRpyB1HcRea7gRHfAnXF4vSxE0TQncEHaLqHTk5QL6EwA0N7DkvNddZTsUcIn_x_jxar_dsIDKXI6S83uw8thMU_tlNoxfSB_COGvjXn3IDs2qLKwtRcHY92IOueEjztE4-GvT_Rd3rXkXSpuEu1cLP6aZqLZFZUzArfAFIBTzRdGgjMhPHVrISxyRMkSM1CcnNES9lrK7VDSXI",
          "content-type": "application/json",
          "x-trpc-source": "expo-react",
        },
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

    // submit form response
    const data = {
      email: "joonshakya07@gmail.com",
      fullName: "Joon Shakya",
      linkedIn: "https://www.linkedin.com/in/joon-shakya-7b1b3b1b3/",
      phone: "9841234567",
      eventId: "clw1tvn2n0006kmnibe18su2a",
      message: "Hello World",
    };
    fetch("http://192.168.102.246:4000/response.create?batch=1", {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdzFvd3htNDAwMDBrbThoMHNha2ZlNG0iLCJub09mUGFzc3dvcmRzQ2hhbmdlZCI6MSwiaWF0IjoxNzE1NDU0MDI4LCJleHAiOjE3NDY5OTAwMjh9.rFwruZHkxLwQmq5CpqqXXSmcnnKsqhwdVbGZMCa51qObZd4SH9DdX9FvgOOm2IrNeL1QczJyvP9uOVwaj60hWxkfa-LSp6Pes7JjFK9PRdsuOABRb9skMkpRIIef5NCarBxlmzVUerlDZHwDtJqfd8qyEvXY_Oo59sqYytsaF0o0hyJnOIBhFbUA65XHj6zNBGj6zPtMaX7dekvSrm-yPA1KSY3nk3_GBE7sNX0JL2FozS3X5P2UwJPm3I0o0n8E4vLIMgdpCmdfKOnOr8KKwOiSJy7mVWKgqPz8EdLAeJ7MIXliQW__aZ9vpQchkE4t1PfmF4VZpE1Q8MT3byzj7KdUKN3opo9dmuBs2OrlowYKsbwjV6bLmxzO9CrZ1iEajf6p3J0JTCP9E5OQK6cRgKFO_uemukFW8wovxuB1ksYH6NWsBenoS_H94i8v5vbODsGOrJ2cKpWeyVo5L7-ZDjDimvj5GRpyB1HcRea7gRHfAnXF4vSxE0TQncEHaLqHTk5QL6EwA0N7DkvNddZTsUcIn_x_jxar_dsIDKXI6S83uw8thMU_tlNoxfSB_COGvjXn3IDs2qLKwtRcHY92IOueEjztE4-GvT_Rd3rXkXSpuEu1cLP6aZqLZFZUzArfAFIBTzRdGgjMhPHVrISxyRMkSM1CcnNES9lrK7VDSXI",
        "content-type": "application/json",
        "x-trpc-source": "expo-react",
      },
      body: '{"0":{"json":' + JSON.stringify(data) + "}}",
      method: "POST",
      mode: "cors",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
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
      <h1 className="text-center font-bold text-xl">
        Select Event
      </h1>

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
