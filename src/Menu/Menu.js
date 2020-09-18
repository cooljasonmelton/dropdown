import React from 'react';

// router
import { withRouter } from 'react-router-dom';

// styling
import './Menu.css';

const Menu = () => {
  return (
    <div className="Menu">
        <div className="m-item m-logo"
            onClick={null}>
            Website
        </div>
        <div className="m-item"
            onClick={null}>
            Dashboard
        </div>
        <div className="m-item"
            onClick={null}>
            Information
        </div>
        <div className="m-item"
            onClick={null}>
            Settings
        </div>
        <div className="m-item"
            onClick={null}>
            Sign out
        </div>
    </div>
  );
}

export default withRouter(Menu);
