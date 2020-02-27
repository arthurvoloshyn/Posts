import { useContext } from 'react';

import { setDataInLocalStorage } from '../../utils';

import { UserContext } from '../../context';

const usePost = (id, history) => {
  const [state, setState] = useContext(UserContext);
  const { articles, userAuth, users } = state;

  const article = articles ? articles.find(({ created_ad }) => created_ad === id) : null;

  const delPost = () => {
    const { title, desc } = article;

    const newArticles = articles.filter(el => el.title !== title || el.desc !== desc);

    setState(state => ({ ...state, articles: newArticles }));

    setDataInLocalStorage(users, newArticles);

    history.push('/');
  };

  return [article, userAuth, delPost];
};

export default usePost;
