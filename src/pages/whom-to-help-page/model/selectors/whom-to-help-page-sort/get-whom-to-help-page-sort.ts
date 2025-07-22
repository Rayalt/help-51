import { StateSchema } from 'app/providers/store-provider';
import { ProgramTypes } from 'shared/config/programs';

export const getWhomToHelpPageFilter = (state: StateSchema) => state.whomToHelpFilter?.filter ?? ProgramTypes.ALL;