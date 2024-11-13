export type DiveSite = {
    id: number;
    title: string;
    types: Type[];
    rating: number;
    image_url: string;
    latitude: number;
    longitude: number;
};

export type Type = {
    id: number;
    type_name: string;
}