const Island = ({ children }) => {
  return (
    <div className="bg-[#f6d896] p-4 pt-0 rounded-lg shadow-lg">
      <div className="bg-[#61a53f] p-8 rounded flex gap-8">{children}</div>
    </div>
  );
};

export default Island;
