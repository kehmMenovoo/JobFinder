const DurationJobs = ({jobTime, setJobTime}) => {
    const getValueType = (e) => {
        setJobTime(e.target.value)
        window.scrollTo(0, 0);
    }
    return (
        <>
            <select className="form-select" aria-label="Default select job-time" value={jobTime} onChange={e => getValueType(e)}>
                <option value="">Defualt Time</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="volunteer">Volunteer</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
                <option value="temporary">Temporary</option>
                <option value="others">Others</option>
            </select>
        </>
    )
}

export default DurationJobs
