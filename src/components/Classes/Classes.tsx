import {FC} from "react";

import {IApp, IProject, ITask, IUser} from "../../interfaces";

import {Class} from "../Class/Class";

const Classes: FC = () => {

    class User implements IUser {
        id: number;
        name: string;

        constructor(name: string) {
            this.id = new Date().getTime();
            this.name = name;
        };
    }

    class App implements IApp {
        name: string;
        projects: IProject[];

        constructor(name: string, projects: IProject[]) {
            this.name = name;
            this.projects = projects;
        };

        setName(name: string): void {
            this.name = name;
        }

        addProject(project: IProject): void {
            this.projects.push(project);
        };
    }

    class Task implements ITask {
        id: number;
        durationInMin: number;
        completed: boolean;
        developer: IUser;

        constructor(id: number, durationInMin: number, completed: boolean, developer: IUser) {
            this.id = id;
            this.durationInMin = durationInMin;
            this.completed = completed;
            this.developer = developer;
        };

        getInfo(): string {
            return (`
        ID: ${this.id},
        Duration: ${this.durationInMin}m,
        Developer: ${this.developer.name},
        Status: ${this.completed ? 'completed.' : 'not completed.'}
        `);
        }
    }

    class Project implements IProject {
        tasks: ITask[];

        constructor(tasks: ITask[]) {
            this.tasks = tasks;
        };

        addTask(task: ITask): void {
            this.tasks.push(task);
        };

        editTask(task: Partial<ITask>): void {
            const getTaskForEdit = this.tasks.map((getTask) => getTask.id === task.id);
            // getTaskForEdit? Object.assign(getTaskForEdit, task) : throw new Error('Error');
            if (getTaskForEdit) {
                Object.assign(getTaskForEdit, task);
            } else {
                throw new Error('Error');
            }
        };

        deleteTask(id: number): void {
            this.tasks = this.tasks.filter(value => value.id !== id);
        }

        getTotalTime(): number {
            return this.tasks.reduce((prev, curr) => prev + curr.durationInMin, 0);
        }

        getAllTasksByDeveloper(id: number): ITask[] {
            return this.tasks.filter(task => task.developer.id === id);
        };
    }

    const user1 = new User('John');
    const user2 = new User('Alex');
    const user3 = new User('Jack');
    const user4 = new User('Alice');

    const testTask1 = new Task(0, 20, true, user1);
    const testTask2 = new Task(1, 40, false, user1);
    const testTask3 = new Task(2, 60, true, user2);
    const testTask4 = new Task(3, 45, false, user3);
    const testTask5 = new Task(4, 35, false, user4);
    const testTask6 = new Task(5, 35, true, user2);
    const testTask7 = new Task(6, 30, false, user4);
    const testTask8 = new Task(7, 35, true, user3);

    const projectTest = new Project([testTask1, testTask2, testTask3, testTask4, testTask5, testTask6, testTask7, testTask8]);

    const testApp = new App('hey', [projectTest]);

    // console.log(user1);
    // console.log(testTask1);
    // console.log(projectTest);
    // console.log(testTask3.getInfo());
    // console.log(projectTest.deleteTask(1))
    // console.log(projectTest.deleteTask(3));
    // console.log(projectTest.getTotalTime());
    // console.log(projectTest.getAllTasksByDeveloper(0));

    return (
        <>
            <h3>Dev Tasks:</h3>
            <ul className={'d-flex flex-column gap-2 flex-1'} style={{flex: "1"}}>
                {
                    projectTest.tasks.map((task: ITask) => <Class key={task.id} task={task}/>)
                }
            </ul>
        </>
    );
};

export {Classes};