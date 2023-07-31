import React, { memo } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { useFormContext, Controller } from "react-hook-form";

import { Checked } from "components/UI/icons/Checked";
import { ContainerCheckbox } from "./styles";
import { TypeCheckbox, TypeCheckboxRoot } from "./type";
import { theme } from "common/styles/theme";

export const CheckboxRoot = memo(({ name, id, disabled, control, defaultChecked, label }: Omit<TypeCheckboxRoot, "children">) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultChecked}
			render={({ field: { name, onChange } }) => (
				<ContainerCheckbox>
					<RadixCheckbox.Root className="checkbox_root" disabled={disabled} id={id} name={name} onCheckedChange={onChange}>
						<RadixCheckbox.Indicator className="checkbox_indicator" >
							<Checked 
								size={12}
								color={theme.COLORS.WHITE}
							/>
						</RadixCheckbox.Indicator>
						<RadixCheckbox.Checkbox 
							id={id}
						/>
					</RadixCheckbox.Root>
					{label && (
						<label className="label regular text_base" htmlFor={name}>
							{label}
						</label>
					)}
				</ContainerCheckbox>
			)}
		/>
	);
}, (preProps, nextProps) => preProps.formState.isDirty === nextProps.formState.isDirty);

export const Checkbox: React.FC<TypeCheckbox> = ({ id, name, label, defaultChecked, ...rest }) => {
	const methods = useFormContext();

	return (
		<CheckboxRoot id={id} name={name} {...methods} disabled={rest.disabled} label={label} defaultValue={rest.defaultValue} defaultChecked={defaultChecked} />
	);
};