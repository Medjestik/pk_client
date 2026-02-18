import type { IProgram, IStream } from './types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPrograms, getStreams } from '../../shared/api/programs';

export const getProgramsAction = createAsyncThunk<IProgram[]>(
	'programs/getPrograms',
	getPrograms
);

export const getStreamsAction = createAsyncThunk<IStream[]>(
	'programs/getStreams',
	getStreams
);
