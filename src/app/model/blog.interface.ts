import { Category } from "./category.interface";
import { Ingredient } from "./ingredient.interface";
import { Tag } from "./tag.interface";
import { User } from "./user.interface";

export interface BlogDto {
    _id?: string;
    title?: string;
    slug?: string;
    description?: string;
    body?: string;
    createdAt?: Date;
    updatedAt?: Date;
    likes?: number;
    authorId?: User;
    headerImage?: string;
    publishedDate?: Date;
    isPublished?: boolean;
    steps?: [string];
    tags?: [Tag];
    timeForCooking?: number;
    category?: Category;
    ingredients?: {ingredient: Ingredient; quantity: number, measure: string}[];
    servings?: number;
    isRecipieAccepted?: boolean;
}

export interface BlogEntriesPageable {
    docs: BlogDto[];
    totalDocs: number,
    limit: number,
    totalPages: number,
    page: number,
    pagingCounter: number,
    hasPrevPage: boolean,
    hasNextPage: boolean,
    prevPage: number
}
