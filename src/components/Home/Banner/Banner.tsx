import React from "react";
import Image from "next/image";

import { ContainerBanner } from "./styles";
import { Infos } from "./Infos";
import { Container } from "components/UI/Container";
import { Carousel } from "./Carousel";
import Effect from "common/assets/banner/effect.png";

export const Banner: React.FC = () => {
	return (
		<ContainerBanner>
			<Container>
				<Infos />
				<Carousel />
			</Container>
			<Image 
				src={Effect.src}
				width={Effect.width}
				height={Effect.height}
				alt="Efeito"
				className="image_effect"
			/>
		</ContainerBanner>
	);
};