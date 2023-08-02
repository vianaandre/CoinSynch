import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { ContainerCryptos } from "./styles";

export const Cryptos: React.FC = () => {
	return (
		<ContainerCryptos>
			<Swiper
				spaceBetween={18}
				slidesPerView={2}
				loop={true}
				speed={5000}
				grabCursor
				freeMode
				centeredSlides
				autoplay={{
					delay: 1,
					disableOnInteraction: false
				}}
				modules={[FreeMode, Autoplay]}
				className="cryptos"
			>
				<SwiperSlide>
					<p className="label regular text_base">
						<strong>BIT</strong>
                        R$ 23,62
						<strong className="indicator positive">+7,082</strong>
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<p className="label regular text_base">
						<strong>DOG</strong>
                        R$ 23,62
						<strong className="indicator negative">-5,230</strong>
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<p className="label regular text_base">
						<strong>ETH</strong>
                        R$ 23,62
						<strong className="indicator negative">-1,023</strong>
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<p className="label regular text_base">
						<strong>ETH</strong>
                        R$ 23,62
						<strong className="indicator negative">-1,023</strong>
					</p>
				</SwiperSlide>
			</Swiper>
		</ContainerCryptos>
	);
};