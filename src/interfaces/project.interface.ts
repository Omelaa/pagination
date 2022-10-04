import { ITask } from "./task.interface";


interface IProject {
    tasks: ITask[];
    addTask(task: ITask): void;
    editTask(task: Partial<ITask>): void;
    deleteTask(id: number): void;
    getTotalTime(): number;
    getAllTasksByDeveloper(id: number): ITask[];
}

export type {
    IProject
};