import React, { forwardRef, useState } from 'react';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { Avatar } from '@material-ui/core';
import './Post.css';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const [likeCount, setLikeCount] = useState(0);

  const likePost = (e) => {
    e.preventDefault();
    setLikeCount(likeCount + 1);
  };
  return (
    <div ref={ref} className='post'>
      <div className='post_header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post_body'>
        <p>{message}</p>
      </div>

      <div className='post_actions'>
        <div className='post_likes'>
          <p>{likeCount}</p>
          <ThumbUpAltIcon />
        </div>
        <div className='post_comments'>
          <p>0</p>
          <p>comments</p>
        </div>
      </div>

      <div className='post_button'>
        <InputOption
          Icon={ThumbUpAltIcon}
          title='Like'
          color='gray'
          onClick={likePost}
        />
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
      </div>
    </div>
  );
});

export default Post;
