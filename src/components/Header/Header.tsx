import {FC, useState} from "react";
import {NavLink} from "react-router-dom";

import logo from '../../assets/img/logo.png';

import css from './Header.module.scss';

const Header: FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const forAuth = () => {
        setIsAuth(!isAuth)
        localStorage.setItem('auth', JSON.stringify(isAuth));

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    const auth = JSON.parse(localStorage.getItem('auth') || '');


    return (
        <div className={css.header}>
            <NavLink to={'/'}>
                <img className={css.logo} src={logo} width={50} height={50} alt="logo"/>
            </NavLink>
            <div
                className="form-check form-switch d-flex align-items-center justify-content-center flex-column gap-1 p-0"
                style={{width: "75px"}}>
                <input className="form-check-input m-0"
                       type="checkbox"
                       role="switch"
                       id="flexSwitchCheckDefault"
                       value={auth}
                       checked={auth}
                       onChange={forAuth}/>
                <label className="form-check-label" style={{fontSize: "14px"}} htmlFor="flexSwitchCheckChecked">
                    {auth ? 'LogOut' : 'LogIn'}
                </label>
            </div>
        </div>
    );
};

export
{
    Header
}
    ;