export type DiveSite = {
    id: number;
    title: string;
    categories: DiveSiteCategory[];
    animals: Animal[];
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
    image_url: string;
}

export type DiveSiteRating = {
    "1":number;
    "2":number;
    "3":number;
    "4":number;
    "5":number;
}

export type Animal = {
    id:number;
    name: string;
    image_url: string;
}