import React, { memo, useState } from "react";
import { ContainerInput, Icon } from "./styles";
import { TypeInput, TypeInputRoot } from "./type";
import { useFormContext } from "react-hook-form";

const InputRoot = memo(({ name, id, register, placeholder, disabled, icon, getValues, ...rest }: Omit<TypeInputRoot, "children">) => {
	const [ focus, setFocus ] = useState<boolean>(false);

	return (
		<ContainerInput className={focus ? "focus" : ""}>
			{icon && (
				<Icon>
					{icon}
				</Icon>
			)}
			<input {...register(name)} id={id} placeholder={placeholder} disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => {
				if(!getValues(name) || getValues(name) === "") {
					setFocus(false);
				}
			}} {...rest} />
		</ContainerInput>
	);
}, (preProps, nextProps) => preProps.formState.isDirty === nextProps.formState.isDirty);

export const Input: React.FC<TypeInput> = ({ id, name, icon, ...rest }) => {
	const methods = useFormContext();

	return (
		<InputRoot id={id} name={name} {...methods} disabled={rest.disabled} placeholder={rest.placeholder} type={rest.type} defaultValue={rest.defaultValue} icon={icon} />
	);
};