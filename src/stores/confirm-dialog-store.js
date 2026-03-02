import { create } from "zustand";

/**
 * @typedef {Object} ConfirmDialogOptions
 * @property {() => void} [onConfirm]
 * @property {() => void} [onCancel]
 * @property {string} [message]
 * @property {string} [title]
 */

export const useConfirmDialogStore = create((set) =>
({
	isOpen : false,
	title  : "Подтвердите действие",
	message: "Вы уверены, что хотите выполнить это действие?",
	confirmAction: null,
	cancelAction : null,

	openDialog(options)
	{
		set(
		{
			isOpen       : true,
			title        : options.title ?? "Подтвердите действие",
			message      : options.message ?? "Вы уверены, что хотите выполнить это действие?",
			confirmAction: options.onConfirm ?? (() => {}),
			cancelAction : options.onCancel ?? (() => {}),
		});
	},

	closeDialog()
	{
		set({ isOpen: false });
	},

	confirm()
	{
		const { confirmAction } = useConfirmDialogStore.getState();
		if (confirmAction)
			confirmAction();
		set({ isOpen: false });
	},

	cancel()
	{
		const { cancelAction } = useConfirmDialogStore.getState();
		if (cancelAction)
			cancelAction();
		set({ isOpen: false });
	},
}));
