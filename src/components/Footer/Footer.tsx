import {FC} from "react";

import css from './Footer.module.scss';

import logo from "../../assets/img/logo.png";
import telegram from "../../assets/img/telegram.svg";
import instagram from "../../assets/img/instagram.svg";

import {NavLink} from "react-router-dom";

const Footer: FC = () => {
    return (
        <div className={css.footer}>
            <NavLink to={'/'}>
                <img className={css.logo} src={logo} width={50} height={50} alt="logo"/>
            </NavLink>
            <div className={css.footer__media}>
                <a href={'https://t.me/Omelaaaa'} target={"blank"}>
                    <img src={telegram} width={35} alt="telegram"/>
                </a>
                <a href={'https://www.instagram.com/p/CjOEs9vKP4r/'} target={'blank'}>
                    <img src={instagram} width={35} alt="instagram"/>
                </a>
            </div>
        </div>
    );
};

export {Footer};