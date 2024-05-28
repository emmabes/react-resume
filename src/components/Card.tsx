// import React from "react";
// import { useEffect, useState } from "react";

import '../styles/Card.css';
import '../types/Job';

export default function JobCard(props: any) {

    return (
        <div>
            <h2>{props.job_data.job_name}</h2>
            <h3>{props.job_data.company}</h3>
        </div>
    );
}