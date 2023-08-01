import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { ContainerNewsletter } from "./styles";
import Effect from "common/assets/footer/effect.png";
import { Container } from "components/UI/Container";
import { FormProvider } from "react-hook-form";
import { Input } from "components/UI/Form/Input";
import { Button } from "components/UI/Button";

export const Newsletter: React.FC = () => {
	const methods = useForm();

	return (
		<ContainerNewsletter>
			<Image 
				src={Effect.src}
				height={Effect.height}
				width={Effect.width}
				alt="Efeito visual"
				className="image_effect"
			/>
			<Container>
				<div className="left">
					<h4 className="header bold">Lorem ipsum</h4>
					<h2 className="header bold">Lorem ipsum</h2>
					<p className="text regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
					</p>
				</div>
				<div className="right">
					<form action="">
						<FormProvider {...methods}>
							<div className="input_email">
								<label htmlFor="email" className="label regular">Email</label>
								<Input 
									name="email"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>

							<Button type="submit" variant="primary">
                                Subscribe
							</Button>
						</FormProvider>
					</form>
				</div>
			</Container>
		</ContainerNewsletter>
	);
};