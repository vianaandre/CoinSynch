import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ContainerFormSignIn } from "./styles";
import { Input } from "components/UI/Form/Input";
import { Email, Password } from "components/UI/icons";
import { theme } from "common/styles/theme";
import { Button } from "components/UI/Button";
import { useFormSignIn } from "./useFormSignIn";

export const FormSignIn: React.FC = () => {
	const methods = useForm();
	const { changeFormAuthenticated } = useFormSignIn();
	
	return (
		<ContainerFormSignIn>
			<FormProvider {...methods}>
				<div className="form_inputs">
					<Input 
						id="email"
						name="email"
						type="email"
						icon={<Email color={theme.COLORS.SECONDARY[300]} size={16} />}
						placeholder="Email"
					/>
					<Input 
						id="password"
						name="password"
						type="password"
						icon={<Password color={theme.COLORS.SECONDARY[300]} size={16} />}
						placeholder="Password"
					/>
				</div>

				<button type="button" className="forgot_password regular label_small">Forgot password?</button>

				<footer>
					<Button
						type="submit"
						variant="primary"
					>
					Sign in
					</Button>

					<p className="label regular text_base">
					Don’t have an account? <button className="label bold text_base" type="button" onClick={changeFormAuthenticated}>
							<strong className="bold label bold">Sign up to</strong>
							<p className="label bold text_base"><strong className="label bold">Coin</strong>Synch</p>
						</button>
					</p>
				</footer>
			</FormProvider>
		</ContainerFormSignIn>
	);
};