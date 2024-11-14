export type DiveSite = {
    id: number;
    title: string;
    categories: DiveSiteCategory[];
    rating: number;
    image_url: string;
    latitude: number;
    longitude: number;
};

export type DiveSiteCategory = {
    id: number;
    name: string;
}