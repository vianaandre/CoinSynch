import React from "react";
import { ContainerMenu } from "./styles";
import Link from "next/link";

export const Menu: React.FC = () => {
	return (
		<ContainerMenu>
			<ul>
				<li>
					<Link href="#about">
						<p className="label regular text_base">About us</p>
					</Link>
				</li>
				<li>
					<Link href="#top-cryptos">
						<p className="label regular text_base">Top Cryptos</p>
					</Link>
				</li>
			</ul>
		</ContainerMenu>
	);
};