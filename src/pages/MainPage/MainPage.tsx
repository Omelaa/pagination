import {FC} from "react";
import {NavLink} from "react-router-dom";

import css from "../../components/Header/Header.module.scss";

import logo from "../../assets/img/logo.png";


const MainPage:FC = () => {
    return (
        <NavLink to={'/'} className={"d-flex align-items-center justify-content-center"} style={{flex: '1'}}>
            <img className={css.logo} src={logo} width={250} height={250} alt="logo"/>
        </NavLink>
    );
};

export {MainPage};