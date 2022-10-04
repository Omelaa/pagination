import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import css from './App.module.scss';

import {Header, Footer, Tasks} from "./components";

import {ClassesPage, ErrorPage, MainPage, PaginationPage, SettingsPage} from "./pages";


const App: FC = () => {
    const auth = JSON.parse(localStorage.getItem('auth') || '');

    return (
        <BrowserRouter>
            <div className={css.container}>
                <Header/>
                <main className={css.main}>
                    <Tasks/>
                    <div className={css.tasks}>
                        <Switch>
                            <Route exact path={"/"} component={MainPage}/>
                            <Route path={"/pagination"} component={PaginationPage}/>
                            <Route path={"/classes"} component={ClassesPage}/>
                            {
                                auth ?
                                    <Route path={"/settings"} component={SettingsPage}/>
                                    :
                                    <Route path={"*"} component={ErrorPage}/>
                            }
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
