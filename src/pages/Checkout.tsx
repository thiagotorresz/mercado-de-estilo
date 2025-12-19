import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield, Check, MapPin } from 'lucide-react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const shipping = cartTotal >= 199 ? 0 : 19.90;
  const total = cartTotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    toast.success('Pedido realizado com sucesso!', {
      description: 'Você receberá um e-mail com os detalhes.',
      duration: 5000,
    });
    
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Carrinho vazio
            </h1>
            <p className="text-muted-foreground mb-6">
              Adicione produtos ao carrinho para continuar
            </p>
            <Link to="/">
              <Button>Voltar às compras</Button>
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
        <Link to="/cart">
          <Button variant="ghost" className="mb-4 text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao carrinho
          </Button>
        </Link>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { num: 1, label: 'Endereço' },
            { num: 2, label: 'Pagamento' },
            { num: 3, label: 'Confirmação' },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  step >= s.num
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground'
                }`}
              >
                {step > s.num ? <Check className="h-4 w-4" /> : s.num}
              </div>
              <span
                className={`ml-2 text-sm hidden sm:inline ${
                  step >= s.num ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}
              >
                {s.label}
              </span>
              {i < 2 && (
                <div
                  className={`w-12 h-0.5 mx-3 ${
                    step > s.num ? 'bg-primary' : 'bg-secondary'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-6 animate-fade-in">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-bold text-card-foreground">
                      Endereço de Entrega
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP</Label>
                      <Input id="cep" placeholder="00000-000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="street">Rua</Label>
                      <Input id="street" placeholder="Nome da rua" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="number">Número</Label>
                      <Input id="number" placeholder="123" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="complement">Complemento</Label>
                      <Input id="complement" placeholder="Apto, Bloco..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="neighborhood">Bairro</Label>
                      <Input id="neighborhood" placeholder="Nome do bairro" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" placeholder="Nome da cidade" required />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-bold text-card-foreground">
                      Dados do Cartão
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Nome no Cartão</Label>
                      <Input id="cardName" placeholder="Como está no cartão" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Número do Cartão</Label>
                      <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Validade</Label>
                        <Input id="expiry" placeholder="MM/AA" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 p-3 bg-secondary/50 rounded-md">
                    <Shield className="h-4 w-4 text-success" />
                    <span className="text-xs text-muted-foreground">
                      Seus dados estão protegidos com criptografia SSL
                    </span>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Check className="h-5 w-5 text-success" />
                    <h2 className="text-lg font-bold text-card-foreground">
                      Confirme seu Pedido
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {items.map(item => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 bg-secondary/30 rounded-md"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-card-foreground line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Qtd: {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium text-card-foreground">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mt-4 p-3 bg-success/10 rounded-md border border-success/20">
                    <Truck className="h-4 w-4 text-success" />
                    <span className="text-sm text-success font-medium">
                      {shipping === 0
                        ? 'Frete grátis!'
                        : `Frete: ${formatPrice(shipping)}`}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Voltar
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1 font-bold"
                  disabled={isProcessing}
                >
                  {isProcessing
                    ? 'Processando...'
                    : step === 3
                    ? `Pagar ${formatPrice(total)}`
                    : 'Continuar'}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
              <h2 className="font-bold text-lg text-card-foreground mb-4">
                Resumo
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Produtos</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frete</span>
                  <span className={`font-medium ${shipping === 0 ? 'text-success' : ''}`}>
                    {shipping === 0 ? 'Grátis' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-price">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
