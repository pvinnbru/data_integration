export type DiveSite = {
    id: number;
    title: string;
    diveTypes: string[];
    rating: number;
    image: string;
    location:{
        latitude: number;
        longitude: number;
    }
    };