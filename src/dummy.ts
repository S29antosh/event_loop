// create dummy data for different events which has event image url,event name, event date, event location, event description, event id

export interface Event {
  id: number;
  imageUrl: string;
  name: string;
  date: string;
  location: string;
  description: string;
  amount?: number;
}

const dummyData = [
  {
    id: 1,
    imageUrl:
      "https://th.bing.com/th/id/OIP.0HOj5_E-dLZfxTaWseLe0gHaE7?rs=1&pid=ImgDetMain",
    name: "DeerHack 2028",
    date: "2021-08-01",
    location: "New York",
    description:
      "lorwm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    amount: 200,
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.nayathegana.com/e5/media/events/event/a443cc81-c5ed-49aa-a915-de9a81d1c37a.jpg",
    name: "Being Human",
    date: "2021-08-02",
    location: "New York",
    description: "This is event 2",
    amount: 100,
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.nayathegana.com/e5/media/events/event/6e217a9c-c955-4086-a638-94aa7c9ea851.jpg",
    name: "Mero Hackathon",
    date: "2021-08-03",
    location: "New York",
    description: "This is event 3",
  },
];

export default dummyData;
