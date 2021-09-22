import React from 'react';
import jahed from "../../images/jahed.jpg";

const StudentDetails = () => {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="card bg-light w-75 shadow rounded my-5">
                        <div class="card-body">
                            <form action="" method="post">
                                <fieldset>
                                    <legend>
                                        <h2 class="textPrimary">
                                            Leading University Admission Form
                                        </h2>
                                    </legend>
                                    <h6 class="card-title textSecondary">
                                        Admission for Undergraduate Programs
                                    </h6>
                                    <hr class="mt-5" />
                                    <fieldset>
                                        <div class="row">
                                            <legend>Basic Info.</legend>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="program" class="form-label"
                                                    >Selected Program</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="name"
                                                        value="CSE"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="name" class="form-label"
                                                    >Full Name of the Applicant</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="name"
                                                        value="Mahdi Hossain Tanvir"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="f_name" class="form-label"
                                                    >Applicant's Father Name</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="f_name"
                                                        value="Masuk Miah"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="f_occupation" class="form-label"
                                                    >Applicant's Father's Occupation</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="f_occupation"
                                                        value="Businessman"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="m_name" class="form-label"
                                                    >Applicant's Mother Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-2"
                                                        id="m_name"
                                                        value="Shahana Akhter"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="m_occupation" class="form-label"
                                                    >Applicant's Mother Occupation
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="m_occupation"
                                                        value="House Wife"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="nid" class="form-label"
                                                    >Father's/Mother's NID No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="nid"
                                                        value="642 3296 4790"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="applicant_mobile" class="form-label"
                                                    >Applicant's Mobile
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="applicant_mobile"
                                                        value="01750511747"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="applicant_email" class="form-label"
                                                    >Applicant's Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        class="form-control w-100 mb-3"
                                                        id="applicant's email"
                                                        value="applicant's email"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label
                                                        for="applicant's_nid_birth"
                                                        class="form-label"
                                                    >Applicant's National ID / Birth Certificate No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="applicant's_nid_birth"
                                                        value="applicant's nid/birth certificate no. "
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="applicant_birthday" class="form-label"
                                                    >Applicant's Date of Birth
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="applicant_birthday"
                                                        value="applicant's date of birth"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="pplicant_gender" class="form-label"
                                                    >Applicant's Gender
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="applicant_birthday"
                                                        value="Male"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="applicant_religion" class="form-label"
                                                    >Applicant's Religion
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="applicant_birthday"
                                                        value="Islam"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label
                                                        for="applicant_nationality"
                                                        class="form-label"
                                                    >Applicant's Nationality
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="applicant_nationality"
                                                        value="applicant's nationality"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="applicant_marital" class="form-label"
                                                    >Applicant's Marital Status
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="applicant_marital"
                                                        value="applicant's marital status"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="applicant_bloodgrp" class="form-label"
                                                    >Applicant's Blood Group
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="applicant_bloodgrp"
                                                        value="applicant's blood group"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr />
                                    <fieldset>
                                        <div class="row">
                                            <legend>Guardian's Info.</legend>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="g_name" class="form-label"
                                                    >Guardian's Name and Address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="g_name"
                                                        value="guardian's name and address"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="g_contact" class="form-label"
                                                    >Guardian's Contact No
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control w-100 mb-3"
                                                        id="g_contact"
                                                        value="guardian's contact no"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr />
                                    <fieldset>
                                        <div class="row">
                                            <legend>Address</legend>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="permanent_address" class="form-label"
                                                    >Permanent Address
                                                    </label>
                                                    <textarea
                                                        class="form-control w-100 mb-3"
                                                        name="Permanent_Address"
                                                        id="permanent_address"
                                                        cols="10"
                                                        rows="4"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="present_address" class="form-label"
                                                    >Present Address
                                                    </label>
                                                    <textarea
                                                        class="form-control w-100 mb-3"
                                                        name="Present_Address"
                                                        id="present_address"
                                                        cols="10"
                                                        rows="4"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr />
                                    <fieldset>
                                        <div class="row">
                                            <legend>Academic Info.</legend>
                                            <div class="col-md-6">
                                                <fieldset>
                                                    <legend>SSC Info.</legend>
                                                    <div class="form-group">
                                                        <label for="ssc_regi" class="form-label"
                                                        >Registration no. of SSC
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="ssc_regi"
                                                            value="ssc registration number"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="ssc_inst_name" class="form-label"
                                                        >Name of the Institution (SSC)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="ssc_inst_name"
                                                            value="ssc institution name"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="ssc_roll" class="form-label"
                                                        >Roll
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="ssc_roll"
                                                            value="ssc roll"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_group" class="form-label"
                                                        >Group
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="ssc_group"
                                                            value="ssc group"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_inst_year" class="form-label"
                                                        >Year
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="ssc_inst_year"
                                                            value="ssc year"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_board" class="form-label"
                                                        >Board
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="ssc_board"
                                                            value="ssc board"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_gpa" class="form-label"
                                                        >GPA
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="ssc_gpa"
                                                            value="ssc gpa"
                                                        />
                                                    </div>

                                                    <div class="mt-3 mb-1">
                                                        <a class="btn bg-success" href="#"
                                                        >Check SSC Result</a
                                                        >
                                                    </div>
                                                    <small class="text-success">
                                                        <i
                                                            class="fa fa-check-circle mr-1"
                                                            aria-hidden="true"
                                                        ></i
                                                        >The result is matched
                                                    </small>
                                                    <br />
                                                    <small class="text-danger d-none">
                                                        <i
                                                            class="fa fa-times-circle mr-1"
                                                            aria-hidden="true"
                                                        ></i
                                                        >The result is not matched
                                                    </small>
                                                </fieldset>
                                            </div>
                                            <div class="col-md-6">
                                                <fieldset>
                                                    <legend>HSC Info.</legend>
                                                    <div class="form-group">
                                                        <label for="hsc_regi" class="form-label"
                                                        >Registration no. of HSC
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="hsc_regi"
                                                            value="hsc registration number"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_inst_name" class="form-label"
                                                        >Name of the Institution (HSC)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="hsc_inst_name"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_roll" class="form-label"
                                                        >Roll
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="hsc_roll"
                                                            value="hsc roll"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_group" class="form-label"
                                                        >Group
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="hsc_group"
                                                            value="hsc group"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_inst_year" class="form-label"
                                                        >Year
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="hsc_inst_year"
                                                            value="hsc year"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_board" class="form-label"
                                                        >Board
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="hsc_board"
                                                            value="hsc board"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="hsc_gpa" class="form-label"
                                                        >GPA
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control w-100 mb-3"
                                                            id="hsc_gpa"
                                                            value="hsc gpa"
                                                        />
                                                    </div>

                                                    <div class="mt-3 mb-1">
                                                        <a class="btn bg-success" href="#"
                                                        >Check HSC Result</a
                                                        >
                                                    </div>
                                                    <small class="text-success"
                                                    ><i
                                                        class="fa fa-check-circle mr-1"
                                                        aria-hidden="true"
                                                    ></i
                                                        >The result is matched</small
                                                    >
                                                    <small class="text-danger d-none">
                                                        <i
                                                            class="fa fa-times-circle mr-1"
                                                            aria-hidden="true"
                                                        ></i
                                                        >The result is not matched
                                                    </small>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr />
                                    <fieldset>
                                        <div class="row">
                                            <legend>Documents</legend>
                                            <div class="col-md-6 d-flex justify-content-center document">
                                                <div class="form-group">
                                                    <label for="applicant_photo" class="form-label">
                                                        Applicant's Photo
                                                    </label>
                                                    <img
                                                        src={jahed}
                                                        class="img-fluid w-75 p-2 img-thumbnail"
                                                        alt="tanvirs Image"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="guardian_photo" class="form-label"
                                                    >Guardian's Photo
                                                    </label>
                                                    <img
                                                        src={jahed}
                                                        class="img-fluid w-75 p-2 img-thumbnail"
                                                        alt="tanvirs Image"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6 d-flex justify-content-center">
                                                <div class="form-group">
                                                    <label for="ssc_transcript" class="form-label"
                                                    >SSC Transcript
                                                    </label>
                                                    <img
                                                        src={jahed}
                                                        class="img-fluid w-75 p-2 img-thumbnail"
                                                        alt="tanvirs Image"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="hsc_transcript" class="form-label"
                                                    >HSC Transcript
                                                    </label>
                                                    <img
                                                        src={jahed}
                                                        class="img-fluid w-75 p-2 img-thumbnail"
                                                        alt="tanvirs Image"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <br />
                                    <div class="d-flex justify-content-between px-3">
                                        <div>
                                            <a href="#" class="btn btn-danger">Reject Request</a>
                                        </div>
                                        <div>
                                            <a href="#" class="btn btn-success"
                                            >Approve Request</a
                                            >
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;