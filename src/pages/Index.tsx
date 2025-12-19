import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap } from 'lucide-react';

const Index = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'Todos';
  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    let result = products;

    if (categoryFilter && categoryFilter !== 'Todos' && categoryFilter !== 'Ofertas') {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (categoryFilter === 'Ofertas') {
      result = result.filter(p => p.discount && p.discount >= 30);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [categoryFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Hero Banner */}
        {!searchQuery && categoryFilter === 'Todos' && (
          <div className="mb-8 rounded-xl bg-gradient-to-r from-primary to-primary/80 p-6 md:p-10 text-primary-foreground animate-fade-in">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Ofertas Imperdíveis
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
                Até 40% OFF em milhares de produtos!
              </h1>
              <p className="text-primary-foreground/80 mb-4">
                Aproveite os melhores preços em roupas, calçados e utensílios para sua casa.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="font-bold"
              >
                <Zap className="h-4 w-4 mr-2" />
                Ver Ofertas
              </Button>
            </div>
          </div>
        )}

        {/* Section Title */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              {searchQuery ? (
                <>Resultados para "{searchQuery}"</>
              ) : categoryFilter !== 'Todos' ? (
                <>{categoryFilter}</>
              ) : (
                <>
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Produtos em Destaque
                </>
              )}
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {filteredProducts.length} produtos encontrados
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum produto encontrado.
            </p>
            <Button
              variant="link"
              onClick={() => window.history.back()}
              className="mt-2"
            >
              Voltar para todos os produtos
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 MercadoTop. Todos os direitos reservados.</p>
          <p className="mt-1">
            O melhor marketplace para suas compras online.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
