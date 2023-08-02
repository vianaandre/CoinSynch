import React from "react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";

import { ContainerCryptos } from "./styles";
import { Container } from "components/UI/Container";
import Crypto from "common/assets/cryptos/crypto.png";
import { Button } from "components/UI/Button";
import { ArrowDown } from "components/UI/icons";
import { theme } from "common/styles/theme";

export const Cryptos: React.FC = () => {
	return (
		<ContainerCryptos>
			<Container>
				<h3 className="header text_base bold">Top Cryptos</h3>

				<div className="list_cryptos">
					<ol className="header">
						<li className="code">
							<p className="label text_secondary regular">#</p>     
						</li> 
						<li className="name">
							<p className="label text_secondary regular">Crypto</p>  
						</li>
						<li className="price">
							<p className="label text_secondary regular">Price</p>
						</li>
						<li className="change">
							<p className="label text_secondary regular">Change</p>
						</li> 
						<li className="trade">
							<p className="label text_secondary regular">Trade</p>
						</li> 
					</ol>
					<div className="list">
						<ul>
							<li className="code">
								<p className="label text_secondary regular">01</p>
							</li> 
							<li className="name">
								<Image 
									src={Crypto.src}
									width={Crypto.width}
									height={Crypto.height}
									alt="Crypto"
								/>
								<p className="text text_base regular">
                                Bitcoin <strong className="text_secondary regular text">BTC</strong>
								</p>
							</li>
							<li className="price">
								<p className="text regular text_base">US$ 25.499,52</p>
							</li>
							<li className="change positive text regular">
                                +5,65%
							</li> 
							<li className="trade">
								<button type="button" className="label regular">Buy</button>
							</li> 
						</ul>
						<ul>
							<li className="code">
								<p className="label text_secondary regular">02</p>
							</li> 
							<li className="name">
								<Image 
									src={Crypto.src}
									width={Crypto.width}
									height={Crypto.height}
									alt="Crypto"
								/>
								<p className="text text_base regular">
                                Bitcoin <strong className="text_secondary regular text">BTC</strong>
								</p>
							</li>
							<li className="price">
								<p className="text regular text_base">US$ 25.499,52</p>
							</li>
							<li className="change negative text regular">
                                +5,65%
							</li> 
							<li className="trade">
								<button type="button" className="label regular">Buy</button>
							</li> 
						</ul>
						<ul>
							<li className="code">
								<p className="label text_secondary regular">03</p>
							</li> 
							<li className="name">
								<Image 
									src={Crypto.src}
									width={Crypto.width}
									height={Crypto.height}
									alt="Crypto"
								/>
								<p className="text text_base regular">
                                Bitcoin <strong className="text_secondary regular text">BTC</strong>
								</p>
							</li>
							<li className="price">
								<p className="text regular text_base">US$ 25.499,52</p>
							</li>
							<li className="change positive text regular">
                                +5,65%
							</li> 
							<li className="trade">
								<button type="button" className="label regular">Buy</button>
							</li> 
						</ul>

						<Button variant="secondary" type="button" className="text_primary view">
                            View more
                            +
						</Button>
					</div>
				</div>

				<div className="list_cryptos_mobile">
					<div className="header">
						<p className="label text_secondary regular">Crypto</p>
						<p className="label text_secondary regular">Trade</p>
					</div>
					<Accordion.Root type="single" defaultValue="item_1" className="accordion_crypto" collapsible>
						<Accordion.Item value="item_1" className="item">
							<Accordion.Trigger className="trigger">
								<div className="left">
									<Image 
										src={Crypto.src}
										width={Crypto.width}
										height={Crypto.height}
										alt="Crypto"
									/>
									<p className="text text_base regular">
                                Bitcoin <strong className="text_secondary regular text">BTC</strong>
									</p>
								</div>
								<button type="button">
									<ArrowDown 
										size={16}
										color={theme.COLORS.PRIMARY[300]}
									/>
								</button>
							</Accordion.Trigger>
							<Accordion.Content className="container_content">
								<div className="content">
									<div>
										<p className="label text_secondary regular">Price</p>
										<p className="text regular text_base">US$ 25.499,52</p>
									</div>
									<div>
										<p className="label text_secondary regular">Change</p>
										<p className="text regular positive text_base">+5,65%</p>
									</div>
								</div>
							</Accordion.Content>
						</Accordion.Item>
						<Accordion.Item value="item_2" className="item">
							<Accordion.Trigger className="trigger">
								<div className="left">
									<Image 
										src={Crypto.src}
										width={Crypto.width}
										height={Crypto.height}
										alt="Crypto"
									/>
									<p className="text text_base regular">
                                Bitcoin <strong className="text_secondary regular text">BTC</strong>
									</p>
								</div>
								<button type="button">
									<ArrowDown 
										size={16}
										color={theme.COLORS.PRIMARY[300]}
									/>
								</button>
							</Accordion.Trigger>
							<Accordion.Content className="container_content">
								<div className="content">
									<div>
										<p className="label text_secondary regular">Price</p>
										<p className="text regular text_base">US$ 25.499,52</p>
									</div>
									<div>
										<p className="label text_secondary regular">Change</p>
										<p className="text regular negative text_base">+5,65%</p>
									</div>
								</div>
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				</div>
			</Container>
		</ContainerCryptos>
	);
};