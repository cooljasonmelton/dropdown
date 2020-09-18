import React, {useState} from 'react';

// router
import { withRouter } from 'react-router-dom';

// styling
import './Menu.css';

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) classArr.push(`open-${num}`)

        return classArr.join(' ')
    }

    return (
        <div className="Menu">
            <div className={setClassNames(1) + " m-logo"}
                onClick={() => setOpenMenu(!openMenu)}>
                Home
            </div>
            <div className={setClassNames(2)}
                onClick={null}>
                Dashboard
            </div>
            <div className={setClassNames(3)}
                onClick={null}>
                Settings
            </div>
            <div className={setClassNames(4)}
                onClick={null}>
                Sign out
            </div>
        </div>
  );
}

export default withRouter(Menu);
