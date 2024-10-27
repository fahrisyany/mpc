'use client';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardProductName,
  CardPriceTag
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

const features: ProductProps[] = [
  {
    id: '01',
    title: 'Runner Runner [HVY]',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/sample/card_1.jpg',
    price: 1200000,
    quantity: 3,
  },
  {
    id: '02',
    title: 'Command and Conquer [ARC]',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/sample/card_2.jpg',
    price: 99000,
    quantity: 1,
  },
];

const featureList: string[] = [
  'Marvel',
  'Majestics',
  'Rare',
  'Common',
  'Promo',
];

export const ProductPage = () => {
  const addToCart = (item: ProductProps) => {
    // setIsCartOpen(true)
  }

  return (
    <>
      <div id="features" className="container py-24 sm:py-32 space-y-8">
        <div className="flex flex-wrap md:justify-center gap-4">
          {featureList.map((feature: string) => (
            <div key={feature}>
              <Badge variant="secondary" className="text-sm">
                {feature}
              </Badge>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((item: ProductProps) => (
            <Card key={item.title}>
              <CardContent>
                <img
                  src={item.image}
                  alt="About feature"
                  className="w-[200px] lg:w-[300px] mx-auto py-4"
                />
                <CardProductName className='mb-2'>{item.title}</CardProductName>
                <CardPriceTag>IDR {item.price}</CardPriceTag>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => addToCart(item)}
                  className="w-full h-12 px-6 rounded-lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
