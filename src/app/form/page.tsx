"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema, getUserFormDefaultValues } from "@/schemas/user-form-schema";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const defaults = getUserFormDefaultValues();

export default function FormPage()
{
	const
	{
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
		reset,
	} = useForm(
	{
		resolver     : zodResolver(userFormSchema),
		defaultValues: defaults,
	});

	const name  = watch("name");
	const email = watch("email");
	const phone = watch("phone");

	function onSubmit(values)
	{
		console.log("FORM SUBMIT", values);
		reset(defaults);
	}

	return (
		<div className="container">
			<h1 className="g-h1">Форма с валидацией</h1>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Номер телефона"
					placeholder="Номер телефона"
					value={phone}
					onChange={(v) => setValue("phone", v)}
					error={errors.phone != null}
					errorText={errors.phone?.message}
				/>
				<Input
					label="Введите имя"
					placeholder="Введите имя"
					value={name}
					onChange={(v) => setValue("name", v)}
					error={errors.name != null}
					errorText={errors.name?.message}
				/>
				<Input
					label="Введите почту"
					placeholder="Введите почту"
					type="email"
					value={email}
					onChange={(v) => setValue("email", v)}
					error={errors.email != null}
					errorText={errors.email?.message}
				/>
				<Button type="submit">
					Отправить
				</Button>
			</form>
		</div>
	);
}
