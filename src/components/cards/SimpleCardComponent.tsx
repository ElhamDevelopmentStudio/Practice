const SimpleCardComponent = () => {
  return (
    <div className="bg-gray-500 shadow-lg rounded-lg max-w-sm">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src="https://via.placeholder.com/150"
        alt="Sample Image"
      />
      <div className="mt-4 p-6">
        <h2 className="text-lg font-bold text-gray-900">Card Title</h2>
        <p className="text-white mt-2">
          This is a description for the card. It's brief but informative.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SimpleCardComponent;
