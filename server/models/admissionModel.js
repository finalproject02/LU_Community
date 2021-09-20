import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
    program_name: {
        type: String,
        required: true
    },
    applicant_name: {
        type: String,
        required: true
    },
    applicant_email: {
        type: String,
        required: true,
        unique: true
    },
    applicant_birth_or_nid_number: {
        type: Number,
        unique: true,
        required: true,
        minlength: 10,
        maxlength: 17
    },
    applicant_mobile: {
        type: String,
        required: true,
        maxlength: 14,
        minlength: 11
    },
    applicant_fatherName: {
        type: String,
        required: true
    },
    applicant_motherName: {
        type: String,
        required: true
    },
    applicant_date_of_birth: {
        type: String,
        required: true
    },
    ssc_regis_no: {
        type: Number,
        required: true,
        maxlength: 10,
        minlength: 10
    },
    ssc_institution_name: String,
    ssc_roll_no: {
        type: Number,
        required: true,
        minlength: 6,
        maxlength: 6
    },
    ssc_group: String,
    ssc_year: {
        type: Number,
        required: true,
        minlength: 4,
        maxlength: 4
    },
    ssc_board: {
        type: String,
        required: true
    },
    ssc_gpa: {
        type: Number,
        required: true
    },
    ssc_transcript: String,
    ssc_credential_authenticate: {
        type: String,
        default: 'Not checked'
    },

    hsc_regis_no: {
         type: Number,
         required: true,
         maxlength: 10,
         minlength: 10
    },
    hsc_institution_name: String,
    hsc_roll_no: {
         type: Number,
         required: true,
         maxlength: 6,
         minlength: 6
    },
    hsc_group: String,
    hsc_year: {
        type: Number,
        required: true,
        maxlength: 4,
        minlength: 4
    },
    hsc_board: {
        type: String,
        required: true
    },
    hsc_gpa: {
        type: Number,
        required: true
    },
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
        default: 'application padding'
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
    address: String
 },
    {timestamps: true}
)

const admissions = mongoose.model('onlineAdmission', admissionSchema);

export default admissions;