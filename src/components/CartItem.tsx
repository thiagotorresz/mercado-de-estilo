import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';

interface CartItemProps {
  item: Product & { quantity: number };
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="flex gap-4 p-4 bg-card rounded-lg border border-border animate-fade-in">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md"
      />

      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-card-foreground line-clamp-2 mb-1">
          {item.name}
        </h3>
        
        <p className="text-lg font-bold text-price mb-2">
          {formatPrice(item.price)}
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 ml-auto text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => removeFromCart(item.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm text-muted-foreground">Subtotal</p>
        <p className="font-bold text-card-foreground">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
    </div>
  );
}
