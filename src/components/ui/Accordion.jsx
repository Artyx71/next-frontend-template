"use client";

import { useState, useRef, useEffect } from "react";

/**
 * @param {{ title: string; children: React.ReactNode }} props
 */
export function Accordion(props)
{
	const { title, children } = props;
	const [active, setActive] = useState(false);
	const [contentHeight, setContentHeight] = useState("0px");
	const contentRef = useRef(null);

	useEffect(() =>
	{
		if (active && contentRef.current)
			setContentHeight(`${contentRef.current.scrollHeight}px`);
		else
			setContentHeight("0px");
	}, [active, children]);

	const toggleActive = () => setActive((prev) => !prev);

	return (
		<div className={`ui-accordion ${active ? "active" : ""}`}>
			<div className="ui-accordion__head" onClick={toggleActive}>
				<span className="ui-accordion__head-title">{title}</span>
				<div className={`ui-accordion__head-icon ${active ? "active" : ""}`}>
					<span />
					<span />
				</div>
			</div>
			<div
				className="ui-accordion__content"
				style={{ maxHeight: contentHeight }}
				ref={contentRef}
			>
				{children}
			</div>
		</div>
	);
}
