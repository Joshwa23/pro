import { Job } from "@/lib/types";

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-2xl bg-white shadow-soft p-5 hover:shadow transition">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gray-100 grid place-items-center text-gray-600 font-semibold">
            {job.company[0]}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.company}</p>
          </div>
        </div>
        <span className="text-xs text-gray-500">Posted {job.postedAgo}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-gray-100 px-3 py-1">{job.type}</span>
        <span className="rounded-full bg-gray-100 px-3 py-1">{job.level}</span>
        <span className="rounded-full bg-gray-100 px-3 py-1">{job.location}</span>
        {job.remote && <span className="rounded-full bg-gray-100 px-3 py-1">Remote</span>}
      </div>

      <p className="mt-4 text-sm text-gray-700 line-clamp-3">{job.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm">
          <span className="font-semibold">Salary:</span>{" "}
          ${job.salaryMin/1000}k - ${job.salaryMax/1000}k
        </p>
        <div className="flex flex-wrap gap-2">
          {job.tags.map(tag => (
            <span key={tag} className="rounded-xl bg-blue-50 text-blue-700 px-3 py-1 text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
