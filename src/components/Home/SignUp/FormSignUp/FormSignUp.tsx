import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ContainerFormSignUp } from "./styles";
import { Input } from "components/UI/Form/Input";
import { Checkbox } from "components/UI/Form/Checkbox";
import { Email, Password, User } from "components/UI/icons";
import { theme } from "common/styles/theme";
import { Button } from "components/UI/Button";
import { useFormSignUp } from "./useFormSignUp";

export const FormSignUp: React.FC = () => {
	const methods = useForm();
	const { changeFormAuthenticated } = useFormSignUp();

	return (
		<ContainerFormSignUp>
			<FormProvider {...methods}>
				<div className="form_inputs">
					<Input 
						id="name"
						name="name"
						type="text"
						icon={<User color={theme.COLORS.SECONDARY[300]} size={16} />}
						placeholder="Name"
					/>
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
					<Input 
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						icon={<Password color={theme.COLORS.SECONDARY[300]} size={16} />}
						placeholder="Confirm password"
					/>
				</div>

				<div className="terms">
					<Checkbox
						name="terms"
						id="terms"
						label={
							<p>
								I have read and accept the <strong className="bold">Privacy Policy</strong> and <strong className="bold">Terms of User Sign up.</strong>
							</p>
						}
					/>
				</div>

				<footer>
					<Button
						type="submit"
						variant="primary"
					>
					Sign up
					</Button>

					<p className="label regular text_base">
					Already have and account? <button className="label bold text_base" type="button" onClick={changeFormAuthenticated}>
							<strong className="bold label bold">Sign in to</strong>
							<p className="label bold text_base"><strong className="label bold">Coin</strong>Synch</p>
						</button>
					</p>
				</footer>
			</FormProvider>
		</ContainerFormSignUp>
	);
};