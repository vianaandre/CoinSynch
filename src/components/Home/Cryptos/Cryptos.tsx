import React from "react";
import Image from "next/image";

import { ContainerCryptos } from "./styles";
import { Container } from "components/UI/Container";
import Crypto from "common/assets/cryptos/crypto.png";
import { Button } from "components/UI/Button";

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
			</Container>
		</ContainerCryptos>
	);
};