'use client';
import { Button } from '@/components/ui/button';
import { ShoppingCart, X, Minus, Plus, Trash } from 'lucide-react';
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

export const CartSlide = () => {
    const [cart, setCart] = useState<ProductProps[]>([])
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    const totalCost = cart.reduce((acc, item: ProductProps) => acc + item.price * item.quantity, 0)
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
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
    const removeItem = (id: string) => {
        setCart(prevItems =>
            prevItems.filter((item: ProductProps) => item.id !== id)
        )
    }
    return (
        <>
            <Button onClick={toggleCart} variant="ghost">
                <ShoppingCart className="h-5 w-5 mr-2" />
            </Button>
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
                                        <span>Total: IDR {(cartItem.price * cartItem.quantity)}</span>
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
                                        {cartItem.quantity === 0 ?
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => removeItem(cartItem.id)}
                                            >
                                                <Trash className="h-4 w-4" />
                                            </Button> : null}

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
