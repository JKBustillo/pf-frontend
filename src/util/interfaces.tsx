export interface ITweetResume {
    _id: string,
    tweetId: string,
    name: string,
    username: string,
    createdAt: string,
    sentimentScore: {
        negative: number,
    }
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
    counter: ICounter,
    verified: boolean,
};

export interface ITweetDetails {
    tweet: ITweetDetailsResume,
    user: IUserResume,
};

export interface ITweetDetailsResume {
    createdAt: string,
    political: boolean,
    text: string,
    sentimentScore: {
        negative: number,
    }
};

export interface ICounter {
    political: number,
    hate: number,
};

export interface IParams {
    user: string,
    tweetid: string,
};

export interface IGraph {
    _id: string,
    counter: number,
};