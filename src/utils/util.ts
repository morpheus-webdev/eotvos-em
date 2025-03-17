export interface IAlbum {
    id: string;
    img: string;
    name: string;
    releaseDate: Date;
    performer: string;
    isHearted: boolean;
}

export const defaultAlbum: IAlbum = {
    id: '',
    img: '',
    name: '',
    releaseDate: new Date(),
    performer: '',
    isHearted: false
}