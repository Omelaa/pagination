import {FC, useEffect, useState} from "react";

import css from './App.module.scss';

import {Pagination, Launches} from "./components";

import {ILaunch} from "./interfaces";
import {spaceService} from "./services";


const App: FC = () => {
    const [launches, setLaunches] = useState<ILaunch[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [getLaunchesForPage, setGetLaunchesForPage] = useState<ILaunch[]>([]);

    useEffect(() => {
        const getLaunches = async () => {
            try {
                setLoading(true);
                const res = await spaceService.getAll().then(data => data).then(data => data);
                setLaunches(res.data);
                setLoading(false);
            } catch (e) {
                alert("Виникла помилка!");
            }
        };

        getLaunches();
    }, []);

    return (
        <div className={css.container}>
            <h1>Launches</h1>
            <Launches currentLaunch={getLaunchesForPage} loading={loading}/>
            <Pagination
                perPage={8}
                totalItems={launches.length}
                withActions={true}
                setCurrentPage={setCurrentPage}
                launches={launches}
                currentPage={currentPage}
                setGetLaunchesForPage={setGetLaunchesForPage}
            />
        </div>
    );
}

export default App;
