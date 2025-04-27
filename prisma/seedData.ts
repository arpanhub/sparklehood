import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
    await prisma.incident.createMany({
        data: [
            {
                title: "AI hallucination caused medical advice error",
                description: "An AI chatbot recommended incorrect medicine dosage.",
                severity: "High",
                reportedAt: new Date("2025-04-20T10:00:00Z"),
            },
            {
                title: "Bias in facial recognition",
                description: "AI system showed racial bias in face detection.",
                severity: "Medium",
                reportedAt: new Date("2025-04-21T14:30:00Z"),
            },
            {
                title: "Minor UI bug in chatbot",
                description: "Chatbot outputted repeated responses due to a loop.",
                severity: "Low",
                reportedAt: new Date("2025-04-22T08:00:00Z"),
            },
            {
                title: "Major System failure",
                description: "System failure occured ",
                severity: "High",
                reportedAt: new Date("2025-04-23T14:00:00Z"),
            },
        ],
    });
}

main().catch((e)=>{
    console.error(e);
    process.exit(1);
}).finally(async ()=>{
    await prisma.$disconnect();
});