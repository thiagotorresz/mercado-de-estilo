export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  freeShipping: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Camiseta Básica Premium Algodão",
    price: 49.90,
    originalPrice: 79.90,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "Roupas",
    description: "Camiseta de algodão premium, confortável e durável",
    rating: 4.8,
    reviews: 1250,
    freeShipping: true,
    discount: 38
  },
  {
    id: 2,
    name: "Calça Jeans Slim Fit Masculina",
    price: 129.90,
    originalPrice: 189.90,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    category: "Roupas",
    description: "Calça jeans slim fit com elastano para maior conforto",
    rating: 4.6,
    reviews: 890,
    freeShipping: true,
    discount: 32
  },
  {
    id: 3,
    name: "Vestido Floral Verão",
    price: 89.90,
    originalPrice: 149.90,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
    category: "Roupas",
    description: "Vestido leve e elegante para o verão",
    rating: 4.9,
    reviews: 2100,
    freeShipping: true,
    discount: 40
  },
  {
    id: 4,
    name: "Jaqueta Corta-Vento Esportiva",
    price: 159.90,
    originalPrice: 219.90,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
    category: "Roupas",
    description: "Jaqueta impermeável para atividades ao ar livre",
    rating: 4.7,
    reviews: 567,
    freeShipping: true,
    discount: 27
  },
  {
    id: 5,
    name: "Tênis Running Profissional",
    price: 299.90,
    originalPrice: 449.90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "Calçados",
    description: "Tênis de corrida com amortecimento premium",
    rating: 4.9,
    reviews: 3400,
    freeShipping: true,
    discount: 33
  },
  {
    id: 6,
    name: "Moletom Oversized Unissex",
    price: 119.90,
    originalPrice: 179.90,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    category: "Roupas",
    description: "Moletom confortável com capuz e bolso canguru",
    rating: 4.5,
    reviews: 780,
    freeShipping: true,
    discount: 33
  },
  {
    id: 7,
    name: "Panela Elétrica Multifuncional 5L",
    price: 249.90,
    originalPrice: 399.90,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400",
    category: "Utensílios",
    description: "Panela elétrica com 12 funções programáveis",
    rating: 4.8,
    reviews: 4500,
    freeShipping: true,
    discount: 38
  },
  {
    id: 8,
    name: "Conjunto de Facas Profissionais",
    price: 189.90,
    originalPrice: 299.90,
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400",
    category: "Utensílios",
    description: "Kit com 6 facas de aço inox com cepo",
    rating: 4.7,
    reviews: 1890,
    freeShipping: true,
    discount: 37
  },
  {
    id: 9,
    name: "Liquidificador Power Max 1200W",
    price: 179.90,
    originalPrice: 279.90,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400",
    category: "Utensílios",
    description: "Liquidificador potente com 12 velocidades",
    rating: 4.6,
    reviews: 2340,
    freeShipping: true,
    discount: 36
  },
  {
    id: 10,
    name: "Air Fryer Digital 4.5L",
    price: 349.90,
    originalPrice: 549.90,
    image: "https://images.unsplash.com/photo-1626509653291-18d9a934b9db?w=400",
    category: "Utensílios",
    description: "Fritadeira sem óleo com painel touch",
    rating: 4.9,
    reviews: 8900,
    freeShipping: true,
    discount: 36
  },
  {
    id: 11,
    name: "Bermuda Cargo Masculina",
    price: 79.90,
    originalPrice: 119.90,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400",
    category: "Roupas",
    description: "Bermuda cargo com múltiplos bolsos",
    rating: 4.4,
    reviews: 456,
    freeShipping: false,
    discount: 33
  },
  {
    id: 12,
    name: "Blusa Tricô Feminina",
    price: 99.90,
    originalPrice: 159.90,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    category: "Roupas",
    description: "Blusa de tricô macia e elegante",
    rating: 4.7,
    reviews: 670,
    freeShipping: true,
    discount: 38
  },
  {
    id: 13,
    name: "Cafeteira Expresso Automática",
    price: 899.90,
    originalPrice: 1299.90,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400",
    category: "Utensílios",
    description: "Cafeteira com moedor integrado e vaporizador",
    rating: 4.8,
    reviews: 1230,
    freeShipping: true,
    discount: 31
  },
  {
    id: 14,
    name: "Jogo de Panelas Antiaderente 5 Peças",
    price: 299.90,
    originalPrice: 449.90,
    image: "https://images.unsplash.com/photo-1584990347449-a6ae8bed8ce9?w=400",
    category: "Utensílios",
    description: "Conjunto de panelas com revestimento cerâmico",
    rating: 4.6,
    reviews: 3450,
    freeShipping: true,
    discount: 33
  },
  {
    id: 15,
    name: "Sandália Rasteira Confort",
    price: 69.90,
    originalPrice: 99.90,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400",
    category: "Calçados",
    description: "Sandália confortável para o dia a dia",
    rating: 4.5,
    reviews: 890,
    freeShipping: false,
    discount: 30
  },
  {
    id: 16,
    name: "Processador de Alimentos 800W",
    price: 249.90,
    originalPrice: 379.90,
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=400",
    category: "Utensílios",
    description: "Processador multifuncional com 3 discos",
    rating: 4.7,
    reviews: 1560,
    freeShipping: true,
    discount: 34
  },
  {
    id: 17,
    name: "Camisa Social Slim",
    price: 89.90,
    originalPrice: 139.90,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    category: "Roupas",
    description: "Camisa social elegante para ocasiões formais",
    rating: 4.6,
    reviews: 980,
    freeShipping: true,
    discount: 36
  },
  {
    id: 18,
    name: "Batedeira Planetária 500W",
    price: 399.90,
    originalPrice: 599.90,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    category: "Utensílios",
    description: "Batedeira com tigela em inox de 4L",
    rating: 4.9,
    reviews: 2780,
    freeShipping: true,
    discount: 33
  },
  {
    id: 19,
    name: "Saia Midi Plissada",
    price: 79.90,
    originalPrice: 129.90,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400",
    category: "Roupas",
    description: "Saia midi elegante com pregas",
    rating: 4.7,
    reviews: 540,
    freeShipping: true,
    discount: 38
  },
  {
    id: 20,
    name: "Conjunto de Talheres 24 Peças",
    price: 149.90,
    originalPrice: 229.90,
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400",
    category: "Utensílios",
    description: "Faqueiro completo em aço inox polido",
    rating: 4.5,
    reviews: 1120,
    freeShipping: true,
    discount: 35
  }
];

export const categories = ["Todos", "Roupas", "Calçados", "Utensílios"];
