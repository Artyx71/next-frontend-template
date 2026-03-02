import postsApi from "@/api/posts.js";

/**
 * Хук-обёртка для доступа к API-модулям.
 *
 * @returns {{ postsApi: () => Promise<{ id: number; title: string }[]> }}
 */
export function useApi()
{
	return {
		postsApi,
	};
}

