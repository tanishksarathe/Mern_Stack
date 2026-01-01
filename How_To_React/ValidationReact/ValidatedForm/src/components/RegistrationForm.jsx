import React, { useState } from "react";
import toast from "react-hot-toast";

function RegistrationForm() {

    const [details, setDetails] = useState({

        fullname: "",
        email: "",
        mobile: "",
        dob: "",
        qual: "",
        grade: "",
        course: "",
        adr: "",
        city: "",
        pin: "",
        gcontact: "",
        hear: "",
        special: "",


    })

    const [isLoading, setIsLoading] = useState(false);

    const [validationerror, setValidationError] = useState([]);


    const handleChange = () => {

        const { type, checked, value } = e.target;

        setDetails((prev) => ({ ...prev, name: value }));

    }


    const validate = () => {

        let Error = {};

        if(details.fullname.length < 3){
            Error.fullname = "Length of name must be more than 3 characters";
        }else{

            if(!/^[A-Za-z ]$/.test(details.fullname)){

            }

        }

    }


    const submit = (e) => {

        e.preventDefault();
        setIsLoading(true);

        if (!validate()) {
            setIsLoading(false);
            return;
        }

        try {

            console.log(details);
            toast.success('Student Registration Successful');

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <>
            <header className="sticky-top z-3">
                <div className="container-fluid px-3 py-1 d-flex bg-primary justify-content-between">
                    <div className="d-flex gap-2">
                        <img
                            src="/react.svg"
                            alt="logo"
                            width="50px"
                            height="50px"
                            className="rounded-circle"
                        />
                        <h1 className="text-light">Registration Form</h1>
                    </div>
                    <button className="btn btn-info">Student Login</button>
                </div>
            </header>

            <main>
                <div className="container bg-white border rounded shadow p-3 mt-3">
                    <div className="border rounded border-dark p-3 pt-4 position-relative d-flex flex-column space-y-3">
                        <span
                            className="px-2 fs-5 position-absolute text-primary"
                            style={{ top: "-15px", backgroundColor: "aliceblue" }}
                        >
                            Personal Information
                        </span>
                        <div className="d-flex">
                            <label htmlFor="fullname" className="form-label w-25">
                                Full Name <sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex flex-column w-100">
                                <input
                                    type="text"
                                    className="form-control focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                                    id="fullname"
                                    name="fullname"
                                    value={details.fullname}
                                    onChange={handleChange}
                                    required
                                />
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="namevali"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="email" className="form-label w-25">
                                Email Address <sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex flex-column w-100">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={details.value}
                                    onChange={handleChange}
                                    required
                                />
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="emailvali"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="mobile" className="form-label w-25">
                                Mobile Number <sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex flex-column w-100">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="mobile"
                                    name="mobile"
                                    value={details.mobile}
                                    onChange={handleChange}
                                    required
                                />
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="phonevali"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="dob" className="form-label w-25">
                                Date of Birth <sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex flex-column w-100">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dob"
                                    name="dob"
                                    value={details.dob}
                                    onChange={handleChange}
                                    required
                                />
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="dobvali"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="border rounded border-dark p-3 pt-4 position-relative d-flex flex-column gap-3">
                        <span
                            className="px-2 fs-5 position-absolute text-primary"
                            style={{ top: "-15px", backgroundColor: "aliceblue" }}            >
                            Academic Details
                        </span>
                        <div className="d-flex">
                            <label htmlFor="qual" className="form-label w-25">
                                Qualifications <sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex flex-column w-100">
                                <select name="qual" id="qual"
                                    onChange={handleChange}
                                    value={details.qual}
                                    className="form-select">
                                    <option value="">--Select Qualification</option>
                                    <option value="secondary">Secondary Schooling</option>
                                    <option value="senior secondary">Senior Secondary</option>
                                    <option value="graduation">Graduation</option>
                                    <option value="postgraduation">Post Graduation</option>
                                    <option value="phd">P.hd</option>
                                </select>
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="qualvali"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="grade" className="form-label w-25">
                                Percentage/Grade <sup className="text-danger">*</sup>:
                            </label>
                            <div className="d-flex flex-column w-100">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="grade"
                                    name="grade"
                                    value={details.grade}
                                    onChange={handleChange}
                                    required
                                />
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="gradevali"
                                >
                                    Remaining
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="border rounded border-dark p-3 pt-4 position-relative d-flex flex-column gap-3">
                        <span
                            className="px-2 fs-5 position-absolute text-primary"
                            style={{ top: "-15px", backgroundColor: "aliceblue" }}            >
                            Course Information
                        </span>
                        <div className="d-flex">
                            <label htmlFor="course" className="form-label w-25">
                                Available Courses <sup className="text-danger">*</sup> :
                            </label>
                            <div className="w-100 d-flex flex-column">
                                <select name="course" id="course"
                                    value={details.course}
                                    onChange={handleChange}
                                    className="form-select">
                                    <option value="">--Select Course</option>
                                    <option value="Full Stack Web Development">
                                        Full Stack Web Development
                                    </option>
                                    <option value="Data Science with Python">
                                        Data Science with Python
                                    </option>
                                    <option value="Data Analytics">Data Analytics</option>
                                    <option value="Java + DSA">Java + DSA</option>
                                    <option value="Robotics">Robotics</option>
                                </select>
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="coursevali"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="batch" className="form-label w-25">
                                Preffered Batch <sup className="text-danger">*</sup>:
                            </label>
                            <div className="d-flex justify-content-evenly gap-2">
                                <div>
                                    <input
                                        type="checkbox"
                                        name="batch"
                                        id="morning"
                                        // value="morning"
                                        className="form-check-input"
                                    />
                                    <span>Morning</span>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="batch"
                                        id="afternoon"
                                        // value="afternoon"
                                        className="form-check-input"
                                    />
                                    <span>Afternoon</span>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="batch"
                                        id="eve"
                                        // value="evening"
                                        className="form-check-input"
                                    />
                                    <span>Evening</span>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="batch"
                                        id="weekends"
                                        // value="weekends"
                                        className="form-check-input"
                                    />
                                    <span>Weekends</span>
                                </div>
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="daysvali"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="border rounded border-dark p-3 pt-4 position-relative d-flex flex-column gap-3">
                        <span
                            className="px-2 fs-5 position-absolute text-primary"
                            style={{ top: "-15px", backgroundColor: "aliceblue" }}            >
                            Residential Address
                        </span>
                        <div className="d-flex">
                            <label htmlFor="adr" className="form-label w-25">
                                Address <sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex">
                                <textarea
                                    name="adr"
                                    className="form-control"
                                    id="adr"
                                    value={details.adr}
                                    onChange={handleChange}
                                ></textarea>
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="addvali"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <label htmlFor="city" className="form-label w-25">
                                City <sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    id="city"
                                    value={details.city}
                                    onChange={handleChange}
                                />
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="cityvali"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <label htmlFor="pin" className="form-label w-25">
                                Pin Code <sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="pin"
                                    id="pin"
                                    value={details.pin}
                                    onChange={handleChange}
                                />
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="pinvali"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="border rounded border-dark p-3 pt-4 position-relative d-flex flex-column gap-3">
                        <span
                            className="px-2 fs-5 position-absolute text-primary"
                            style={{ top: "-15px", backgroundColor: "aliceblue" }}            >
                            Guardian Details
                        </span>
                        <div className="d-flex">
                            <label htmlFor="guardian" className="form-label w-25">
                                Guardian's Full Name <sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex flex-column w-100">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="guardian"
                                    id="guardian"
                                    value={details.guardian}
                                    onChange={handleChange}
                                />
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="gnamevali"
                                ></div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <label htmlFor="gcontact" className="form-label w-25">
                                Guardian's Contact Number<sup className="text-danger">*</sup>:
                            </label>
                            <div>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="gcontact"
                                    id="gcontact"
                                    value={details.gcontact}
                                    onChange={handleChange}
                                />
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="gphonevali"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="border rounded border-dark p-3 pt-4 position-relative d-flex flex-column gap-3">
                        <span
                            className="px-2 fs-5 position-absolute text-primary"
                            style={{ top: "-15px", backgroundColor: "aliceblue" }}            >
                            Additional Details
                        </span>
                        <div className="d-flex">
                            <label htmlFor="hear" className="form-label w-25">
                                Source <sup className="text-danger">*</sup> :
                            </label>
                            <div className="w-100 d-flex flex-column">
                                <select name="hear" id="hear"
                                    value={details.hear}
                                    onChange={handleChange} className="form-select">
                                    <option value="">--Where did you hear about us....</option>
                                    <option value="Friends">Friends</option>
                                    <option value="Online ads">Online ads</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="NewsPaper">NewsPaper</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="hearvali"
                                ></div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <label htmlFor="special" className="form-label w-25">
                                Special Requirements<sup className="text-danger">*</sup> :
                            </label>
                            <div className="d-flex">
                                <textarea
                                    name="special"
                                    className="form-control"
                                    id="special"
                                    value={details.special}
                                ></textarea>
                                <div
                                    className="Error d-flex justify-content-end fs-6 text-danger"
                                    id="specialvali"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button onClick={submit} className="btn btn-success">
                        Submit
                    </button>
                </div>
            </main>
        </>
    );
}

export default RegistrationForm;
