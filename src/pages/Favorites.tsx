import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Favorites = () => {
  const { favorites } = useCart();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Nenhum favorito ainda
            </h1>
            <p className="text-muted-foreground mb-6">
              Adicione produtos aos favoritos para acessá-los facilmente
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
        <Link to="/">
          <Button variant="ghost" className="mb-4 text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Heart className="h-6 w-6 text-destructive fill-destructive" />
          <h1 className="text-2xl font-bold text-foreground">
            Meus Favoritos
          </h1>
          <span className="text-muted-foreground">
            ({favorites.length} {favorites.length === 1 ? 'produto' : 'produtos'})
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favorites.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Favorites;
