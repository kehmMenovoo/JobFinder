const DiffJobs = ({jobType, setJobType}) => {
    const getValueType = (e) => {
        setJobType(e.target.value)
        window.scrollTo(0, 0);
    }

    return (
        <>
            <select className="form-select" aria-label="Default select job-type" value={jobType} onChange={e => getValueType(e)}>
                <option value="">All Types</option>
                <option value="agriculture">Agriculture, Food, and Natural Resources</option>
                <option value="architecture">Architecture and Construction</option>
                <option value="art">Arts, Audio/Video Technology, and Communication</option>
                <option value="business">Business and Finance</option>
                <option value="education">Education and Training</option>
                <option value="government">Government and Public Administration</option>
                <option value="health">Health Science</option>
                <option value="IT">Information Technology</option>
                <option value="law">Law, Public Safety, Corrections, and Security</option>
                <option value="marketing">Marketing</option>
                <option value="science">Science, Technology, Engineering, and Math</option>
                <option value="otherType">Others</option>
            </select>
        </>
    )
}

export default DiffJobs
