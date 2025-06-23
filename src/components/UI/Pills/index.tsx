const Pill = ({ content }: { content: string | number }) => {
  return (
    <div className="px-2 bg-white rounded-xl">
      <span className="text-base text-light-brown">{content}</span>
    </div>
  );
};

export default Pill;
