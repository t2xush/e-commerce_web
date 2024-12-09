




export interface HomeData{
    id?:number;
    grid:HomeCategory[];
    shopByCategories:HomeCategory[];
    electricCategories:HomeCategory[];
    // deals:Deal[]
    dealcCategories:HomeCategory[];
}


export interface HomeCategory{
    id?:number;
    categoryId:string;
    section?:string;
    name?:string;
    image:string;
    parentCategoryId?:string;
   
}