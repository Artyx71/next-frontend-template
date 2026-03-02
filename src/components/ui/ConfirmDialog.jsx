"use client";

import { useEffect, useRef } from "react";
import { useConfirmDialogStore } from "@/stores/confirm-dialog-store";
import { Button } from "@/components/ui/Button";

export function ConfirmDialog()
{
	const { isOpen, title, message, cancel, confirm } = useConfirmDialogStore();
	const contentRef = useRef(null);

	useEffect(() =>
	{
		function handleClickOutside(e)
		{
			if (contentRef.current && !contentRef.current.contains(e.target))
				cancel();
		}

		if (isOpen)
		{
			document.addEventListener("mousedown", handleClickOutside);
			return () => document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [isOpen, cancel]);

	if (!isOpen)
		return null;

	return (
		<div className="ui-confirm-dialog">
			<div ref={contentRef} className="ui-confirm-dialog__content">
				<h3 className="ui-confirm-dialog__content-title">{title}</h3>
				<p className="ui-confirm-dialog__content-description">{message}</p>
				<div className="ui-confirm-dialog__content-buttons">
					<Button variant="border" onClick={cancel}>
						Отмена
					</Button>
					<Button onClick={confirm}>
						Подтвердить
					</Button>
				</div>
			</div>
		</div>
	);
}
