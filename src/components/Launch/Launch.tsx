import {FC, ReactNode} from "react";

import {ILaunch} from "../../interfaces";

import css from './Launch.module.scss';

interface IProps {
    launch: ILaunch;
    children?: ReactNode;
}

const Launch: FC<IProps> = ({launch: {flight_number, mission_name, details}}) => {

    return (
        <>
            {
                details ?
                    <li className={css.launch}>
                        <>
                            <h3>{flight_number}. {mission_name}</h3>
                            <div>
                                <p>
                                    {details}
                                </p>
                            </div>
                        </>
                    </li>
                    :
                    ''
            }
        </>
    );
};

export {
    Launch
};