import Caravane from "../images/caravane.png";
import Gîte from "../images/gîte.png";
import Tente from "../images/tente.png";
import Housing from "./Housing";
import Spacing from "./Spacing";

const UsefulInfos = () => {
  const logements = [
    {
      icon: Gîte,
      title: "Les gites à proximité",
      description: [
        {
          text: "Pour ceux qui souhaitent dormir dans un lit douillet, il y a des gîtes à proximité du lieu de la fête.",
          contact: "Vincent Henneckart - 06 66 78 86 36",
        },
        {
          text: "N’hésitez pas à nous contacter pour plus d’informations.",
        },
        {
          text: "Nous vous donnerons les coordonnées des gîtes les plus proches.",
        },
        {
          text: "Attention, les places sont limitées, pensez à réserver à l’avance.",
        },
        {
          text: "Pour ceux qui souhaitent dormir dans un lit douillet, il y a des gîtes à proximité du lieu de la fête.",
        },
      ],
    },
    {
      icon: Caravane,
      title: "Van, caravanne et camping car",
      description:
        "Pour les adeptes, vous pourrez trouver un petit coin sur place pour parker votre logement pour la nuit",
    },
    {
      icon: Tente,
      title: "Camping au bord de l’étang",
      description: [
        {
          text: "Si vous avez une tente à monter, vous pouvez venir des 11h (prévoir le pique-nique).",
        },
        {
          text: "Le lendemain matin n’hésitez pas à apporter ce qu’il vous faut pour prendre le petit-déjeuner tous ensemble.",
        },
      ],
    },
  ];

  return (
    <section className="wave-background bg-background flex flex-col">
      <div className="flex flex-col gap-16 px-4">
        <h1 className="text-darkblue text-4xl text-center">Infos pratiques</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Se loger</h2>
          <p className="text-sm">
            Pour pouvoir profiter de la fête en toute sérénité, voici les
            solutions d’hebergement qui s’offrent à vous pour éviter un trajet
            en pleine nuit après la fête.
          </p>
        </div>
      </div>
      <Spacing size={50} />
      <Housing />
    </section>
  );
};

export default UsefulInfos;
