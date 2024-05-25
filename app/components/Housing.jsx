import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import Caravane from "../images/caravane.png";
import Gîte from "../images/gîte.png";
import Tente from "../images/tente.png";

const housingTypes = [
  {
    image: Tente,
    title: "Camping au bord de l’étang",
    description: [
      "Si vous avez une tente à monter, vous pouvez venir des 11h (prévoir le pique-nique).",
      "Le lendemain matin n’hésitez pas à apporter ce qu’il vous faut pour prendre le petit-déjeuner tous ensemble.",
    ],
  },
  {
    image: Caravane,
    title: "Van, caravane et camping car",
    description: [
      "Pour les adeptes, vous pourrez trouver un petit coin sur place pour parker votre logement pour la nuit.",
    ],
  },
  {
    image: Gîte,
    title: "Les gites à proximité",
    content: [
      {
        title: "Charmante maison à colombage avec vue sur plan d’eau",
        capacity: "7+ pers",
        phone: "06 66 78 86 36",
        contact: "Vincent Henneckart",
      },
      {
        title: "Petit chalet centre St Viatre – petit budget",
        capacity: "4/5 pers",
        phone: "06 10 99 69 80",
        contact: "Christian Caillard",
      },
      {
        title: "Gite en pleine campagne en direction de Nouan",
        capacity: "6 pers",
        phone: "06 83 94 85 86",
        contact: "Christian Morin",
      },
      {
        title: "Chambres d’hôte centre St Viatre – joli site",
        capacity: "10 pers",
        phone: "06 81 34 58 37",
        contact: "Villepalay",
      },
      {
        title: "Haut lieu proche St Viatre",
        capacity: "15 pers",
        phone: "07 69 59 05 06",
        contact: "Gué de la terre",
      },
    ],
  },
];

const Housing = () => {
  return (
    <div className="flex flex-col gap-8">
      {housingTypes.map((housing) => (
        <div key={housing.title} className="flex flex-col items-center gap-4">
          {housing.image && (
            <Image
              src={housing.image}
              alt={housing.title}
              width={housing.imageWidth || 200}
              height={housing.imageHeight || 200}
              className="transition-transform hover:scale-105 hover:rotate-6 duration-700 ease-in-out"
            />
          )}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl underline">{housing.title}</h3>
            {housing.description && (
              <ul className="text-sm px-10 flex flex-col gap-2">
                {housing.description.map((descItem) => (
                  <li key={descItem}>{descItem}</li>
                ))}
              </ul>
            )}
            {housing.content && (
              <div className="flex flex-col justify-center w-full max-w-[600px] gap-4">
                {housing.content.map((gite) => (
                  <div key={gite.title} className="border rounded-lg p-4 gap-2">
                    <div className="flex justify-between items-center gap-4">
                      <h5 className="text-center font-bold">{gite.title}</h5>
                      <p className="bg-lightblue rounded-full px-2 text-sm text-center text-nowrap">
                        {gite.capacity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhoneCall className="text-md" />
                      <p>
                        {gite.contact} - {gite.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Housing;
