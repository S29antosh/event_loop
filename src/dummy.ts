// create dummy data for different events which has event image url,event name, event date, event location, event description, event id

export interface Event {
    id: number;
    imageUrl: string;
    name: string;
    date: string;
    location: string;
    description: string;
}

const dummyData = [
    {
        id: 1,
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eventbrite.com%2Fd%2Fny--new-york%2Fevents%2F&psig=AOvVaw1Xz3W5R3z4g6Z5bHJ0O9X3&ust=1627846440512000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKjJxuqMqfECFQAAAAAdAAAAABAD',
        name: 'DeerHack 2028',
        date: '2021-08-01',
        location: 'New York',
        description: 'This is event 1'
    },
    {
        id: 2,
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eventbrite.com%2Fd%2Fny--new-york%2Fevents%2F&psig=AOvVaw1Xz3W5R3z4g6Z5bHJ0O9X3&ust=1627846440512000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKjJxuqMqfECFQAAAAAdAAAAABAD',
        name: 'Being Human',
        date: '2021-08-02',
        location: 'New York',
        description: 'This is event 2'
    },
    {
        id: 3,
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eventbrite.com%2Fd%2Fny--new-york%2Fevents%2F&psig=AOvVaw1Xz3W5R3z4g6Z5bHJ0O9X3&ust=1627846440512000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKjJxuqMqfECFQAAAAAdAAAAABAD',
        name: 'Mero Hackathon',
        date: '2021-08-03',
        location: 'New York',
        description: 'This is event 3'
    },

]

export default dummyData;