import { ImageBoxProps } from "@/types/ImageBox.t";

const ImageBox: React.FC<ImageBoxProps> = ({ className, imageURL, alt , imageSize}) => {
  const placeholderImage = "/images/avatars/pickpocket-face.svg";

  return (
    <div
      className={`image-box w-[10.14vw] aspect-square rounded-lg bg-white ${className}`}
    >
      <img
        src={imageURL ?? placeholderImage}
        alt={alt}
        className={`max-w-20 overflow-hidden rounded-lg h-full w-full ${imageSize}`}
      />
    </div>
  );
};

export default ImageBox;
