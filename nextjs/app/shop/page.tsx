import { createClient } from '@/utils/supabase/server';
import { Navbar } from '@/components/landing/Navbar';
import { ProductPage } from '@/components/misc/ProductPage';

export default async function ShopPage() {
    const supabase = createClient();

    const {
        data: { user }
    } = await supabase.auth.getUser();

    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navbar user={user} />
            <ProductPage />
        </div>
    );
}
