import { createContext, useContext, useReducer } from 'react';

const SefesContext = createContext();

export function SafesWrapper({ children }) {
  const initialState = {
    isSelected: false,
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'SET_SELECTED_SAFE':
        return {
          ...state,
          isSelected: payload,
        };

      default:
        return state;
    }
  };

  // Actions
  const setIsSelected = () => {
    dispatch({
      type: 'SET_SELECTED_SAFE',
      payload: true,
    });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SefesContext.Provider
      value={{
        isSelected: state.isSelected,
        setIsSelected,
      }}
    >
      {children}
    </SefesContext.Provider>
  );
}

export function useSafesContext() {
  return useContext(SefesContext);
}
