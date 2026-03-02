"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useApi } from "@/composables/useApi";

export default function ApiPage()
{
	const { postsApi } = useApi();
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function loadPosts()
	{
		setIsLoading(true);
		try
		{
			const data = await postsApi();
			setPosts(data);
		}
		finally
		{
			setIsLoading(false);
		}
	}

	useEffect(() =>
	{
		loadPosts();
	}, []);

	return (
		<div className="container api">
			<h1 className="g-h1">Работа с API</h1>
			<div className="api__buttons">
				<Button onClick={() => setPosts([])}>
					Удалить посты
				</Button>
				<Button onClick={loadPosts} disabled={isLoading}>
					Отправить запрос снова
				</Button>
			</div>
			{posts.length > 0 && (
				<div className="api__posts">
					{posts.map((post) => (
						<div key={post.id} className="api__posts-item">
							<h3>{post.title}</h3>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
