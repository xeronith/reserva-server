interface AvailableTime {
    time: number;
    period: number;
    fee: number;
}

interface Restaurant {
    image: string;
    location: [number, number];
    availableTimes: AvailableTime[];
}

interface Restaurants {
    [key: string]: Restaurant
}

interface Reservation {
    name: string;
    email: string;
    restaurant: string;
    time: number;
    period: number;
    fee: number;
}

interface Model {
    restaurants: Restaurants
    reservations: Reservation[]
}

const DefaultModel: Model = {
    restaurants: {
        "The clove clob": {
            image: '/restaurants/1.jpg',
            location: [51.512909, -0.118581],
            availableTimes: [
                { time: 17, period: 30, fee: 20 },
                { time: 19, period: 45, fee: 35 },
                { time: 20, period: 35, fee: 27 },
            ],
        },
        "City Social": {
            image: '/restaurants/2.jpg',
            location: [51.493518, -0.151712],
            availableTimes: [
                { time: 8, period: 20, fee: 18 },
                { time: 10, period: 5, fee: 9 },
            ],
        },
        "Spring Court": {
            image: '/restaurants/3.jpg',
            location: [51.501750, -0.095064],
            availableTimes: [
                { time: 21, period: 70, fee: 86 },
                { time: 23, period: 40, fee: 55 },
            ],
        },
    },
    reservations: [
        {
            name: "Meysam Mousavi",
            email: "meysam@mousavi.com",
            restaurant: "City Social",
            time: 10, period: 5, fee: 9
        },
        {
            name: "Meysam Mousavi",
            email: "meysam@mousavi.com",
            restaurant: "The clove clob",
            time: 20, period: 35, fee: 27
        },
        {
            name: "Meysam Mousavi",
            email: "meysam@mousavi.com",
            restaurant: "Spring Court",
            time: 23, period: 40, fee: 55,
        }
    ]
};

export { Model, DefaultModel };