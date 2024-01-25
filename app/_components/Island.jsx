const Island = ({ children }) => {
  return (
    <div className="bg-yellow-900 p-4 pt-0 rounded-lg shadow-lg">
      <div className="bg-lime-600 p-8 rounded flex gap-8">
        <div className="bg-gray-600 p-4 w-[200px] rounded flex text-black" />
        {children}
      </div>
    </div>
  );
};

export default Island;
