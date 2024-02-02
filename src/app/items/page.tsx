import * as Database from '@/infrastructure/database';
import { ProductTile } from '@/components/ProductTile';
import { categoryToHuman } from '@/lib/utils';

type Params = {
  searchParams: {
    search?: string;
  };
};

type ResultNumberPerCategory = {
  [category: string]: number;
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

  // Calculate the number of results per category
  const resultNumberPerCategory = results.reduce((results, product) => {
    const category = categoryToHuman(product.category);
    if (!results[category]) results[category] = 0;

    results[category] += 1;

    return results;
  }, {} as ResultNumberPerCategory);

  return (
    <div>
      { searchQuery && resultNumber > 0 &&
        <div className='pb-5'>
          <div className='text-lg'>
            Resultados para <span className='font-bold'>{searchQuery}</span> ({resultNumber})
          </div>

          { Object.keys(resultNumberPerCategory).length > 1 &&
            <div className='md:flex gap-2 grid grid-cols-2 mt-1'>
              { Object.entries(resultNumberPerCategory).map((category, key) => (
                <div className='text-xs text-slate-500'>{category[0]} ({category[1]})</div>
              ))}
            </div>
          }
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
            results.map((product, key) => <ProductTile key={key} index={key} product={product} />)
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
