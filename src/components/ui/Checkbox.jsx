"use client";

import { IconsChecked } from "@/components/icons/Checked";

/**
 * @param {{ value: boolean; error?: boolean; onChange?: (v: boolean) => void; children?: React.ReactNode }} props
 */
export function Checkbox(props)
{
	const { value, error = false, onChange = () => {}, children } = props;

	const updateValue = () => onChange(!value);

	return (
		<label className={`ui-checkbox ${error ? "error" : ""}`}>
			<input
				type="checkbox"
				checked={value}
				onChange={updateValue}
				readOnly
				tabIndex={-1}
			/>
			<div className={`ui-checkbox__checkbox ${value ? "active" : ""}`}>
				{value && <IconsChecked />}
			</div>
			<span className="ui-checkbox__label">{children}</span>
		</label>
	);
}
