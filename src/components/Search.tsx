'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Search(props: { small?: boolean, className?: string  }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>();

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '')
  }, [searchParams]);

  function submitSearch() {
    router.push('/items?search=' + searchQuery);
  }

  return (
    <div className={cn('relative w-full', props.className)}>
      <Input
        className={props.className || ''}
        spellCheck={false}
        placeholder={'Buscar en Decshop'}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            return submitSearch();
          }
        }}
      />

      <Button
        className='absolute top-0 right-0 z-10 rounded-tl-none rounded-bl-none'
        type="submit"
        onClick={submitSearch}
      >
        Buscar
      </Button>
    </div>
  );
}
