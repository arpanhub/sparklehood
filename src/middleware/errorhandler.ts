import { error } from 'console';
import {Request,Response,NextFunction} from 'express';


export const errorHandler = (err:any, req:Request,res:Response,next:NextFunction):void=>{
    console.error("Error:",error);
    const status_codes = err.status || 500;
    const message = err.message || "Something went Wrong";
    res.status(status_codes).json({
        success:false,
        error:message,
    });
};