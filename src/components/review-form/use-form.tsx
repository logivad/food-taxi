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
  | { type: 'rating'; value: number }
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

    case 'rating': {
      return {
        ...state,
        rating: action.value,
      };
    }

    case 'clear':
      return initialState;

    default: {
      const exhaustiveCheck: never = action;
      return exhaustiveCheck;
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

  const onRatingChange = (value: number) => {
    dispatch({ type: 'rating', value });
  };

  const onClear = () => {
    dispatch({ type: 'clear' });
  };

  return {
    form,
    onNameChange,
    onTextChange,
    onRatingChange,
    onClear,
  };
};
