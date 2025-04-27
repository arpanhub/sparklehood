import {Router,Request,Response, NextFunction} from 'express';
import {PrismaClient} from '../generated/prisma';
const prisma = new PrismaClient();

const router = Router();

router.get('/incident',async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try{
        const incidents = await prisma.incident.findMany();
        res.status(200).json(incidents);
    }catch(e){
        next({
            status:400,
            message:"Failed to fetch the Incidents",
        })
    }
});

export default router;