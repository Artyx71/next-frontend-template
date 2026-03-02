import { z } from "zod";

/**
 * Схема валидации пользовательской формы.
 */
export const userFormSchema = z.object(
{
	name: z.string().min(1, "Имя обязательно"),
	email: z.string().email("Некорректный email"),
	phone: z.string().min(10, "Телефон обязателен"),
});

/**
 * Возвращает дефолтные значения для формы пользователя.
 *
 * @returns {{ name: string; email: string; phone: string }}
 */
export function getUserFormDefaultValues()
{
	return {
		name : "",
		email: "",
		phone: "",
	};
}

