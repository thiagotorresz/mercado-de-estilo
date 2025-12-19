import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Truck } from 'lucide-react';
import { Header } from '@/components/Header';
import { CartItem } from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const shipping = cartTotal >= 199 ? 0 : 19.90;
  const total = cartTotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Seu carrinho está vazio
            </h1>
            <p className="text-muted-foreground mb-6">
              Adicione produtos para continuar comprando
            </p>
            <Link to="/">
              <Button size="lg" className="font-semibold">
                Explorar Produtos
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4 text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continuar comprando
        </Button>

        <h1 className="text-2xl font-bold text-foreground mb-6">
          Carrinho de Compras
        </h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
              <h2 className="font-bold text-lg text-card-foreground mb-4">
                Resumo do Pedido
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Subtotal ({items.length} {items.length === 1 ? 'item' : 'itens'})
                  </span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frete</span>
                  <span className={`font-medium ${shipping === 0 ? 'text-success' : ''}`}>
                    {shipping === 0 ? 'Grátis' : formatPrice(shipping)}
                  </span>
                </div>

                {shipping > 0 && (
                  <div className="bg-secondary/50 rounded-md p-3 flex items-start gap-2">
                    <Truck className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Frete grátis em compras acima de R$ 199,00. Faltam{' '}
                      <strong>{formatPrice(199 - cartTotal)}</strong>
                    </p>
                  </div>
                )}

                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-card-foreground">Total</span>
                    <span className="font-bold text-price">{formatPrice(total)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    ou em até 12x de {formatPrice(total / 12)}
                  </p>
                </div>
              </div>

              <Link to="/checkout">
                <Button className="w-full mt-6 h-12 font-bold text-base">
                  Finalizar Compra
                </Button>
              </Link>

              <Button
                variant="ghost"
                className="w-full mt-2 text-muted-foreground"
                onClick={clearCart}
              >
                Limpar carrinho
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
