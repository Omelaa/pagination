import {urls} from "../constants";

import { ILaunch } from "../interfaces";

import {AxiosRes, axiosService} from "./axios.service";


const spaceService = {
    getAll: ():AxiosRes<ILaunch[]> => axiosService.get(urls.launches)
};

export {
    spaceService
};