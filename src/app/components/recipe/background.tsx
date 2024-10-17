import Image from "next/image";
import recipeBg from "/public/images/recipe-bg.avif";

export default function Background() {
	return (
		<Image
			className="non-draggable-img"
			alt="Recipe"
			src={recipeBg}
			quality={50}
			fill
			priority
			sizes="100vw"
			style={{
				objectFit: "cover",
				opacity: "0.4",
				zIndex: -1,
			}}
		/>
	);
}
