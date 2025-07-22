import { StateSchema } from 'app/providers/store-provider';

export const getWhomToHelpPageSearch = (state: StateSchema) => state.whomToHelpFilter?.search ?? '';