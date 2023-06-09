import { Link } from "react-router-dom";

const Dog = ({ dogData }) => {
  return (
    <div className="absolute top-0 right-80">
      <div className="flex">
        {dogData.map((dog) => (
          <div key={dog.name} className="m-4 p-2 bg-sky-800 text-white rounded">
            <Link to={`/dog/${dog.name}`}>{dog.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dog;
