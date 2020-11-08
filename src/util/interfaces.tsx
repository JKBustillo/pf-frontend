export interface ITweetResume {
    username: string,
    user: string,
    date: string,
    polarizationRate: string,
    politicalRate: string,
    profileLink: string,
    tweetLink: string,
};

export interface IUserResume {
    username: string,
    user: string,
    incidences: number,
    profileLink: string,
};

export interface IParams {
    user: string
};