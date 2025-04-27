import zod from 'zod';

const Severitiness = ["Low","Medium","High"] as const;
export const incidentSchema = zod.object({
        title: zod.string().min(1,{message:"Title is Required"}),
        description: zod.string().min(1,{message:"Description is required"}),
        severity: zod.enum(Severitiness,{message:"severity must be either Low or high or medium"}),
        reportedAt: zod.string().datetime({message:"Invalid datetime string! Must be UTC."}).optional()
})