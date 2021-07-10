import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IStateReduced } from './store';

export const useAppSelector: TypedUseSelectorHook<IStateReduced> = useSelector;
