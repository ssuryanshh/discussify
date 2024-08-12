import Avatar  from '@mui/material/Avatar';
import React from 'react';
import "./PageHeader.css"

function PageHeader({ headerText,content, username }) {
  return (
    <div className="page-header">
      <h1>{headerText}</h1>
      <h2>{content}</h2>
      <Avatar size='large'>{username.charAt(0).toUpperCase()}</Avatar>

    </div>
  );
}

export default PageHeader;
