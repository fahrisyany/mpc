'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'Putra Ahmad Dhani Pratikto',
    userName: '@fufufafa',
    comment: 'MPC paling anjaaaaaay.'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Adiguna Sodikhin',
    userName: '@visionary_ID',
    comment:
      'Semoga MPC terus berkembang kedepannya amiin.'
  },

  {
    image: 'https://github.com/shadcn.png',
    name: 'Adzuf Surya',
    userName: '@newbie_shop',
    comment:
      'MPC selalu memberikan yang terbaik dimanapun dan kapan pun.'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Kipli',
    userName: '@thekips',
    comment:
      'MPC the best emang.'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Frederick Batara',
    userName: '@zephyr',
    comment:
      'Anzuuuy.'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Zsuryanuti Perdana',
    userName: '@zpk',
    comment:
      'Customer service fast respond dan pengiriman lumayan cepat, Mantaap.'
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Customer{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Reviews
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
