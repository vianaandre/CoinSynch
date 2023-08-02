import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { ContainerAbout } from "./styles";
import { CardAbout } from "./CardAbout";
import { Container } from "components/UI/Container";
import { Chart, Computer, Crypto, Currency } from "components/UI/icons";
import { theme } from "common/styles/theme";
import { Button } from "components/UI/Button";
import { useHome } from "common/hooks/useHome";

export const About: React.FC = () => {
	const { handleOpenModalSignUp } = useHome();
	
	return (
		<ContainerAbout>
			<Container>
				<div className="left">
					<ul>
						<CardAbout 
							icon={<Currency size={64} color={theme.COLORS.PRIMARY[500]} />}
							subtitle="For your company"
							title="Crypto Solutions"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
						/>
						<CardAbout 
							icon={<Crypto size={64} color={theme.COLORS.PRIMARY[500]} />}
							subtitle="For your company"
							title="Crypto Solutions"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
						/>
					</ul>
					<ul className="spacing_left">
						<CardAbout 
							icon={<Chart size={64} color={theme.COLORS.PRIMARY[500]} />}
							subtitle="For your company"
							title="Crypto Solutions"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
						/>
						<CardAbout 
							icon={<Computer size={64} color={theme.COLORS.PRIMARY[500]} />}
							subtitle="For your company"
							title="Crypto Solutions"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
						/>
					</ul>
				</div>
				<div className="right">
					<h5 className="header bold text_primary">Lorem ipsum </h5>
					<h2 className="header text_base bold">Lorem ipsum </h2>
					<p className="text text_base regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>

					<Button variant="primary" type="button" onClick={handleOpenModalSignUp}>
						Sign up now
					</Button>
				</div>
			</Container>
			<div className="cards_carousel">
				<Swiper
					slidesPerView={1}
					centeredSlides={true}
					spaceBetween={16}
					pagination={{
						type: "fraction",
					}}
					className="cards"
				>
					<SwiperSlide>
						<CardAbout 
							icon={<Chart size={64} color={theme.COLORS.PRIMARY[500]} />}
							subtitle="For your company"
							title="Crypto Solutions"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardAbout 
							icon={<Crypto size={64} color={theme.COLORS.PRIMARY[500]} />}
							subtitle="For your company"
							title="Crypto Solutions"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardAbout 
							icon={<Chart size={64} color={theme.COLORS.PRIMARY[500]} />}
							subtitle="For your company"
							title="Crypto Solutions"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardAbout 
							icon={<Computer size={64} color={theme.COLORS.PRIMARY[500]} />}
							subtitle="For your company"
							title="Crypto Solutions"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</ContainerAbout>
	);
};