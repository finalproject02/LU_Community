import admissions from "../models/admissionModel.js";
import { Builder, By, until } from 'selenium-webdriver';
import { sendOfferLetterMessage, sendAccurateCredential } from "../services/mailService.js";

export const firstStepForm = async (req, res) => {
    try {

    } catch (error) {

    }
}

export const secondStepForm = async (req, res) => {
    try {

    } catch (error) {

    }
}

export const finalStepForm = async (req, res) => {
    try {

    } catch (error) {

    }
}
export const admission = async (req, res) => {
    const namePattern = /[A-Za-z ]{3,30}/i;
    const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    const mobilePattern = /(\+88)?-?01[3-9]\d{8}/;
    const nid_or_birth_pattern = /[0-9]{8,17}/;
    const addressPattern = /[A-Za-z0-9'\.\-\s\,]{3, 100}/;
    const registrationNumber = /[0-9]{10}/;
    const rollNumber = /[0-9]{6}/;
    const gpa = /^[0-4]\.\d{2}/;

    const { program_name, applicant_name, applicant_email, applicant_birth_or_nid_number, applicant_mobile, applicant_fatherName, applicant_motherName, applicant_date_of_birth, ssc_regis_no, ssc_institution_name, ssc_roll_no, ssc_group, ssc_year, ssc_board, ssc_gpa, ssc_transcript, hsc_regis_no, hsc_institution_name, hsc_roll_no, hsc_group, hsc_year, hsc_board, hsc_gpa, hsc_transcript, applicant_gender, applicant_nationality, applicant_religion, applicant_marital_status, applicant_father_occupation, applicant_mother_occupation, applicant_photo, guardian_name, guardian_contact, guardian_photo, permanent_address, present_address, father_or_mother_nid, applicant_blood_group } = req.body;


    if (!applicant_name || !applicant_email || !applicant_birth_or_nid_number || !applicant_mobile || !applicant_fatherName || !applicant_motherName || !applicant_date_of_birth || !applicant_nationality || !applicant_father_occupation || !applicant_mother_occupation || !father_or_mother_nid || !applicant_blood_group) {
        if (!namePattern.test(applicant_name) || !namePattern.test(applicant_fatherName) || !namePattern.test(applicant_motherName) || !namePattern.test(applicant_nationality) || !namePattern.test(applicant_father_occupation) || !namePattern.test(applicant_mother_occupation)) {
            res.status(400).json({ message: 'It should be 3-30 char long' });
        }
        if (!emailPattern.test(applicant_email)) {
            res.status(400).json({ message: 'please give a valid email' });
        }
        if (!mobilePattern.test(applicant_mobile)) {
            res.status(400).json({ message: 'please give a valid phone number' });
        }
        if (!nid_or_birth_pattern.test(applicant_birth_or_nid_number) || !nid_or_birth_pattern.test(father_or_mother_nid)) {
            res.status(400).json({ message: 'provide valid info' });
        }
        else {
            res.status(400).json({ message: 'Please fil all field' });
        }
    }
    else if (!permanent_address || !present_address || !guardian_name || !guardian_contact) {
        if (!namePattern.test(guardian_name)) {
            res.status(400).json({ message: 'It should be 3-30 char long' });
        }
        if (!mobilePattern.test(guardian_contact)) {
            res.status(400).json({ message: 'please give a valid phone number' });
        }
        if (!addressPattern.test(permanent_address) || !addressPattern.test(present_address)) {
            res.status(400).json({ message: 'Address should be within 100 char' });
        }
        else {
            res.status(400).json({ message: 'Please fil all field' });
        }
    }
    else if (!ssc_regis_no || !ssc_institution_name || !ssc_roll_no || !ssc_gpa || !ssc_transcript || !hsc_regis_no || !hsc_institution_name || !hsc_roll_no || !hsc_gpa || !hsc_transcript || !applicant_photo || !guardian_photo) {
        if (!namePattern.test(ssc_institution_name) || !namePattern.test(hsc_institution_name)) {
            res.status(400).json({ message: 'It should be 3-30 char long' });
        }
        if (!registrationNumber.test(ssc_regis_no) || !registrationNumber.test(hsc_regis_no)) {
            res.status(400).json({ message: 'Invalid Registration number' });
        }
        if (!rollNumber.test(ssc_roll_no) || !rollNumber.test(hsc_roll_no)) {
            res.status(400).json({ message: 'Invalid Roll number' });
        }
        if (!gpa.test(ssc_gpa) || !gpa.test(hsc_gpa)) {
            res.status(400).json({ message: 'Invalid GPA example : 3.10' });
        }
        else {
            res.status(400).json({ message: 'Please fil all field' });
        }
    }
    try {
        const newAdmission = new admissions(req.body);
        await newAdmission.save()
        res.status(200).json({ application: newAdmission, success: true, message: 'Application successfully completed. We will with you contact very soon.' })

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
};

export const deleteApplications = async (req, res) => {
    const { id } = req.params
    try {
        await admissions.findByIdAndDelete(id);
        res.status(200).json({ message: 'Application deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' })
    }
}

export const getApplications = async (req, res) => {
    try {
        const applications = await admissions.find();
        res.status(200).json({ applications: applications });
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' })
    }
}

export const getApplication = async (req, res) => {
    const { id } = req.params
    try {
        const application = await admissions.findOne({ _id: id });
        if (application.ssc_credential_authenticate === 'authenticated credential' && application.hsc_credential_authenticate === 'authenticated credential' && application.status === 'application pending') {
            await sendOfferLetterMessage(application.applicant_email, application.applicant_name);
            await admissions.findByIdAndUpdate(id, { status: 'sent email for payment' })
            res.status(200).json({ application: application })

        } else if (application.ssc_credential_authenticate === 'not authenticated' && application.hsc_credential_authenticate === 'not authenticated' && application.status === 'application pending') {
            await sendAccurateCredential(application.applicant_email, application.applicant_name);
            await admissions.findByIdAndUpdate(id, { status: 'sent email for accurate information' })
            res.status(200).json({ application: application })
        } else {
            res.status(200).json({ application: application })
        }

    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

export const verifySSCCredentialChecking = async (req, res) => {
    const { id } = req.params;
    try {
        const application = await admissions.findById(id);
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('http://www.educationboardresults.gov.bd/');
            await selectExam("ssc", driver)
            await selectYear(application.ssc_year, driver)
            await selectBoard(application.ssc_board.toLowerCase(), driver)
            await driver.findElement(By.name("roll")).sendKeys(application.ssc_roll_no)
            await driver.findElement(By.name("reg")).sendKeys(application.ssc_regis_no)
            let p = await driver.findElement(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/form/table/tbody/tr/td[2]/fieldset/table/tbody/tr[7]/td[2]")).getText();
            driver.wait(until.elementsLocated(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/form/table/tbody/tr/td[2]/fieldset/table/tbody/tr[7]/td[3]"), 1000));
            let l = p.length - 1
            let re = p[0]
            let q = p[l]
            let firstNumber = parseInt(re)
            let secondNumber = parseInt(q)
            let addition = firstNumber + secondNumber

            await driver.findElement(By.css("#value_s")).sendKeys(addition)
            try {
                await driver.findElement(By.css("#button2")).click().then(async () => {
                    await driver.findElement(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody")).getText().then(async (rx) => {
                        let result = rx;
                        await driver.quit();
                        const correct = await FinalResult(result, application.applicant_name, application.ssc_gpa, application.applicant_fatherName, application.applicant_motherName);
                        if (correct === true) {
                            await admissions.findByIdAndUpdate(id, { ssc_credential_authenticate: 'authenticated credential' }, { new: true })
                            res.status(200).json({ message: 'SSC Credential is  valid' })
                        } else {
                            await admissions.findByIdAndUpdate(id, { ssc_credential_authenticate: 'not authenticated' }, { new: true })
                            res.status(200).json({ message: 'SSC Credential is not valid' })
                        }

                    })
                })
            } catch (error) {
                console.log('Something went wrong');
                await admissions.findByIdAndUpdate(id, { ssc_credential_authenticate: 'not authenticated' }, { new: true })
                res.status(200).json({ message: 'SSC Credential is not valid' })
                await driver.quit();
            }
        } catch (error) {
            await admissions.findByIdAndUpdate(id, { ssc_credential_authenticate: 'not authenticated' }, { new: true })
            res.status(200).json({ message: 'SSC Credential is not valid' })
        }
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

export const verifyHSCCredentialChecking = async (req, res) => {
    const { id } = req.params;
    try {
        const application = await admissions.findById(id);
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('http://www.educationboardresults.gov.bd/');
            await selectExam('hsc', driver);
            await selectYear(application.hsc_year, driver);
            await selectBoard(application.hsc_board.toLowerCase(), driver);
            await driver.findElement(By.name('roll')).sendKeys(application.hsc_roll_no);
            await driver.findElement(By.name('reg')).sendKeys(application.hsc_regis_no);

            let p = await driver.findElement(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/form/table/tbody/tr/td[2]/fieldset/table/tbody/tr[7]/td[2]")).getText();
            driver.wait(until.elementsLocated(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/form/table/tbody/tr/td[2]/fieldset/table/tbody/tr[7]/td[3]"), 1000));
            let l = p.length - 1
            let re = p[0]
            let q = p[l]
            let firstNumber = parseInt(re)
            let secondNumber = parseInt(q)
            let addition = firstNumber + secondNumber

            await driver.findElement(By.css("#value_s")).sendKeys(addition)
            try {
                await driver.findElement(By.css("#button2")).click().then(async () => {
                    await driver.findElement(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody")).getText().then(async (rx) => {
                        let result = rx;
                        await driver.quit();
                        const correct = await FinalResult(result, application.applicant_name, application.hsc_gpa, application.applicant_fatherName, application.applicant_motherName);
                        if (correct === true) {
                            await admissions.findByIdAndUpdate(id, { hsc_credential_authenticate: 'authenticated credential' }, { new: true })
                            res.status(200).json({ message: 'HSC Credential is valid' })
                        } else {
                            await admissions.findByIdAndUpdate(id, { hsc_credential_authenticate: 'not authenticated' }, { new: true })
                            res.status(200).json({ message: 'HSC Credential is not valid' })
                        }

                    })
                })
            } catch (error) {
                console.log('Something went wrong');
                await admissions.findByIdAndUpdate(id, { hsc_credential_authenticate: 'not authenticated' }, { new: true })
                res.status(200).json({ message: 'HSC Credential is not valid' })
                await driver.quit();
            }
        } catch (error) {
            console.log('Something went wrong');
            await admissions.findByIdAndUpdate(id, { hsc_credential_authenticate: 'not authenticated' }, { new: true })
            res.status(200).json({ message: 'HSC Credential is not valid' });
            await driver.quit();
        }
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}


const selectExam = async (value, driver) => {
    const valueSelected = By.css('#exam' + ' option[value="' + value + '"]')
    await driver.findElement(By.css('#exam')).click();
    await driver.findElement(valueSelected).click()
}
const selectYear = async (value, driver) => {
    const valueSelected = By.css('#year' + ' option[value="' + value + '"]')
    await driver.findElement(By.css('#year')).click();
    await driver.findElement(valueSelected).click()
}
const selectBoard = async (value, driver) => {
    const valueSelected = By.css('#board' + ' option[value="' + value + '"]')
    await driver.findElement(By.css('#board')).click();
    await driver.findElement(valueSelected).click()
}

const FinalResult = async (S, Name, Result, FatherName, MotherName) => {
    let name = await checkResult(Name, S);
    let result = await checkResult(Result, S);
    let fatherName = await checkResult(FatherName, S);
    let motherName = await checkResult(MotherName, S)
    if (name === true && result === true && fatherName === true && motherName === true) {
        return true
    } else {
        return false
    }
}

const checkResult = async (res, s) => {
    if (typeof res === 'string') {
        const caseIgnore = new RegExp(res, 'i');
        let re = s.search(caseIgnore);
        if (re > 0) {
            return true
        } else {
            return false
        }
    } else {
        let k = res.toString()
        let re = s.search(k);
        if (re > 0) {
            return true
        } else {
            return false
        }
    }

}