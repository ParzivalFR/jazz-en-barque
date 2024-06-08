import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import BigLeafBlue from "../icons/big-leaf-blue.svg";

const housingTypes = [
  {
    image:
      "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879547/JEB/qhl0wd1docfaf4tg4kfb.svg",
    title: "Camping au bord de l’étang",
    description: [
      "Si vous avez une tente à monter, vous pouvez venir des 11h (prévoir le pique-nique).",
      "Le lendemain matin n’hésitez pas à apporter ce qu’il vous faut pour prendre le petit-déjeuner tous ensemble.",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879549/JEB/u3s3xb1izuiyxthhshjd.svg",
    title: "Van, caravane et camping car",
    description: [
      "Pour les adeptes, vous pourrez trouver un petit coin sur place pour parker votre logement pour la nuit.",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879550/JEB/vyb8erjyjlxxkt4t5ihh.svg",
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
    <div className="relative w-full h-auto md:w-4/5 xl:w-8/12 flex flex-col gap-20 lg:gap-12">
      {housingTypes.map((housing, index) => (
        <div
          key={housing.title}
          className="w-full h-auto flex flex-col justify-between items-center gap-4 lg:flex-row"
        >
          {housing.image && (
            <Image
              src={housing.image}
              alt={housing.title + index}
              title={housing.title}
              width={200}
              height={200}
              className={`md:w-64 transition-transform hover:scale-105 hover:rotate-6 duration-700 ease-in-out`}
            />
          )}
          <div className="flex flex-col justify-center items-center gap-4 lg:max-w-[500px]">
            <div className="flex flex-col items-center lg:items-start md:justify-start gap-2 w-full">
              <h3 className="text-xl lg:text-3xl font-semibold">
                {housing.title}
              </h3>
              {housing.description && (
                <ul className="text-sm md:text-base text-center md:text-start flex flex-col gap-2">
                  {housing.description.map((descItem) => (
                    <li key={descItem}>· {descItem}</li>
                  ))}
                </ul>
              )}
            </div>
            {housing.content && (
              <div className="flex flex-col justify-center w-full  gap-4">
                {housing.content.map((gite) => (
                  <div key={gite.title}>
                    <div className="flex justify-between items-center gap-4">
                      <h5 className="text-start font-bold">{gite.title}</h5>
                      <span className="bg-[#88B1E1] rounded-full px-2 text-sm text-center text-nowrap">
                        {gite.capacity}
                      </span>
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
      <Image
        src={BigLeafBlue}
        width={80}
        height={80}
        alt="Feuille bleue"
        className="absolute -bottom-28 -left-6 sm:-bottom-12 lg:w-36 md:-left-28 md:w-40 lg:-left-36 xl:-left-72 xl:w-44 "
      />
    </div>
  );
};

export default Housing;
