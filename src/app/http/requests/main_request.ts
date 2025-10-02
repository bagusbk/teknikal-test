import { Request } from "express";
import moment from "moment";

interface IMainRequest extends Request {
    kd_user?: string
    token?: string
    dateTime?: moment.Moment
    decodedToken?: any
}

export {IMainRequest}