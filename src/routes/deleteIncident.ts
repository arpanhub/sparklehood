import { NextFunction, Router ,Response,Request} from "express";
import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();
const router = Router();

router.delete('/incident/:id',async (req:Request, res:Response,next:NextFunction):Promise<void>=>{
    try{

        const {id} = req.params;
        const incidentid = parseInt(id,10);
        if(isNaN(incidentid)){
            next({
                status:404,
                message:"Invalde Incident id. It must in Integer"
            })
            return;
        }
        const incident = await prisma.incident.findUnique({
            where:{id:incidentid}
        })
        if(!incident){
            next(
                {
                    status:404,
                    message:"'Incident not found"
                }
            )
            return;
        }
        await prisma.incident.delete({
            where:{id:incidentid}
        });
        res.status(200).json({
            message:`Incident with ID ${incidentid} deleted successfully.`,
        })
    }catch(err){
        next(err);
    }
})

export default router;