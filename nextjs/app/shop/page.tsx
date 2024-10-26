'use client';
import { Navbar } from '@/components/landing/Navbar';
import { User } from '@supabase/supabase-js';
import { ProductPage } from '@/components/misc/ProductPage';

export default function AccountPage({ user }: { user: User }) {
    
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navbar user={user} />
            <ProductPage />
        </div>
    );
}
