import { useContext } from 'react';

import { setDataInLocalStorage } from '../../utils';

import { UserContext } from '../../context';

const usePost = (id, history) => {
  const [state, setState] = useContext(UserContext);
  const { articles, userAuth, users } = state;

  const article = articles ? articles.find(({ created_ad }) => created_ad === id) : null;

  const delPost = () => {
    const { created_ad } = article;

    const newArticles = articles.filter(el => el.created_ad !== created_ad);

    setState(state => ({ ...state, articles: newArticles }));

    setDataInLocalStorage(users, newArticles);

    history.push('/');
  };

  return [article, userAuth, delPost];
};

export default usePost;
