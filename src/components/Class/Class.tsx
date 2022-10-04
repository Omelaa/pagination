import {FC} from "react";

import {ITask} from "../../interfaces";

interface IProps {
    task: ITask;
}

const Class: FC<IProps> = ({task: {id, durationInMin, completed, developer}}) => {

    return (
        <>
            <li className={"d-flex gap-1"}>
                <b>{id + 1}.</b>
                <span>Dev:</span>
                <b>{developer.name},</b>
                <span>Duration:</span>
                <b>{durationInMin}m,</b>
                <span>
                Task:
                </span>
                <b style={completed ? {color: 'green'} : {color: 'red'}}>
                    {completed ? 'Completed' : 'Not Completed'}.
                </b>
            </li>
        </>
    );
};

export {Class};