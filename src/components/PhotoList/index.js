import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: "Budget Tracker",
      category: "portfolio",
      description:
        "Use this application as a budget tracker for your expenses and savings. Add and Subtract funds from your savings and use this to log amounts. Github link: https://github.com/SipG789/plutus. Deployed Link: https://rocky-forest-03738.herokuapp.com/",
    },
    {
      name: "Food Festival",
      category: "portfolio",
      description:
        "This application is a website for a Food Festival event where users can learn about the event, view the schedule, and buy tickets for the event. Gihub link: https://github.com/SipG789/food-festival",
    },
    {
      name: "Hestia",
      category: "portfolio",
      description:
        "Use this application to check the weather in any city and in addition you can look up a recipe to best suit the temperature. This website allows users to view the weather and look up recipes. Github link: https://github.com/SipG789/hestia Deployed link: https://sipg789.github.io/hestia/recipes.html ",
    },
    {
      name: "Note Taker",
      category: "portfolio",
      description:
        "This application helps users organize thoughts and keep track of tasks. Github link: https://github.com/SipG789/hermes. Deployed site: https://sheltered-reef-72388.herokuapp.com/notes",
    },
    {
      name: "Taskinator",
      category: "portfolio",
      description:
        "This application uses the kanban style method to manage and improve work. Github link: https://github.com/SipG789/taskinator. Deployed: https://sipg789.github.io/taskinator/ ",
    },
    {
      name: "Zookeepr",
      category: "portfolio",
      description:
        "This application catalogs zoo animals and their zookeepers. Perfect for a small company. Github link: https://github.com/SipG789/zookeepr.",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}{" "}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
