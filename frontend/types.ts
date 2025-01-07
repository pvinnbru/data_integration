export type DiveSite = {
    id: number;
    title: string;
    categories: DiveSiteCategory[];
    animals: DiveSiteAnimal[];
    rating: number;
    image_url: string;
    latitude: number;
    longitude: number;
    description?: string;
    region?: string;
};

export type DiveSiteCategory = {
    id: number;
    name: string;
}

export type DiveSiteAnimal = {
    id:number;
    name: string;
    image_url?: string;
}