import { Seller } from "./SellerTypes";

 export interface Product{
    id?:number;
    title:string;
    description:string;
    mrpPrice:number;
    sellingPrice:number;
    discountPercent:number;
    quantity:number;
    color:string;
    images:string[];
    numRating?:number;
    category?:Category;
    seller?:Seller;
    createdAt?:Date;
    sizes:string
}

interface Category{
    id?:number;
    name:string;
    categoryId:string;
    parentCategory?:Category;
    level:number;

}