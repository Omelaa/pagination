import {FC} from "react";

import css from './errorPage.module.scss';

const ErrorPage: FC = () => {
    return (
        <div className={css.error}>
            <h3 className={'d-flex flex-column align-items-center'}>
                404
                <span className={'fs-5'}>
                    Page Not Found
                </span>
            </h3>
        </div>
    );
};

export {ErrorPage};