import german from "./assets/german.png";
import gold from "./assets/gold.png";
import lab from "./assets/lab.png";
import poodle from "./assets/poodle.png";

const dogData = {
  dogs: [
    {
      name: "Bella",
      breed: "Labrador Retriever",
      age: 5,
      src: lab,
      facts: [
        "Bella loves playing fetch.",
        "Bella enjoys swimming in the lake.",
        "Bella is trained to perform tricks.",
      ],
    },
    {
      name: "Charlie",
      breed: "Golden Retriever",
      age: 3,
      src: gold,
      facts: [
        "Charlie has a gentle and friendly temperament.",
        "Charlie is great with kids.",
        "Charlie loves going on long walks.",
      ],
    },
    {
      name: "Lucy",
      breed: "Poodle",
      age: 4,
      src: poodle,
      facts: [
        "Lucy is highly intelligent and easy to train.",
        "Lucy's coat requires regular grooming.",
        "Lucy is a good choice for people with allergies.",
      ],
    },
    {
      name: "Max",
      breed: "German Shepherd",
      age: 4,
      src: german,
      facts: [
        "Max is an excellent guard dog.",
        "Max is highly protective of its family.",
        "Max requires regular exercise and mental stimulation.",
      ],
    },
  ],
};

export default dogData;
