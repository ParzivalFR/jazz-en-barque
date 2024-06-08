import BlueLeaf from "@/app/icons/blue-leaf.svg";
import ImgFish from "@/app/icons/fish.svg";
import Image from "next/image";
import { londrina } from "../fonts";

const FullHistory = () => {
  const details = [
    {
      image:
        "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879550/JEB/kclxxcu9bkazd65cj6vp.webp",
      style: "lg:flex-row",
      title: "Qui sommes-nous ?",
      alt: "Anne et Marc",
      content: [
        "Nous sommes Anne et Marc, amoureux de la nature, de musique et des moments conviviaux.",
        "Nous partageons beaucoup de valeurs, de passions et d’envies et nous sommes surtout animés par de multiples projets.",
      ],
    },
    {
      image:
        "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879551/JEB/etb97cqimernlhs3hxil.webp",
      style: "lg:flex-row-reverse",
      title: "Le lieu",
      alt: "Etang de la propriété",
      content: [
        "Il y a 6 ans, Anne a découvert un lieu magique en Sologne, un lieu jalonné d’histoires familiales pour Marc qui y a passé quelques étés et week end depuis son enfance.",
        "Cette propriété à l’abandon, achetée par ses parents il y a presque 50 ans, a été transformée et Marc en connaît maintenant par cœur toutes les parcelles de bois et d’étang.",
        "Ce site, qui se trouve dans une zone classée NATURA 2000, abrite maintenant quelques milliers d’abeilles qui y butinent sous la bienveillance de Anne et Marc.",
        "Ce superbe étang entouré d’une magnifique nature est un lieu inspirant qui a donné naissance à une expérience musicale tout à fait inédite.",
      ],
    },
    {
      image:
        "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717881016/festival_idddek.jpg",
      style: "lg:flex-row",
      title: "Le festival",
      alt: "Festival Jazz En Barque 2021",
      content: [
        "Désireux de partager ces émotions artistiques et bucoliques, nous avons décidé de lancer une première édition en 2021, post-covid.",
        "Le succès de cette première édition nous a convaincu de renouveler l’expérience et de nouveau, rassembler nos proches pour encore plus de fun pour cette seconde édition.",
      ],
    },
  ];

  return (
    <section className="md:relative wave-background flex flex-col items-center gap-6 w-full h-auto bg-background pt-10 px-4">
      <div className="relative md:static">
        <h1
          className={`${londrina.className} text-darkblue text-center text-4xl sm:text-6xl `}
        >
          Notre histoire
        </h1>
        <Image
          src={BlueLeaf}
          alt="Feuille bleue"
          title="Feuille décoratrice bleue en forme de vague"
          width={80}
          height={80}
          className="absolute -top-8 -right-24 sm:-right-40 md:right-12 md:top-6 sm:w-24 md:w-20"
        />
      </div>
      {details.map((detail, index) => (
        <div
          key={index}
          className={`flex flex-col ${detail.style} items-center justify-between w-full sm:w-4/5 md:w-3/5 lg:w-4/5 gap-4 lg:gap-14 mt-10 p-4 `}
        >
          <Image
            src={detail.image}
            alt={detail.alt}
            title={detail.title}
            width={800}
            height={800}
            className="max-w-[350px] border border-black rounded-full object-cover aspect-square "
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-center lg:text-start text-darkblue">
              {detail.title}
            </h2>
            <div className="flex flex-col text-justify gap-4">
              {Array.isArray(detail.content) ? (
                detail.content.map((content, index) => (
                  <p key={index} className="text-darkblue">
                    {content}
                  </p>
                ))
              ) : (
                <p>{detail.content}</p>
              )}
            </div>
          </div>
        </div>
      ))}
      <Image
        src={ImgFish}
        alt="Poisson Orange"
        title="Poisson orange qui sourit"
        width={140}
        height={140}
        className="my-10 md:w-56"
      />
    </section>
  );
};

export default FullHistory;
