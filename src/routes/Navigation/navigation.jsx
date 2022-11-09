import { Outlet, Link} from "react-router-dom";
import { Fragment } from "react";
import './navigation.scss'

import { ReactComponent as LimitLogo} from "../../assets/crown.svg";

const Navigation = () => {
    return(
        <Fragment>
            <div className="navigation">
                <div className="logo-container">
                    <Link to="/">
                        <LimitLogo/>
                    </Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;