import {FC} from "react";

import {Launch} from "../Launch/Launch";

import css from './Launches.module.scss';

import {ILaunch} from "../../interfaces";

interface IProps {
    currentLaunch: ILaunch[];
    loading: boolean;
}

export const Launches: FC<IProps> = ({currentLaunch, loading}) => {

    if (loading) {
        return <h2 style={{textAlign: "center"}}>Loading...</h2>
    }

    return (
        <ul className={css.launches}>
            {
                currentLaunch && currentLaunch.map(launch => <Launch key={launch.flight_number} launch={launch}/>)
            }
        </ul>
    );
};

export {
    Launch
};