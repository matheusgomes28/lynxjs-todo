import "./index.css";
import type { Picture } from "./pictures/furniturePictures.tsx";
import LikeIcon from "./likeIcon.jsx";

export default function LikeImageCard(props: { picture: Picture }) {
  const { picture } = props;

  return (
    <view className="picture-wrapper">
      <image
        style={{ width: "100%", aspectRatio: picture.width / picture.height }}
        src={picture.src}
      />
      <LikeIcon />
    </view>
  );
}