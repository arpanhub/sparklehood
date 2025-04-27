import {Router,Response,Request, NextFunction} from 'express';
import { incidentSchema } from '../validators/incidentSchema';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
const router =Router();

router.post('/incident',async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    
        try{
            
            const parsed = incidentSchema.safeParse(req.body);
            if(!parsed.success){
                res.status(400).json({
                    error:parsed.error.errors.map((e)=>e.message).join(',')
                });
                return;
            }
            const {title,description,severity} = parsed.data;
            const incident = await prisma.incident.create({
               data:{
                title:title,
                description:description,
                severity:severity,
                reportedAt: new Date()
               }
            });

            res.status(201).json(incident);
        }catch(err){
            console.error('Error creating the incident',err);
            next({
                status:400,
                message:"Internal server error"
            });
        }
})

export default router;