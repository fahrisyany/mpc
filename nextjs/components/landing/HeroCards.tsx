'use client';

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Card 1 */}
      <div className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <img
          src="/ARMORY_DECK_DASH_DISPLAY.original.png"
          alt="user avatar"
        />
      </div>

      {/* Card 2 */}
      <div className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <img
          src="/en_ad_origins_jarl_productshot.original.png"
          alt="user avatar"
        />
      </div>
    </div>
  );
};
