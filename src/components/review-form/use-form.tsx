import { useReducer } from 'react';

export const MIN_RATING = 1;
export const MAX_RATING = 5;
const INITIAL_RATING = 1;

export type ReviewFormState = {
  name: string;
  text: string;
  rating: number;
};

type ReviewFormAction =
  | { type: 'name' | 'text'; value: string }
  | { type: 'rating-increment' }
  | { type: 'rating-decrement' }
  | { type: 'clear' };

const initialState: ReviewFormState = {
  name: '',
  text: '',
  rating: INITIAL_RATING,
};

const reducer = (
  state: ReviewFormState,
  action: ReviewFormAction,
): ReviewFormState => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };

    case 'text':
      return { ...state, text: action.value };

    case 'rating-increment': {
      return {
        ...state,
        rating: state.rating + 1,
      };
    }

    case 'rating-decrement': {
      return {
        ...state,
        rating: state.rating - 1,
      };
    }

    case 'clear':
      return initialState;

    default: {
      return state;
    }
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, initialState);

  const onNameChange = (value: string) => {
    dispatch({ type: 'name', value });
  };

  const onTextChange = (value: string) => {
    dispatch({ type: 'text', value });
  };

  const onRatingIncrement = () => {
    dispatch({ type: 'rating-increment' });
  };

  const onRatingDecrement = () => {
    dispatch({ type: 'rating-decrement' });
  };

  const onClear = () => {
    dispatch({ type: 'clear' });
  };

  return {
    form,
    onNameChange,
    onTextChange,
    onRatingIncrement,
    onRatingDecrement,
    onClear,
  };
};
