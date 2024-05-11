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
        imageUrl: 'https://source.unsplash.com/250x180/2',
        name: 'DeerHack 2028',
        date: '2021-08-01',
        location: 'New York',
        description: 'This is event 1'
    },
    {
        id: 2,
        imageUrl: 'https://source.unsplash.com/250x180/3',
        name: 'Being Human',
        date: '2021-08-02',
        location: 'New York',
        description: 'This is event 2'
    },
    {
        id: 3,
        imageUrl: 'https://source.unsplash.com/250x180/1',
        name: 'Mero Hackathon',
        date: '2021-08-03',
        location: 'New York',
        description: 'This is event 3'
    },

]

export default dummyData;