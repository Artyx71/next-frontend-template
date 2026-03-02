/**
 * Показывает уведомление (заглушка: alert).
 * В продакшене можно заменить на react-hot-toast или аналог.
 *
 * @param {"success"|"warning"|"info"|"error"} type
 * @param {string} message
 */
export function useToast(type, message)
{
	if (typeof window !== "undefined")
		window.alert(`[${type}] ${message}`);
}
