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
import { ShoppingCart, X, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Separator } from "@/components/ui/separator"

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
  const [cart, setCart] = useState<ProductProps[]>([])
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const totalCost = cart.reduce((acc, item: ProductProps) => acc + item.price * item.quantity, 0)
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  const addToCart = (item: ProductProps) => {
    setCart(oldArray => {
      const newItem: ProductProps = {
        ...item,
        quantity: 1,
      }
      return oldArray.reduce((acc: ProductProps[], oldItem) => {
        if (oldItem.id === item.id) {
          return [...acc, { ...oldItem, quantity: oldItem.quantity + 1 }]
        }
        return [...acc, oldItem]
      }, []).concat(
        oldArray.every(oldItem => oldItem.id.toLowerCase() !== item.id.toLowerCase()) ? [newItem] : []
      )
    });
    setIsCartOpen(true)
  }
  const updateQuantity = (id: string, increment: boolean) => {
    setCart(prevItems =>
      prevItems.map((item: ProductProps) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + (increment ? 1 : -1)) }
          : item
      )
    )
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
                <CardPriceTag>Rp {item.price}</CardPriceTag>
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
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background p-6 shadow-lg transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <Button variant="ghost" size="icon" onClick={toggleCart}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="space-y-4">
          {cart.map((cartItem: ProductProps) => (
            <div key={cartItem.id}>
              <div className="flex items-center gap-4">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  width={64}
                  height={64}
                  className="rounded-md"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
                <div className="flex-1">
                  <h3 className="font-medium">{cartItem.title}</h3>
                  <div className="flex h-5 items-center space-x-4 text-sm mb-2">
                    <span>Qty: {cartItem.quantity}</span>
                    <Separator orientation="vertical" />
                    <span>Total: ${(cartItem.price * cartItem.quantity)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(cartItem.id, false)}
                      disabled={cartItem.quantity === 0}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-l font-bold min-w-[2ch] text-center">
                      {cartItem.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(cartItem.id, true)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Total:</span>
          <span className="font-medium">${totalCost}</span>
        </div>
        <div className="mt-6">
          <Button onClick={toggleCart} variant="outline" className="w-full">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};
