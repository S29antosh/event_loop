import SearchBox from "../components/searchBox";
import Card from "../components/Card";
import EventCard from "../components/EventCard";

const Home = () => {
  return (
    <div className="container bg-blue-300 mx-auto ">
      <SearchBox />
      <EventCard />
    </div>
  );
};

export default Home;
