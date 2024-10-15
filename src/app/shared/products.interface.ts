export interface Product {
    id: string,
    name: string,
    price: number,
    category: Category,
    description: string,
    inStock: boolean,
    rating: Rating,
    selected: boolean,
}

export enum Category {
    Category1 = 'Category1',
    Category2 = 'Category2',
    Category3 = 'Category3',
}

export enum Rating {
    Bad = 1,
    NotBad = 2,
    Good = 3
}