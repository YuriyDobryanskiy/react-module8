import clsx from 'clsx';

import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

function summaryClass(LinkState) {
  const { isActive } = LinkState;
  return clsx(styles.navLink, {
    [styles.activeLink]: isActive,
  });
}
const AuthNav = () => {
  return (
    <div className={styles.authNavMenu}>
      <NavLink to="authorization" className={summaryClass}>
        Sign in
      </NavLink>
      <NavLink to="registration" className={summaryClass}>
        Sign up
      </NavLink>
    </div>
  );
};

export default AuthNav;
