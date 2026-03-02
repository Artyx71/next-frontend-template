import { create } from "zustand";

/**
 * Возможные имена пользователя для демонстрации смены имени.
 * @type {string[]}
 */
const NAMES =
[
	"John Doe",
	"Jane Doe",
	"Alice Smith",
	"Bob Johnson",
	"Charlie Brown",
	"Eve Adams",
	"David Miller",
];

/**
 * Глобальное хранилище пользователя.
 *
 * @typedef {Object} UserStoreState
 * @property {string} name Текущее имя пользователя.
 * @property {number} money Баланс пользователя.
 * @property {() => void} changeName Меняет имя на случайное из списка.
 * @property {() => void} addMoney Увеличивает баланс на 100.
 * @property {() => void} setToNull Обнуляет баланс.
 * @property {number} multiple Геттер: баланс, умноженный на 2.
 *
 * @type {import("zustand").UseBoundStore<import("zustand").StoreApi<UserStoreState>>}
 */
export const useUserStore = create((set, get) =>
({
	name : "John Doe",
	money: 5000,

	changeName()
	{
		const currentName = get().name;
		const availableNames = NAMES.filter((n) => n !== currentName);
		const newName = availableNames[Math.floor(Math.random() * availableNames.length)] ?? currentName;

		set({ name: newName });
	},

	addMoney()
	{
		set((state) => ({ money: state.money + 100 }));
	},

	setToNull()
	{
		set({ money: 0 });
	},

	get multiple()
	{
		return get().money * 2;
	},
}));

