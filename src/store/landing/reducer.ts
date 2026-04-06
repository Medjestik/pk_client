import type { ILandingStore, IBatch } from './types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as actions from './actions';

const initialState: ILandingStore = {
	programs: [],
	streams: [],
	news: [],
	reviews: [],
	currentProgram: null,
	programDetail: null,
	currentBatch: null,
	isLoadingLanding: false,
	isLoadingAction: false,
	isLoadingDetail: true,
	error: null,
};

export const programsSlice = createSlice({
	name: 'landing',
	initialState,
	reducers: {
		setCurrentProgram(
			state,
			action: PayloadAction<{ name: string; id: number } | null>
		) {
			state.currentProgram = action.payload;
		},
		setCurrentBatch(state, action: PayloadAction<IBatch | null>) {
			state.currentBatch = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(actions.getProgramsAction.pending, (state) => {
				state.isLoadingLanding = true;
				state.error = null;
			})
			.addCase(actions.getProgramsAction.fulfilled, (state, action) => {
				state.isLoadingLanding = false;
				state.programs = action.payload;
			})
			.addCase(actions.getProgramsAction.rejected, (state, action) => {
				state.isLoadingLanding = false;
				state.error = action.error?.message || 'Не удалось загрузить программы';
			})
			.addCase(actions.getNewsAction.pending, (state) => {
				state.isLoadingLanding = true;
				state.error = null;
			})
			.addCase(actions.getNewsAction.fulfilled, (state, action) => {
				state.isLoadingLanding = false;
				state.news = action.payload;
			})
			.addCase(actions.getNewsAction.rejected, (state, action) => {
				state.isLoadingLanding = false;
				state.error = action.error?.message || 'Не удалось загрузить программы';
			})
			.addCase(actions.getReviewAction.pending, (state) => {
				state.isLoadingLanding = true;
				state.error = null;
			})
			.addCase(actions.getReviewAction.fulfilled, (state, action) => {
				state.isLoadingLanding = false;
				state.reviews = action.payload;
			})
			.addCase(actions.getReviewAction.rejected, (state, action) => {
				state.isLoadingLanding = false;
				state.error = action.error?.message || 'Не удалось загрузить программы';
			})
			.addCase(actions.getProgramDetailAction.pending, (state) => {
				state.isLoadingDetail = true;
				state.error = null;
			})
			.addCase(actions.getProgramDetailAction.fulfilled, (state, action) => {
				state.isLoadingDetail = false;
				state.programDetail = action.payload;
			})
			.addCase(actions.getProgramDetailAction.rejected, (state, action) => {
				state.isLoadingDetail = false;
				state.error = action.error?.message || 'Не удалось загрузить программы';
			})
			.addCase(actions.getStreamsAction.pending, (state) => {
				state.isLoadingLanding = true;
				state.error = null;
			})
			.addCase(actions.getStreamsAction.fulfilled, (state, action) => {
				state.isLoadingLanding = false;
				state.streams = action.payload;
			})
			.addCase(actions.getStreamsAction.rejected, (state, action) => {
				state.isLoadingLanding = false;
				state.error = action.error?.message || 'Не удалось загрузить программы';
			})
			.addCase(actions.subscribeAction.pending, (state) => {
				state.isLoadingAction = true;
				state.error = null;
			})
			.addCase(actions.subscribeAction.fulfilled, (state) => {
				state.isLoadingAction = false;
			})
			.addCase(actions.subscribeAction.rejected, (state, action) => {
				state.isLoadingAction = false;
				state.error = action.error?.message || 'Произошла ошибка';
			})
			.addCase(actions.subscribeWithBranchAction.pending, (state) => {
				state.isLoadingAction = true;
				state.error = null;
			})
			.addCase(actions.subscribeWithBranchAction.fulfilled, (state) => {
				state.isLoadingAction = false;
			})
			.addCase(actions.subscribeWithBranchAction.rejected, (state, action) => {
				state.isLoadingAction = false;
				state.error = action.error?.message || 'Произошла ошибка';
			});
	},
});

export const { setCurrentProgram, setCurrentBatch } = programsSlice.actions;
