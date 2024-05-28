// import React from "react";
// import { useEffect, useState } from "react";

import '../styles/Card.css';
import '../types/Job';

export default function JobCard(props: any) {


    const get_json = (props: any) => {
        return props.json_file;
    }
    const job = props.job_data;
    return (
        <div>
            <h2>{job.job_name}</h2>
            <h3>{job.company}</h3>
        </div>
    );
}