import { useState } from "react";
import ListItem from "./ListItem";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ItemCategory = ({ cards, index, showIdx, setShowIdx }) => {
  const cardData = cards?.card?.card; // safe optional chaining
  const itemCards = cardData?.itemCards || []; // fallback to empty array
  const [show, setShow] = useState(false);
  return (
    <>
      {/* Header */}
      <div
        className="mb-1 text-gray-800 flex justify-between cursor-pointer shadow-xl p-4 rounded-2xl"
        onClick={() => {
          showIdx == index ? setShowIdx(-1) : setShowIdx(index);
        }}
      >
        <span className="text-2xl font-bold">{cardData?.title}</span>
        <span className="flex justify-center items-center gap-1">
          ({itemCards.length}) &nbsp;{" "}
          {show ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Accordion Body */}
      <div
        className={`overflow-hidden transition-all duration-800 ease-in-out ${
          showIdx === index ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {itemCards.map((item, idx) => (
          <ListItem key={item?.card?.info?.id || idx} itemCard={item} />
        ))}
      </div>
    </>
  );
};

export default ItemCategory;
