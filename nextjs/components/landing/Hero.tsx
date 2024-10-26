'use client';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { HeroCards } from './HeroCards';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

export const Hero = () => {
  const router = useRouter();
  const handleShop = async () => {
    return router.push('/shop');
  };
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              The best place
            </span>{' '}
            for your
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r  from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Flesh and Blood
            </span>{' '}
            needs
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Momotaro premium collection provides various FABTCG products with a competitive price,
          Feel free to browse and shop as much as you want!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            className="w-full md:w-1/3"
            onClick={handleShop}
          >
            Shop
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: 'outline'
            })}`}
          >
            Get your updates
            <EnvelopeClosedIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
