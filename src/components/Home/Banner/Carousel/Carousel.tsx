import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { FreeMode } from "swiper/modules";

import { ContainerCarousel } from "./styles";
import Carousel1 from "common/assets/banner/carousel-1.png";
import Carousel2 from "common/assets/banner/carousel-2.png";
import Carousel3 from "common/assets/banner/carousel-3.png";
import { Currency, Chart, Computer, Crypto } from "components/UI/icons";
import { theme } from "common/styles/theme";

export const Carousel: React.FC = () => {
	return (
		<ContainerCarousel>
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={202}
				className="carousel_image"
				freeMode
				modules={[FreeMode]}
			>
				<SwiperSlide>
					<div>
						<div className="icon currency">
							<Currency
								color={theme.COLORS.PRIMARY[500]}
								size={64}
							/>
						</div>
						<div className="icon chart">
							<Chart
								color={theme.COLORS.PRIMARY[500]}
								size={64}
							/>
						</div>
						<div className="bg"></div>
						<Image 
							src={Carousel1.src}
							alt="Imagem 1"
							height={Carousel1.height}
							width={Carousel1.width}
							className="image"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<div className="icon computer">
							<Computer 
								color={theme.COLORS.PRIMARY[500]}
								size={64}
							/>
						</div>
						<div className="icon crypto">
							<Crypto 
								color={theme.COLORS.PRIMARY[500]}
								size={64}
							/>
						</div>
						<div className="bg_2"></div>
						<Image 
							src={Carousel2.src}
							alt="Imagem 1"
							height={Carousel2.height}
							width={Carousel2.width}
							className="image"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<div className="icon currency_2">
							<Currency
								color={theme.COLORS.PRIMARY[500]}
								size={64}
							/>
						</div>
						<div className="icon chart_2">
							<Chart
								color={theme.COLORS.PRIMARY[500]}
								size={64}
							/>
						</div>
						<div className="bg_3"></div>
						<Image 
							src={Carousel3.src}
							alt="Imagem 1"
							height={Carousel3.height}
							width={Carousel3.width}
							className="image"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</ContainerCarousel>
	);
};