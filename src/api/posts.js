/**
 * Примеры постов для демонстрации работы с API.
 * В реальном проекте здесь могут быть вызовы внешнего сервиса.
 * @type {{ id: number; title: string }[]}
 */
const posts =
[
	{ id: 1, title: "Первый пост" },
	{ id: 2, title: "Второй пост" },
];

/**
 * Возвращает список постов.
 * @returns {Promise<{ id: number; title: string }[]>} Промис со списком постов.
 */
export default function getPosts()
{
	return Promise.resolve(posts);
}

