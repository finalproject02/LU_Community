import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
    program_name: String,
    applicant_name: String,
    applicant_email: String,
    applicant_birth_or_nid_number:Number,
    applicant_mobile: String,

    applicant_fatherName: String,
    applicant_motherName: String,
    applicant_date_of_birth: String,
    ssc_regis_no: Number,
    ssc_institution_name: String,
    ssc_roll_no: Number,

    ssc_group: String,
    ssc_year: Number,
    ssc_board: String,
    ssc_gpa: Number,
    ssc_transcript: String,
    ssc_credential_authenticate: {
        type: String,
        default: 'Not checked'
    },

    hsc_regis_no: Number,
    hsc_institution_name: String,
    hsc_roll_no: Number,
    hsc_group: String,
    hsc_year: Number,
    hsc_board: String,
    hsc_gpa: Number,
    hsc_transcript: String,
    hsc_credential_authenticate: {
        type: String,
        default: 'Not checked'
    },
    payment: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: 'application pending'
    },
    applicant_gender: String,
    applicant_nationality: String,
    applicant_religion: String,
    applicant_marital_status: String,
    applicant_father_occupation: String,
    applicant_mother_occupation: String,
    applicant_photo: String,
    guardian_name: String,
    guardian_contact: String,
    guardian_photo: String,
    permanent_address: String,
    present_address: String,
    father_or_mother_nid: Number,
    applicant_blood_group: String
 },
    {timestamps: true}
)

const admissions = mongoose.model('onlineAdmission', admissionSchema);

export default admissions;