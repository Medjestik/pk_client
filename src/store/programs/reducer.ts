import type { IProgramsStore } from './types';

import { createSlice } from '@reduxjs/toolkit';

import * as actions from './actions';

const initialState: IProgramsStore = {
	programs: [],
	streams: [],
	isLoadingPrograms: false,
	error: null,
};

export const programsSlice = createSlice({
	name: 'programs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(actions.getProgramsAction.pending, (state) => {
				state.isLoadingPrograms = true;
				state.error = null;
			})
			.addCase(actions.getProgramsAction.fulfilled, (state, action) => {
				state.isLoadingPrograms = false;
				state.programs = action.payload;
			})
			.addCase(actions.getProgramsAction.rejected, (state, action) => {
				state.isLoadingPrograms = false;
				state.error = action.error?.message || 'Не удалось загрузить программы';
			})
			.addCase(actions.getStreamsAction.pending, (state) => {
				state.isLoadingPrograms = true;
				state.error = null;
			})
			.addCase(actions.getStreamsAction.fulfilled, (state, action) => {
				state.isLoadingPrograms = false;
				state.streams = action.payload;
			})
			.addCase(actions.getStreamsAction.rejected, (state, action) => {
				state.isLoadingPrograms = false;
				state.error = action.error?.message || 'Не удалось загрузить программы';
			});
	},
});
