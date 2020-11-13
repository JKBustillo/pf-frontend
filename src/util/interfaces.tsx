export interface ITweetResume {
    _id: string,
    tweetId: string,
    name: string,
    username: string,
    createdAt: string,
    // polarizationRate: string,
    // politicalRate: string,
};

export interface ICluster {
    count: number,
    lcoation: ILocation,
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
    verified: boolean,
};

export interface IParams {
    user: string
};