export interface IProduct {
    posterImageUrl: { public_id: string, imageUrl: string, altText:string};
    hoverImageUrl?: { public_id: string, imageUrl: string, altText:string };
    id: string;
    name: string;
    description: string;
    shortDescription?: string;
    salePrice: number;
    purchasePrice: number;
    category: string;
    imageUrl: Array<{ imageIndex: number, public_id: string, imageUrl: string, id: string, altText:string }>;
    discountPrice: number;
    colors: Array<{ colorName: string; id: string }>;
    modelDetails: Array<{ name: string; detail: string; id: string }>;
    spacification: Array<{ specsDetails: string; id: string }>;
    createdAt: string;
    starRating: string;
    reviews: string;
    code: string;
    totalStockQuantity?: number;
    additionalInformation?: Array<{ name: string; value: string }>;
    isFeatured?: boolean;
    isNew?: boolean;
    isSpecialOffer?: boolean;
    isBestSeller?: boolean;
    isHeroSlider?: boolean;
}
