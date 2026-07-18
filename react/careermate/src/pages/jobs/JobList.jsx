import { useState, useEffect } from 'react';
import './JobList.css';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchJobs = async () => {
        try {
            // const response = await fetch('https://api.example.com/jobs');
            // const data = await response.json();
            const data = [
                { id: 1, title: "Frontend Developer" },
                { id: 2, title: "Backend Developer" },
                { id: 3, title: "QA Engineer" },
            ];
            setJobs(data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchJobs();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="job-list-page">
            <section className="job-list-panel">
                <h2>Job Listings</h2>
                {loading ? (
                    <p>Loading jobs...</p>
                ) : (
                    <ul>
                        {jobs.map((job) => (
                            <li key={job.id}>{job.title}</li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
};

export default JobList;
