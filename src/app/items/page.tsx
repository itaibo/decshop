import * as Database from '@/infrastructure/database';
import { ProductTile } from '@/components/ProductTile';

type Params = {
  searchParams: {
    search?: string;
  };
};

export async function generateMetadata({ searchParams }: Params) {
  const searchQuery = searchParams.search;

  return {
    title: (searchQuery ? `Decshop: ${searchQuery}` : 'Decshop - Todos los artículos'),
  };
}

export default function ItemsPage({ searchParams }: Params) {
  const searchQuery = searchParams?.search?.trim();
  const results = Database.getProducts(searchQuery);
  const resultNumber = results.length;

  return (
    <div>
      { searchQuery && resultNumber > 0 &&
        <div className='text-lg pb-5'>
          Resultados para <span className='font-bold'>{searchQuery}</span> ({resultNumber})
        </div>
      }

      { !searchQuery &&
        <div className='text-lg pb-5'>
          Todos los productos
        </div>
      }

      { resultNumber > 0 &&
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            results.map((product, key) => <ProductTile key={key} product={product} />)
          }
        </div>
      }

      { resultNumber === 0 &&
        <div className='text-center text-lg mt-10'>
          <div>
            No se ha encontrado nada para <span className='font-bold'>{searchQuery}</span>
          </div>
        </div>
      }
    </div>
  );
}
