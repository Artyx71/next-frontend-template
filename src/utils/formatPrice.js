/**
 * Форматирует число в денежный формат RUB для ru-RU.
 *
 * @param {number} value Число, которое нужно отформатировать.
 * @returns {string} Строка в формате `1 000 ₽`.
 */
export default function (value)
{
	return new Intl.NumberFormat("ru-RU",
	{
		style: "currency",
		currency: "RUB",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(value);
}

