"use client";

import { useUserStore } from "@/stores/user-store";
import formatPrice from "@/utils/formatPrice";
import { Button } from "@/components/ui/Button";

export default function StorePage()
{
	const store = useUserStore();

	return (
		<div className="pinia container">
			<h1 className="g-h1">Работа со стором</h1>
			<div className="pinia__buttons">
				<Button onClick={store.changeName}>
					Поменять имя пользователя
				</Button>
				<Button onClick={store.addMoney}>
					Дать 100 рублей
				</Button>
				<Button onClick={store.setToNull}>
					Ограбить
				</Button>
			</div>
			<div className="pinia__user-data">
				<p>имя: <b>{store.name}</b></p>
				<p>кошелек: <b>{formatPrice(store.money)}</b></p>
				<p>кошелек x2: <b>{formatPrice(store.multiple)}</b></p>
			</div>
		</div>
	);
}
