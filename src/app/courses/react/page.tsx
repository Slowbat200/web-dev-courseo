'use client'

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from '@/components/ui/carousel';

const ReactIntroduction = () => {

  //Plugin for Autoplay where every 2 seconds the card moves to the left
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className='container flex justify-center items-center h-screen'>
      <Carousel
        plugins={[plugin.current]}
        className='w-full max-w-xs'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
{/* The code `Array.from({length: 5}).map((_, index)` is creating an array of length 5 using
`Array.from({length: 5})` and then mapping over each element of this array. The `_` in the map
function represents the current element of the array which is not being used in this case, and
`index` represents the index of the current element being processed. */}
          {Array.from({length: 5}).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ReactIntroduction;
