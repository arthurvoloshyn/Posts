import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import useEdit from '../../hooks/useEdit';

import Warning from '../../components/warning';

import './edit.css';

const Edit = ({ history }) => {
  const [onChangeData, onSubmitArticle, check, data, userAuth] = useEdit(history);
  const { title, desc } = data;
  const { checkLengthEdit, checkEmpty } = check;

  // check auth
  if (!userAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="row">
        <form className="create-article" onSubmit={onSubmitArticle}>
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" name="title" id="title" aria-describedby="title" placeholder="Title" value={title} onChange={onChangeData} />
          <label htmlFor="desc">Description</label>
          <textarea className="form-control desc" name="desc" id="desc" rows="3" placeholder="Description" value={desc} onChange={onChangeData} />
          <Warning checkLengthEdit={checkLengthEdit} checkEmpty={checkEmpty} />
          <input type="submit" className="btn btn-primary" value="Create" />
        </form>
      </div>
    </div>
  );
};

Edit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

Edit.defaultProps = {
  history: {
    push: () => {}
  }
};

export default withRouter(Edit);
