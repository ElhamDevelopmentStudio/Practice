const RelativePositioning = () => {
  return (
    <div>
      <div className="relative top-2 left-4">
        This element is shifted down 2 and to the right 4 units.
      </div>

      <div className="flex items-center">
        <div className="relative top-1">
          <img src="avatar.jpg" className="w-12 h-12 rounded-full" />
        </div>
        <div className="ml-4">
          <h2 className="font-bold">User Name</h2>
          <p className="text-gray-500">Active 5 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default RelativePositioning;
