'use client';

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <img
      src="/logo_rosetta_full.original.png"
      alt="ross-logo"
    />,
    name: 'ross'
  },
  {
    icon: <img
      src="/logo_mst.original.png"
      alt="mst-logo"
    />,
    name: 'mst'
  },
  {
    icon: <img
      src="/heavy_hitters_logo.original.png"
      alt="hvy-logo"
    />,
    name: 'hvy'
  },
  {
    icon: <img
      src="/bright_lights_logo.png"
      alt="bl-logo"
    />,
    name: 'bl'
  },
  {
    icon: <img
      src="/dusk_till_dawn_logo.original.png"
      alt="dtd-logo"
    />,
    name: 'dtd'
  },
  {
    icon: <img
      src="/outsiders23012.original.png"
      alt="out-logo"
    />,
    name: 'out'
  },
  {
    icon: <img
      src="/dynasty_logo_re.original.png"
      alt="dyn-logo"
    />,
    name: 'dyn'
  },
  {
    icon: <img
      src="/uprising.png"
      alt="upr-logo"
    />,
    name: 'upr'
  },
  {
    icon: <img
      src="/everferst.png"
      alt="evr-logo"
    />,
    name: 'evr'
  },
  {
    icon: <img
      src="/toa_logo.original.png"
      alt="toa-logo"
    />,
    name: 'toa'
  },
  {
    icon: <img
      src="/monarch.png"
      alt="mon-logo"
    />,
    name: 'mon'
  },
  {
    icon: <img
      src="/cru_logo_stacked.original.png"
      alt="cru-logo"
    />,
    name: 'cru'
  },
  {
    icon: <img
      src="/ARC.original.png"
      alt="arc-logo"
    />,
    name: 'arc'
  },
  {
    icon: <img
      src="/wtr_logo.original.png"
      alt="wtr-logo"
    />,
    name: 'wtr'
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8">
        Avaliable Set
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <div className="w-[320px]">{icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
