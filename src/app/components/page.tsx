"use client";

import { useState } from "react";
import { useConfirmDialogStore } from "@/stores/confirm-dialog-store";
import { useToast } from "@/composables/useToast";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Accordion } from "@/components/ui/Accordion";
import { Skeleton } from "@/components/ui/Skeleton";
import { Checkbox } from "@/components/ui/Checkbox";
import { IconsClose } from "@/components/icons/Close";

export default function ComponentsPage()
{
	const confirmDialog = useConfirmDialogStore();
	const [inputs, setInputs] = useState(
	{
		label      : "",
		placeholder: "",
		disabled   : "",
		phone      : "",
		error      : "",
		errorText  : "",
		icon       : "",
	});
	const [checkbox, setCheckbox] = useState(false);
	const [checkboxError, setCheckboxError] = useState(false);

	const openConfirm = () =>
	{
		confirmDialog.openDialog(
		{
			title  : "Тут тайтл",
			message: "Тут описание",
			onConfirm: () => useToast("info", "Подтвердили"),
			onCancel : () => useToast("info", "Отменили"),
		});
	};

	return (
		<div className="components container">
			<h2 className="components__subtitle">Конфирм</h2>
			<div className="components__wrapper">
				<Button onClick={openConfirm}>
					Вызови меня
				</Button>
			</div>

			<h2 className="components__subtitle">Вариации кнопок</h2>
			<div className="components__wrapper">
				<Button>default</Button>
				<Button size="xl">xl</Button>
				<Button variant="border">border</Button>
				<Button disabled>disabled</Button>
			</div>

			<h2 className="components__subtitle">Вариации инпутов</h2>
			<div className="components__wrapper">
				<Input
					label="Label input"
					placeholder="label input"
					value={inputs.label}
					onChange={(v) => setInputs((s) => ({ ...s, label: v }))}
				/>
				<Input
					placeholder="placeholder input"
					value={inputs.placeholder}
					onChange={(v) => setInputs((s) => ({ ...s, placeholder: v }))}
				/>
				<Input
					placeholder="disabled input"
					disabled
					value={inputs.disabled}
					onChange={() => {}}
				/>
				<Input
					placeholder="phone input"
					value={inputs.phone}
					onChange={(v) => setInputs((s) => ({ ...s, phone: v }))}
				/>
				<Input
					placeholder="icon input"
					value={inputs.icon}
					onChange={(v) => setInputs((s) => ({ ...s, icon: v }))}
					onTriggerIcon={() => useToast("info", "click icon")}
				>
					<IconsClose />
				</Input>
				<Input
					placeholder="error input"
					error
					value={inputs.error}
					onChange={(v) => setInputs((s) => ({ ...s, error: v }))}
				/>
				<Input
					placeholder="errorText input"
					error
					errorText="errorText input"
					value={inputs.errorText}
					onChange={(v) => setInputs((s) => ({ ...s, errorText: v }))}
				/>
			</div>

			<h2 className="components__subtitle">Вариации уведомлений</h2>
			<div className="components__wrapper">
				<Button onClick={() => useToast("success", "success")}>success</Button>
				<Button onClick={() => useToast("warning", "warning")}>warning</Button>
				<Button onClick={() => useToast("info", "info")}>info</Button>
				<Button onClick={() => useToast("error", "error")}>error</Button>
			</div>

			<h2 className="components__subtitle">Аккордеон</h2>
			<div className="components__wrapper">
				<Accordion title="это аккордеон">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt odio sed, rem nisi aliquam tempora reprehenderit, porro quos rerum atque similique, cupiditate at modi molestias harum? Quas, veniam numquam.
				</Accordion>
			</div>

			<h2 className="components__subtitle">Skeleton</h2>
			<div className="components__wrapper">
				{Array.from({ length: 10 }, (_, i) => (
					<Skeleton key={i} />
				))}
			</div>

			<h2 className="components__subtitle">Checkbox</h2>
			<div className="components__wrapper">
				<Checkbox value={checkbox} onChange={setCheckbox}>
					checkbox {String(checkbox)}
				</Checkbox>
				<Checkbox value={checkboxError} onChange={setCheckboxError} error={!checkboxError}>
					checkboxError {String(checkboxError)}
				</Checkbox>
			</div>
		</div>
	);
}
