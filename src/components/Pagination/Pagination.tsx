import {FC, useEffect} from "react";

import css from './pagination.module.scss';

import {ILaunch} from "../../interfaces";


interface IProps {
    totalItems: number;
    perPage: number;
    withActions?: boolean;
    currentPage: number;
    launches: ILaunch[];
    setCurrentPage: (page: number) => void;
    setGetLaunchesForPage: (currentLaunch: ILaunch[]) => void;
}

const Pagination: FC<IProps> = ({
                                    perPage,
                                    totalItems,
                                    setCurrentPage,
                                    currentPage,
                                    launches,
                                    setGetLaunchesForPage,
                                    withActions = true
                                }) => {

    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalItems / perPage); i++) {
        pageNumbers.push(i);
    }

    const lastLaunchIndex = currentPage * perPage;
    const firstLaunchIndex = lastLaunchIndex - perPage;
    const currentLaunch = launches.slice(firstLaunchIndex, lastLaunchIndex);

    const nextPage = () => setCurrentPage((page: number) => page + 1);
    const prevPage = () => setCurrentPage((page: number) => page - 1);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    useEffect(() => {
        setGetLaunchesForPage(currentLaunch);
    },[currentPage]);

    return (
        <div className={css.pagination}>
            {withActions ?
                <button
                    className={css.pagination__btn}
                    style={currentPage === pageNumbers[0] ? {opacity: '0.5'} : {opacity: '1'}}
                    onClick={prevPage}
                    disabled={currentPage === pageNumbers[0]}
                >
                    Prev
                </button>
                :
                ''
            }
            {pageNumbers.map((num) =>
                <button
                    className={num === currentPage ? `${css.pagination__active}` : `${css.pagination__btn}`}
                    key={num}
                    onClick={() => paginate(num)}
                >
                    {num}
                </button>
            )}
            {withActions ?
                <button
                    className={css.pagination__btn}
                    style={currentPage === pageNumbers.length ? {opacity: '0.5'} : {opacity: '1'}}
                    onClick={nextPage}
                    disabled={currentPage === pageNumbers.length}
                >
                    Next
                </button>
                :
                ''
            }
        </div>
    );
};

export {Pagination};