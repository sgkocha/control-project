export type Product = {
    id: number
    name: string
    image: string
    price: number 
}

const productsArray: Product[] = [
    {
        id:1,
        name:"iPhone X",
        price:500,
        image:"/images/iphone-purple.jpeg"
    },
    {
        id:2,
        name:"iPhone 13 Pro",
        price:1000,
        image:"/images/iphone-blue.jpeg"
    },
    {
        id:3,
        name:"iPhone XS",
        price:800,
        image:"/images/iphone-gold.jpeg"
    },
    {
        id:4,
        name:"iPhone 14 Pro Max",
    
        price:200,
        image:"/images/iphone-green.jpeg"
    }
]

export default productsArray