import { useParams } from "react-router-dom";

const DogProfile = ({ dogData }) => {
  const { name } = useParams();
  const dog = dogData.find((dog) => dog.name === name);
  console.log(name);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex w-5/6">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4">{dog.name}</h2>
        <p className="text-gray-600">Age: {dog.age}</p>
        <h3 className="text-lg font-semibold mt-4">Facts:</h3>
        <ul className="list-disc list-inside mt-2">
          {dog.facts.map((fact, index) => (
            <li key={index} className="text-gray-700">
              {fact}
            </li>
          ))}
        </ul>
      </div>
      <img src={dog.src} alt={dog.breed} className="w-1/4 h-1/4 rounded" />
    </div>
  );
};

export default DogProfile;
