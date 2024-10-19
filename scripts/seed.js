import { placeholderJobs } from "./placeholder-data.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    placeholderJobs.map(async (job) => {
      try {
        const result = await prisma.job.upsert({
          where: { slug: job.slug },
          update: job,
          create: job,
        });
        console.log(`Successfully upserted job: ${result.title}`);
      } catch (error) {
        console.error(`Failed to upsert job: ${job.title}`, error);
      }
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error while seeding database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
