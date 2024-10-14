import prisma from "@/lib/prisma";
import JobRow from "@/components/JobRow";

export default async function Page() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className='text-4xl font-bold text-center'>
          Find the job that fits<br /> your skills
        </h1>
        <p className='text-center text-gray-600 mt-2'>
          Where talent meets opportunity. Start your journey to the perfect remote role.
        </p>
      </div>
      <section>
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobRow job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
