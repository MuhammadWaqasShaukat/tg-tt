const Loader = ({ progress }: { progress: number }) => {
  return (
    <div className=" bg-brown/30 max-h-9 h-9 w-full rounded-full flex flex-col justify-center items-start p-1">
      <div
        className="h-full bg-yellow transition-all duration-300 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default Loader;
