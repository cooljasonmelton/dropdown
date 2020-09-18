import React, {useState} from 'react';

// router
import { withRouter } from 'react-router-dom';

// styling
import './Menu.css';

const Menu = props => {
    const [openMenu, setOpenMenu] = useState(false)

    const pushToRoute = route => {
        props.history.push(route)
        setOpenMenu(false)
    }

    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) classArr.push(`open-${num}`)
        return classArr.join(' ')
    }

    return (
        <div className="Menu">
            <div className={"m-item m-logo"}
                onClick={() => setOpenMenu(!openMenu)}>
                Menu
            </div>
            <div className={setClassNames(1)}
                onClick={() => pushToRoute("/dashboard")}>
                Dashboard
            </div>
            <div className={setClassNames(2)}
                onClick={() => pushToRoute("/settings")}>
                Settings
            </div>
            <div className={setClassNames(3)}
                onClick={() => pushToRoute("/")}>
                Sign out
            </div>
        </div>
  );
}

export default withRouter(Menu);
