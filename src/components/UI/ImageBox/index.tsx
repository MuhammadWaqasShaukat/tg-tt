import { ImageBoxProps } from "@/types/ImageBox.t";

const ImageBox: React.FC<ImageBoxProps> = ({ className, imageURL, alt }) => {
  const placeholderImage = "/images/pickpocket.png";

  return (
    <div
      className={`image-box w-[10.14vw] aspect-square rounded-lg bg-white ${className}`}
    >
      <img
        src={imageURL ?? placeholderImage}
        alt={alt}
        className="overflow-hidden rounded-lg"
      />
    </div>
  );
};

export default ImageBox;
