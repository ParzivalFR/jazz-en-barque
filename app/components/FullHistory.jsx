import ImgFish from "@/app/icons/fish.svg";
import ImgCouple from "@/app/images/couple.webp";
import ImgFest from "@/app/images/fest.webp";
import ImgPlace from "@/app/images/place.webp";
import Image from "next/image";
import BlueLeaf from "@/app/icons/blue-leaf.svg";

const FullHistory = () => {
  const details = [
    {
      image: ImgCouple,
      style: "lg:flex-row",
      title: "Qui sommes-nous ?",
      content: [
        "Nous sommes Anne et Marc, amoureux de la nature, de musique et des moments conviviaux.",
        "Notre rencontre a été un coup de foudre, une évidence. Nous partageons les mêmes valeurs, les mêmes passions et les mêmes envies.",
        "Nous avons décidé de nous unir pour la vie, de fonder une famille et de vivre ensemble, main dans la main, pour le meilleur et pour le pire.",
      ],
    },
    {
      image: ImgPlace,
      style: "lg:flex-row-reverse",
      title: "Le lieu",
      content: [
        "Il y a 5 ans, Anne a découvert un lieu magique en Sologne, un lieu emprunt de sentiments. Marc y habitait depuis quelques années.",
        "Cet endroit qu’il connait par cœur, est rempli de souvenirs d’enfance puisque celle propriété avait été acquise par ses parents et c’est ici qu’il a passé la plupart de ces étés étant jeune.",
        "Isolés, entourés de nature, aux abords d’une superbe étang, ce lieu inspirant a donné naissance à une expérience musicale tout à fait inédite.",
      ],
    },
    {
      image: ImgFest,
      style: "lg:flex-row",
      title: "Le festival",
      content: [
        "Désireux de partager ces émotions artistiques et bucoliques, Marc et moi avons décidé de lancer une première édition en 2021, post-covid.",
        "Le succès de cette première édition nous a convaincu de renouveler l’expérience et de nouveau, rassembler nos proches pour encore plus de fun pour cette seconde édition.",
      ],
    },
  ];

  return (
    <section className="md:relative wave-background flex flex-col items-center gap-6 w-full h-auto bg-background pt-10 px-4">
      <div className="relative md:static">
        <h1 className="text-darkblue text-center text-4xl sm:text-6xl lg:text-8xl">
          Notre histoire
        </h1>
        <Image
          src={BlueLeaf}
          width={80}
          height={80}
          className="absolute -top-8 -right-24 sm:-right-40 md:right-12 md:top-6 sm:w-24 md:w-32"
        />
      </div>
      {details.map((detail, index) => (
        <div
          key={index}
          className={`flex flex-col ${detail.style} items-center justify-between w-full sm:w-4/5 md:w-3/5 lg:w-4/5 gap-4 lg:gap-14 mt-10 p-4 `}
        >
          <Image
            src={detail.image}
            width={500}
            height={500}
            className="max-w-[300px] border border-black rounded-full object-cover aspect-square "
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-center lg:text-start text-darkblue">
              {detail.title}
            </h2>
            <div className="flex flex-col gap-4">
              {Array.isArray(detail.content) ? (
                detail.content.map((content, index) => (
                  <p key={index} className="">
                    · {content}
                  </p>
                ))
              ) : (
                <p>{detail.content}</p>
              )}
            </div>
          </div>
        </div>
      ))}
      <Image src={ImgFish} width={140} height={140} className="md:w-56" />
    </section>
  );
};

export default FullHistory;
