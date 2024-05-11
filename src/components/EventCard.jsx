import React from "react";
// import dummyData from "../dummy";
import { Link } from "react-router-dom";

const EventCard = ({ data }) => {
  return (
    <>
      <div className="mt-10 p-4 relative product-card block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  h-min min-h-[23rem] w-[20rem] hover:cursor-pointer hover:shadow-lg ">
        <img
          className="h-full w-full mb-4 object-cover rounded-lg"
          src={data?.imageUrl}
          //     ? image: //  { image
          // }
          alt=""
        />
        {/* h-[180px] w-full(width:100%) object-contain -----esto gareko to make the card size fixed, jatrai pic size aayye ni*/}

        <div className="">
          <h5 className="mb-2 text-xl font-medium leading-tight ">
            {data?.name}
          </h5>
          <h4>{data?.date}</h4>
          {data.amount ? (
            <h4 className="text-[#00D809]"> {data.amount}</h4>
          ) : (
            <h4 className="text-[#00D809]"> Free</h4>
          )}
          {/* <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {shortDescription}
          </p> */}
          <Link to={`/events/${data?.id}`}>
            <button className="bg-[#00D809] hover:bg-[#00d807af] text-white font-semibold border-indigo-400 rounded-md mt-3 p-2">
              Register now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;
