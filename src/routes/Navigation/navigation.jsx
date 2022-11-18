import { Outlet, Link} from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import './navigation.scss'
import { ReactComponent as LimitLogo} from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart";
import { signOutUser } from "../../utilities/Firebase/Firebase";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    // console.log(currentUser);


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

                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            Sign In
                        </Link>
                    )}
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;