export interface ITweetResume {
    username: string,
    user: string,
    date: string,
    polarizationRate: string,
    politicalRate: string,
    profileLink: string,
    tweetLink: string,
};

export interface ILocation {
    latitude: number,
    longitude: number,
};

export interface IUserResume {
    _id: string,
    name: string,
    username: string,
    counter: number,
};

export interface IParams {
    user: string
};