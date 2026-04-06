import { createSlice } from '@reduxjs/toolkit';

interface IUiState {
	isRegistrationModalOpen: boolean;
}

const initialState: IUiState = {
	isRegistrationModalOpen: false,
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		openRegistrationModal: (state) => {
			state.isRegistrationModalOpen = true;
		},
		closeRegistrationModal: (state) => {
			state.isRegistrationModalOpen = false;
		},
	},
	selectors: {
		getIsRegistrationModalOpen: (state) => state.isRegistrationModalOpen,
	},
});

export const { openRegistrationModal, closeRegistrationModal } =
	uiSlice.actions;

export const { getIsRegistrationModalOpen } = uiSlice.selectors;
