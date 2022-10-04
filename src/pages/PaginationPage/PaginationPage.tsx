import { FC, useEffect, useState } from "react";

import { Launches, Pagination } from "../../components";

import { ILaunch } from "../../interfaces";

import { spaceService } from "../../services";

const PaginationPage:FC = () => {
    const [launches, setLaunches] = useState<ILaunch[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
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
        <div className={'d-flex flex-column justify-content-flex-end'}>
            <Launches currentLaunch={getLaunchesForPage} loading={loading}/>
            <Pagination
                perPage={8}
                totalItems={launches.length}
                withActions={true}
                setCurrentPage={setCurrentPage}
                launches={launches}
                currentPage={currentPage}
                setGetLaunchesForPage={setGetLaunchesForPage}
                loading={loading}
            />
        </div>
    );
};

export {PaginationPage};