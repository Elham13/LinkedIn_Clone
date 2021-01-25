import { Avatar } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from '../features/userSlice';
import './Modal.css';

function Modal() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='modal'>
      <div className='modal_top'>
        <Avatar />
        <div className='modal_name'>
          <h2>Elon Musk</h2>
          <p>Software engineer</p>
        </div>
      </div>
      <div className='modal_viewProfile'>
        <h2>View profile</h2>
      </div>
      <div className='modal_middle'>
        <h2>Account</h2>
        <h4>Settings & privacy</h4>
        <h4>Help</h4>
        <h4>Language</h4>
      </div>
      <div className='modal_middle'>
        <h2>Manage</h2>
        <h4>Posts & activity</h4>
        <h4>Job posting and account</h4>
      </div>
      <h2 className='signout' onClick={logoutOfApp}>
        Sign Out
      </h2>
    </div>
  );
}

export default Modal;
