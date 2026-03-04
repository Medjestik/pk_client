export interface IDetailProps {
	isOpen: boolean;
	onClose: () => void;
	onOpen: () => void;
	closeByClickOutside?: boolean;
	closeByPressEsc?: boolean;
}
