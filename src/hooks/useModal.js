import { useState } from 'react';

export function useModal() {
	const [modals, setModals] = useState({
		isMoreModalOpen: false,
		isAddModalOpen: false,
	});

	function openModal(modalName) {
		if (modalName === 'add') {
			setModals({ ...modals, isAddModalOpen: true });
		} else {
			setModals({ ...modals, isMoreModalOpen: true });
		}
	}

	function closeModal(modalName) {
		if (modalName === 'add') {
			setModals({ ...modals, isAddModalOpen: false });
		} else {
			setModals({ ...modals, isMoreModalOpen: false });
		}
	}

	return { modals, openModal, closeModal };
}
