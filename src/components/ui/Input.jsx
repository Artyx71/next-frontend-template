"use client";

import { useState, useRef } from "react";

/**
 * @param {Object} props
 * @param {string} [props.placeholder]
 * @param {string} [props.errorText]
 * @param {boolean} [props.disabled]
 * @param {string} [props.value]
 * @param {string} [props.label]
 * @param {boolean} [props.error]
 * @param {string} [props.type]
 * @param {string} [props.name]
 * @param {boolean} [props.isPhone]
 * @param {(v: string) => void} [props.onChange]
 * @param {() => void} [props.onTriggerIcon]
 * @param {React.ReactNode} [props.children]
 */
export function Input(props)
{
	const
	{
		placeholder  = "",
		errorText    = "",
		disabled     = false,
		value        = "",
		label        = "",
		error        = false,
		type         = "text",
		name         = "",
		isPhone      = false,
		onChange     = () => {},
		onTriggerIcon,
		children,
	} = props;

	const [focus, setFocus] = useState(false);
	const inputRef = useRef(null);

	const focusInput = () =>
	{
		if (inputRef.current)
			inputRef.current.focus();
	};

	const classNames = ["ui-input"];
	if (focus || value)
		classNames.push("active");
	if (disabled)
		classNames.push("disabled");
	if (error)
		classNames.push("error");

	return (
		<div className={classNames.join(" ")}>
			{label && (
				<label className="ui-input__label" onClick={focusInput}>
					{label}
				</label>
			)}
			<div className="ui-input__wr">
				<input
					ref={inputRef}
					className="ui-input__input"
					type={type}
					value={value}
					placeholder={placeholder}
					disabled={disabled}
					name={name || undefined}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					onChange={(e) => onChange(e.target.value)}
				/>
				{children && (
					<div
						className="ui-input__icon"
						onClick={onTriggerIcon}
						onKeyDown={(e) => e.key === "Enter" && onTriggerIcon?.()}
						role="button"
						tabIndex={0}
					>
						{children}
					</div>
				)}
			</div>
			{errorText && <span className="ui-input__error-text">{errorText}</span>}
		</div>
	);
}
