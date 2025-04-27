import {Router,Response,Request, NextFunction} from 'express';
import { PrismaClient } from '../generated/prisma';
const router = Router();
const prisma = new PrismaClient();

router.get('/incident/:id',async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
        try{

            const {id} = req.params;
            const incidentId = parseInt(id,10);
            if(isNaN(incidentId)){
                res.status(400).json({
                    error:"Invalid incident ID.It must be number"
                });
                return;
            }
            const incident = await prisma.incident.findUnique({
                where:{id:incidentId}
            })
            if(!incident){
                res.status(404).json({
                    error:"Incident not found",
                })
                return;
            }
            res.status(200).json(incident);
        }catch(err){
            console.log("Error",err);
            next(err);
        }
})

export default router;