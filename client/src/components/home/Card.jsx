import image1 from "../../assets/images/3.png";
import image2 from "../../assets/images/4.png";
import image3 from "../../assets/images/7.png";
import image4 from "../../assets/images/5.png";

const Card = () => {
  const cards = [
    { id: 1, image: image1, title: "El color Púrpura", genre: "Drama" },
    { id: 2, image: image2, title: "El color Púrpura", genre: "Suspenso" },
    { id: 3, image: image3, title: "El color Púrpura", genre: "Drama" },
    { id: 4, image: image4, title: "El color Púrpura", genre: "Terror" },
  ];

  return (
    <div className="flex space-x-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white/80 pb-4 rounded w-[290px] flex-shrink-0"
        >
          <div className="rounded-lg overflow-hidden h-auto">
            <span className="bg-white/80">Nuevo lanzamiento</span>
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={card.image}
            />
          </div>
          <h2 className="font-normal title-font text-base text-primary-800 mt-2 pl-2">
            {card.title}
          </h2>
          <h2 className="text-lg font-medium title-font mt-2 text-primary-800 pl-2">
            Género: {card.genre}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
