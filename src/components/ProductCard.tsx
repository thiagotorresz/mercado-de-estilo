import { Heart, Star, Truck, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const favorite = isFavorite(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Produto adicionado ao carrinho!', {
      description: product.name,
      duration: 2000,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    toast.success(
      favorite ? 'Removido dos favoritos' : 'Adicionado aos favoritos!',
      {
        duration: 2000,
      }
    );
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Card className="group overflow-hidden hover-lift border-border/50 hover:border-primary/30 bg-card">
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-success text-success-foreground px-2 py-1 rounded-md text-xs font-bold">
            -{product.discount}%
          </div>
        )}

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleFavorite}
          className={`absolute top-2 right-2 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all ${
            favorite ? 'text-destructive' : 'text-muted-foreground'
          }`}
        >
          <Heart
            className={`h-4 w-4 ${favorite ? 'fill-current' : ''}`}
          />
        </Button>

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full h-9 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </div>
      </div>

      <CardContent className="p-3">
        {/* Free Shipping */}
        {product.freeShipping && (
          <div className="flex items-center gap-1 text-success text-xs font-medium mb-1">
            <Truck className="h-3 w-3" />
            Frete grátis
          </div>
        )}

        {/* Product Name */}
        <h3 className="text-sm font-medium text-card-foreground line-clamp-2 mb-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="space-y-0.5">
          {product.originalPrice && (
            <p className="text-xs text-price-old line-through">
              {formatPrice(product.originalPrice)}
            </p>
          )}
          <p className="text-lg font-bold text-price">
            {formatPrice(product.price)}
          </p>
          <p className="text-xs text-muted-foreground">
            em até 12x de {formatPrice(product.price / 12)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
