import React from "react";

export function Button(props)
{
	const
	{
		variant,
		size,
		disabled,
		children,
		...rest
	} = props;

	const classNames = ["ui-button"];

	if (variant === "border")
		classNames.push("border");

	if (size === "xl")
		classNames.push("xl");

	return (
		<button
			type="button"
			className={classNames.join(" ")}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
}

