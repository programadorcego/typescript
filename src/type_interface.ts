// Interface permite sobrescrever outra interface
interface Product {
    id: number;
    name: string;
}

interface Product {
    price: number;
}

// Type permite customizar tipos primitivos
type StringType = string;