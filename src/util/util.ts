export type GenreType =  
  | "Action"  
  | "Adventure"  
  | "Role-Playing"  
  | "Shooter"  
  | "Fighting"  
  | "Strategy"  
  | "Sports"  
  | "Racing"  
  | "Survival"  
  | "Simulation";

export interface IGame {
    id: string;
    name: string;
    releaseDate: Date;
    genre: GenreType;
    score: number;
    lowestPrice: number;
    img: string;
}
export const defaultGame: IGame = {
    id: '',
    name: '',
    releaseDate: new Date(),
    genre: "Action",
    score: 0.0,
    lowestPrice: 0,
    img: ''
}
export interface IAddress {
    zip: number;
    city: string;
    street: string;
    num: number;//Házszám
    info: string;
}
export const defaultAddress: IAddress = {
    zip:0,
    city: '',
    street: '',
    num: 0,
    info: ''
}
export interface IItem {
    game: IGame;
    count: number;
}
export const defaultItem: IItem = {
    game: defaultGame,
    count: 0
}
export interface IStore {
    id: string;
    name: string;
    address: IAddress;
    inventory: IItem[];
}
export const defaultStore: IStore = {
    id: '',
    name: '',
    address: defaultAddress,
    inventory: []
}

export const defaultGames: IGame[] = [
    {
      id: "1",
      name: "The Legend of Zelda: Breath of the Wild",
      releaseDate: new Date("2017-03-03"),
      genre: "Adventure",
      score: 9.8,
      lowestPrice: 49.99,
      img: "https://example.com/botw.jpg",
    },
    {
      id: "2",
      name: "Elden Ring",
      releaseDate: new Date("2022-02-25"),
      genre: "Role-Playing",
      score: 9.7,
      lowestPrice: 59.99,
      img: "https://example.com/elden-ring.jpg",
    },
    {
      id: "3",
      name: "Call of Duty: Modern Warfare III",
      releaseDate: new Date("2023-11-10"),
      genre: "Shooter",
      score: 8.5,
      lowestPrice: 69.99,
      img: "https://example.com/mw3.jpg",
    },
    {
      id: "4",
      name: "Street Fighter 6",
      releaseDate: new Date("2023-06-02"),
      genre: "Fighting",
      score: 9.0,
      lowestPrice: 59.99,
      img: "https://example.com/street-fighter-6.jpg",
    },
    {
      id: "5",
      name: "Civilization VI",
      releaseDate: new Date("2016-10-21"),
      genre: "Strategy",
      score: 9.2,
      lowestPrice: 14.99,
      img: "https://example.com/civ6.jpg",
    },
    {
      id: "6",
      name: "FIFA 24",
      releaseDate: new Date("2023-09-29"),
      genre: "Sports",
      score: 7.8,
      lowestPrice: 59.99,
      img: "https://example.com/fifa24.jpg",
    },
    {
      id: "7",
      name: "Gran Turismo 7",
      releaseDate: new Date("2022-03-04"),
      genre: "Racing",
      score: 8.9,
      lowestPrice: 49.99,
      img: "https://example.com/gt7.jpg",
    },
    {
      id: "8",
      name: "Minecraft",
      releaseDate: new Date("2011-11-18"),
      genre: "Survival",
      score: 9.5,
      lowestPrice: 26.95,
      img: "https://example.com/minecraft.jpg",
    },
    {
      id: "9",
      name: "The Sims 4",
      releaseDate: new Date("2014-09-02"),
      genre: "Simulation",
      score: 8.0,
      lowestPrice: 19.99,
      img: "https://example.com/sims4.jpg",
    },
    {
      id: "10",
      name: "Red Dead Redemption 2",
      releaseDate: new Date("2018-10-26"),
      genre: "Action",
      score: 9.8,
      lowestPrice: 29.99,
      img: "https://example.com/rdr2.jpg",
    },
    {
      id: "11",
      name: "Super Smash Bros. Ultimate",
      releaseDate: new Date("2018-12-07"),
      genre: "Fighting",
      score: 9.6,
      lowestPrice: 49.99,
      img: "https://example.com/ssbu.jpg",
    },
    {
      id: "12",
      name: "Halo Infinite",
      releaseDate: new Date("2021-12-08"),
      genre: "Shooter",
      score: 8.7,
      lowestPrice: 39.99,
      img: "https://example.com/halo-infinite.jpg",
    },
    {
      id: "13",
      name: "God of War Ragnarök",
      releaseDate: new Date("2022-11-09"),
      genre: "Action",
      score: 9.6,
      lowestPrice: 59.99,
      img: "https://example.com/gow-ragnarok.jpg",
    },
    {
      id: "14",
      name: "Forza Horizon 5",
      releaseDate: new Date("2021-11-09"),
      genre: "Racing",
      score: 9.4,
      lowestPrice: 39.99,
      img: "https://example.com/forza-horizon-5.jpg",
    },
    {
      id: "15",
      name: "Baldur's Gate 3",
      releaseDate: new Date("2023-08-03"),
      genre: "Role-Playing",
      score: 9.9,
      lowestPrice: 59.99,
      img: "https://example.com/bg3.jpg",
    },
  ];
  
export const defaultStores: IStore[] = [
    {
      id: "1",
      name: "Game Haven",
      address: {
        zip: 10001,
        city: "New York",
        street: "5th Avenue",
        num: 123,
        info: "Near Central Park",
      },
      inventory: [
        { game: defaultGames[0], count: 10 },
        { game: defaultGames[3], count: 5 },
        { game: defaultGames[7], count: 8 },
      ],
    },
    {
      id: "2",
      name: "Pixel Paradise",
      address: {
        zip: 90001,
        city: "Los Angeles",
        street: "Sunset Boulevard",
        num: 456,
        info: "Opposite Hollywood Walk of Fame",
      },
      inventory: [
        { game: defaultGames[1], count: 6 },
        { game: defaultGames[5], count: 3 },
        { game: defaultGames[12], count: 9 },
      ],
    },
    {
      id: "3",
      name: "Next-Gen Games",
      address: {
        zip: 60601,
        city: "Chicago",
        street: "Michigan Avenue",
        num: 789,
        info: "Inside Magnificent Mile Mall",
      },
      inventory: [
        { game: defaultGames[2], count: 4 },
        { game: defaultGames[10], count: 7 },
        { game: defaultGames[14], count: 2 },
      ],
    },
    {
      id: "4",
      name: "Retro Replay",
      address: {
        zip: 73301,
        city: "Austin",
        street: "Congress Avenue",
        num: 321,
        info: "Next to the Texas Capitol",
      },
      inventory: [
        { game: defaultGames[4], count: 8 },
        { game: defaultGames[6], count: 6 },
        { game: defaultGames[9], count: 5 },
      ],
    },
    {
      id: "5",
      name: "Elite Gamers",
      address: {
        zip: 98101,
        city: "Seattle",
        street: "Pike Street",
        num: 654,
        info: "Near Pike Place Market",
      },
      inventory: [
        { game: defaultGames[8], count: 10 },
        { game: defaultGames[11], count: 3 },
        { game: defaultGames[13], count: 4 },
      ],
    },
  ];
  