import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { ReactComponent as LimitLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart";
import { signOutUser } from "../../utilities/Firebase/Firebase";
import {
  NavigationContainer,
  NavLinksContainer,
  NavLinks,
  LogoContainer,
} from "./navigation.style.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <LimitLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to='/shop'>Shop</NavLinks>

          {currentUser ? (
            <NavLinks as='span' className='nav-link' onClick={signOutUser}>
              Sign Out
            </NavLinks>
          ) : (
            <NavLinks to='/auth'>Sign In</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
