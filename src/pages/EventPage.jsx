import { useState } from "react";
import { useParams } from "react-router-dom";
import dummyData from "../dummy";

const EventPage = () => {
  const { eventId } = useParams();
  const data = dummyData.find((item) => item.id === parseInt(eventId));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    // Submit form data to backend or perform other actions
    // For now, just show an alert
    alert("Registered successfully");
    setIsSubmitted(true);
    // Reset form fields
    setName("");
    setEmail("");
    setLinkedInUrl("");
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="flex gap-3 justify-evenly items-center">
      {data ? (
        <div className="flex mt-8 flex-col gap-2 justify-center items-center">
          <h1 className="mb-2 text-xl font-medium leading-tight">
            {data.name}
          </h1>
          <img
            className="w-[600px] rounded-md h-[400px]"
            src={data.imageUrl}
            alt={data.name}
          />
          <p>Date: {data.date}</p>
          <p className=" text-gray-500
          w-[600px]


          ">{data.description}</p>
        </div>
      ) : (
        <h1>Event not found</h1>
      )}
      <form className="flex flex-col  gap-5" onSubmit={handleSubmit}>
        <input
          required
          className="border-2 border-gray-300 p-2 rounded-md"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          className="border-2 min-w-[30rem] border-gray-300 p-2 rounded-md"
          type="number"
          placeholder="Enter your fee"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          className="border-2 border-gray-300 p-2 rounded-md"
          type="url"
          placeholder="Enter your LinkedIn Url"
          value={linkedInUrl}
          onChange={(e) => setLinkedInUrl(e.target.value)}
        />
        <input
          type="submit"
          value="Register now"
          className="bg-[#00D809] hover:bg-[#00d807af] text-white font-semibold border-indigo-400 rounded-md mt-3 p-2"
        />
      </form>
     
    </div>
  );
};

export default EventPage;
