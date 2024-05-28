import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
import JobCard from "./components/Card";

import './types/Job';

// const client = generateClient<Schema>();

export const App: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        const loadJobs = async () => {
          const jobFiles = ['amazon_sde.json']; // List your job files here
          const jobDataPromises = jobFiles.map(file => fetch(`./assets/jobs/${file}`).then(res => res.json()));
          const jobData = await Promise.all(jobDataPromises);
          setJobs(jobData);
        };
    
        loadJobs();
      }, []);

    return (
        <main>
            {jobs.length>0 && jobs.map(job => 
                <JobCard key={job.id} job_data={job} />
            )}
        </main>
    );
}