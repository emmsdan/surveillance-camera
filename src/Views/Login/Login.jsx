import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../../components/Modal/Modal';
import './Login.css';
import { FormInput, FormButton } from '../../components/FormFields/FormFields';
import { LOGIN, TEMP_DATABASE, LOGIN_ATTEMPT } from '../../redux/Actions';
import useModal from '../../components/Modal/useModal';

const submitForm = ({ value, user, dispatch }) => {
  if (TEMP_DATABASE.includes(value)) {
    return dispatch({ type: LOGIN });
  }
  return value ? dispatch({ type: LOGIN_ATTEMPT }) : '';
};
const isLogin = (login, user, dispatch) => {
  const isLogin = (
    <div className="p40">
      <h3>Enter enter your decryption code.</h3>
      <form className="flex">
        <FormInput placeholder="CODE..." id="code" reff={login.input} />
        <FormButton
          title="VERIFY"
          onClick={() =>
            submitForm({
              value: login.input.current.value,
              user,
              dispatch
            })
          }
        />
      </form>
      {user.attempt ? (
        <h3 className="cenhter-all fz26">Login Attempts: {user.attempt}</h3>
      ) : (
        ''
      )}
    </div>
  );
  const tooManyAttempt = (
    <div className="p40 error">
      <h1> You have been burnt.</h1>
      <h1>
        <i className="fa fa-lock"></i>
      </h1>
    </div>
  );
  return user.attempt < 5 ? isLogin : tooManyAttempt;
};
const Login = () => {
  const [login] = useState({ input: React.createRef() });
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const actions = { ...useModal(true) };
  const offset = { left: '40%', top: '40%', sposition: 'relative' };
  return (
    <div className="login">
      <Modal className="w400p" offset={offset} actions={actions}>
        {isLogin(login, user, dispatch)}
      </Modal>
    </div>
  );
};

export default Login;
