import {FC} from "react";
import {NavLink} from "react-router-dom";

import arrow from '../../assets/img/arrow.svg';

import css from './Tasks.module.scss';


const Tasks: FC = () => {

    const links = [
        {
            id: 0,
            name: 'Pagination',
            link: '/pagination'

        },
        {
            id: 1,
            name: 'Classes',
            link: '/classes'
        }
    ];

    const auth = JSON.parse(localStorage.getItem('auth') || '');

    return (

        <ul className={css.list}>
            <li>
                <h3>Tasks:</h3>
            </li>
            {
                links.map(link =>
                    <li className={css.list__item} key={link.id}>
                        <NavLink className={css.button} to={link.link}>
                            {link.name}
                        </NavLink>
                        <img src={arrow} alt="arrow"/>
                    </li>
                )
            }
            {auth ?
                <li className={css.list__item}>
                    <NavLink to={'/settings'}>
                        Settings
                    </NavLink>
                    <img src={arrow} alt="arrow"/>
                </li>
                :
                ''
            }
        </ul>
    );
};

export {Tasks};