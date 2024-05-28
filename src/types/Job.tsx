interface Job {
    id: string;
    job_name: string;
    company: string;
    logo_url: string;
    background_images_urls: string[];
    start_date: Date;
    end_date: Date;
    date_range_string: string;
    location: string;
    work_location: string; // remote, hybrid, on-site
    description: string[];
    accomplishments: string[];
    skills: string[];
}