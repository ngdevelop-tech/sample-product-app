// Product model class
export interface Product {
    product_id: number;
    title: string;
    image_url: string;
    desc: string;
    price: number;
    rating: number;
    location_available: [string];
    category: [string];
    review: [Review];
    in_stock: boolean;
    is_deleted: boolean;
}

// Review model class
export interface Review {
    id: number;
    review_desc: string;
}
