import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/legacy/image';

export function ImageCarousel({ images }: { images: string[] }) {
  return (
    <div className='flex gap-5 flex-col md:bg-gray-100 md:p-10 rounded-md items-center'>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          { images.map((image, key) => (
            <CarouselItem key={key}>
              <div className='md:p-[150px] p-[100px] relative border rounded-md'>
                <div className='w-full h-full'>
                  <Image
                    src={image}
                    alt={'Imagen ' + key}
                    layout={'fill'}
                    objectFit={'cover'}
                    className='rounded-md'
                  ></Image>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className='w-full flex gap-3 justify-items-start md:justify-center pl-1 pr-1 md:pb-0 pb-2 overflow-x-auto'>
        { images.map((image, key) => (
          <div key={key} className='p-[30px] relative border rounded-md'>
            <div className='w-full h-full'>
              <Image
                src={image}
                alt={'Imagen ' + key}
                layout={'fill'}
                objectFit={'cover'}
                className='rounded-md'
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
