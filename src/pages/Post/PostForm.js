import Copyright from '../Home/Footer/Copyright';
import { Editor } from '@tinymce/tinymce-react';
import FooterMenu from '../Home/Footer/FooterMenu';
import React, { useContext, useRef } from 'react'
import UploadImage from "../../images/upload-logo.jpg";
import DataContext from '../../contexts/DataContext';
import Button from "@material-ui/core/Button";


const PostForm = () => {
    const {selectedImage, setSelectedImage, setAvatar, company, setCompany, locationCompany, 
        setLocationCompany, due, setDue, position, setPosition, typeJob, 
        setTypeJob, durationType, setDurationType, entryLevel, setEntrylevel, department, setDepartment,
        subDepartment, setSubDepartment, report, setReport, description, setDescription, handlePostJob} = useContext(DataContext);

    const inputRef = useRef();

    const triggerSelect = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    // This function will be triggered when the file field change
    const imageChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
        // const fs = require('fs');
        // fs.writeFile(`../images/${e.target.files[0].name}`, e.target.files[0], (err) => {
        //     if(err) throw err;
        // })
        setAvatar(UploadImage);
      }
    };
  
    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
      setSelectedImage();
    };

    const handleEditorChange = (e) => {
        setDescription(e.target.getContent());
    }
    return (
        <div className="container mt-5">
            <form className="job-post" autoComplete='off' onSubmit={handlePostJob}>
                <div className="form-group-heading">
                    <div className='logo-post'>
                            <div className="form-input">
                                <div className="preview" onClick={triggerSelect}>
                                    <img id="img_file-preview" src={selectedImage ? URL.createObjectURL(selectedImage) : UploadImage} alt="thumb" />
                                    {!selectedImage && <p className="upload-msg">Upload Logo</p>}
                                    
                                </div>
                                <input type="file" id="img_file" accept="image/*" ref={inputRef} onChange={imageChange} />
                            </div>
                        {selectedImage && 
                            <div className='image-tool'>
                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    onClick={removeSelectedImage} 
                                    style={{fontSize: "12px", padding: "5px"}}
                                >
                                    Remove
                                </Button>
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    onClick={triggerSelect}
                                    style={{fontSize: "12px", padding: "5px"}}
                                >
                                    Change
                                </Button>
                            </div>}
                    </div>
                   
                    <div className="form-group-content">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control box col-1" 
                                required 
                                placeholder="Company/Organization..." 
                                id="job_position" 
                                value={company} 
                                onChange={e => setCompany(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control box col-1 box-com" 
                                required 
                                placeholder="Job Positions..."
                                id="job_company" 
                                value={position}
                                onChange={e => setPosition(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="publish-btn">
                        <input className="pub-btn" type="submit" value="Publish" />
                    </div>
                </div>

                <hr/>
                <div className="form-group row">
                    <label for="closing_date" className="col-2 col-form-label">Closing Date<sup style={{color: "red"}}>*</sup>:</label>
                    <div className="form-group col-2">
                        <input 
                            type="date" 
                            className="form-control selectForm box box-1" 
                            id="closing_date" 
                            value={due}
                            onChange={e => setDue(e.target.value)}
                            style={!due ? {paddingRight: "10px", color: "gray"} : {paddingRight: "10px"}}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_type" className="col-2 col-form-label">Job Type<sup style={{color: "red"}}>*</sup>:</label>
                    <div className="form-group col-2">
                        <select 
                            className="form-select selectForm box box-2" 
                            required 
                            value={typeJob} 
                            id="job_type" 
                            onChange={e => setTypeJob(e.target.value)}
                            style={typeJob ? {}:{color: "gray"}}
                        >
                            <option value="">Select an option</option>
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
                    </div>
                </div>
                <div className="form-group row">
                    <label for="entry_type" className="col-2 col-form-label">Entry Level<sup style={{color: "red"}}>*</sup>:</label>
                    <div className="form-group col-2">
                        <select className="form-select selectForm box box-2" id="entry_type" required 
                            value={entryLevel} onChange={e => setEntrylevel(e.target.value)}
                            style={entryLevel ? {}:{color: "gray"}}
                        >
                            <option value="">Select an option</option>
                            <option value="entry">Entry-Level</option>
                            <option value="experienced">Experienced Level</option>
                            <option value="executive">Executive</option>
                            <option value="senior-executive">Senior Executive</option>
                            <option value="manager">Manager/Supervisor</option>
                            <option value="senior-manager">Senior Manager/Supervisor</option>
                            <option value="othersLevel">Others</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="duration_type" className="col-2 col-form-label">Duration Type<sup style={{color: "red"}}>*</sup>:</label>
                    <div className="form-group col-2">
                        <select className="form-select selectForm box box-2" id="duration_type" required 
                            value={durationType} onChange={e => setDurationType(e.target.value)}
                            style={durationType ? {}:{color: "gray"}}
                        >
                            <option value="">Select an option</option>
                            <option value="full-time">Full-Time</option>
                            <option value="part-time">Part-Time</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="internship">Internship</option>
                            <option value="contract">Contract</option>
                            <option value="temporary">Temporary</option>
                            <option value="otherTime">Others</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_location" className="col-2 col-form-label">Job Location<sup style={{color: "red"}}>*</sup>:</label>
                    <div className="form-group col-4">
                        <input 
                            type="text" 
                            className="form-control box box-2 col-1" 
                            placeholder="Job Location..." 
                            id="job_location" 
                            value={locationCompany}
                            required
                            onChange={e => setLocationCompany(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_department" className="col-2 col-form-label">Department:</label>
                    <div className="form-group col-4">
                        <input 
                            type="text" 
                            className="form-control box box-2 col-1" 
                            placeholder="Department..." 
                            id="job_department" 
                            value={department}
                            onChange={e => setDepartment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_subdepartment" className="col-2 col-form-label">Sub-Department:</label>
                    <div className="form-group col-4">
                        <input 
                            type="text" 
                            className="form-control box box-2 col-1" 
                            placeholder="Sub-Department..."
                            id="job_subdepartment" 
                            value={subDepartment}
                            onChange={e => setSubDepartment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_reportto" className="col-2 col-form-label">Report to:</label>
                    <div className="form-group col-4">
                        <input 
                            type="text" 
                            className="form-control box box-2 col-1" 
                            placeholder="Report to..." 
                            id="job_reportto" 
                            value={report}
                            onChange={e => setReport(e.target.value)}
                        />
                    </div>
                </div>
                <p className="col-form-label">Job Description:</p>
                <Editor
                    className="post-des"
                    required
                    init={{
                        menubar: false,
                        plugins: 'link image code video autoresize',
                        toolbar: 'undo redo | bold italic underline link strikethrough blockquote align backcolor | removeformat image video help autoresize',
                        toolbar_location: 'bottom',
                        statusbar: false,
                        placeholder: "Type your message...",
                    }}
                    value={description}
                    onChange={handleEditorChange}
                />
                <br /><br />
                <div className="publish-btn">
                    <input className="pub-btn" type="submit" value="Publish" />
                </div>
            </form>
            <FooterMenu />
            <Copyright />
        </div>
    )


}

export default PostForm