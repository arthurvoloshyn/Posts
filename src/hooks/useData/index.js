import { useEffect, useState } from 'react';

import { getDataFromLocalStorage } from '../../utils';

const useData = () => {
  const localStorageState = getDataFromLocalStorage();

  const initState = {
    userAuth: null,
    articles: localStorageState ? localStorageState.articles : [],
    users: localStorageState ? localStorageState.users : []
  };

  const [state, setState] = useState(initState);

  useEffect(() => {
    const idx = state.users.findIndex(({ auth }) => auth);

    if (idx >= 0) {
      setState(state => ({ ...state, userAuth: state.users[idx] }));
    }
  }, [state.users]);

  return [state, setState];
};

export default useData;
