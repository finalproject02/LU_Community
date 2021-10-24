import admissions from "../models/admissionModel.js";
import { Builder, By, until } from 'selenium-webdriver';
import { sendOfferLetterMessage, sendAccurateCredential } from "../services/mailService.js";
import admissionModel from "../models/admissionModel.js";

export const admissionFirstStep = async (req, res) => {
    const { applicant_name, applicant_email, applicant_birth_or_nid_number, applicant_mobile, program_name,
        applicant_fatherName, applicant_motherName, applicant_date_of_birth, father_or_mother_nid} = req.body;

    const fullNamePattern = /^[a-z,',-]+(\s)[a-z,',-]+$/i;
    const namePattern = /[A-Za-z ]{3,30}/i;
    const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    const nid_or_birth_pattern = /[0-9]{8,17}/;
    const phonePattern = /[0-9]{11,13}/;
    try {
        if (!program_name) {
            res.status(400).json({ message: 'Please select a program', field: 'program_name' });
        }
        else if (!applicant_name) {
            res.status(400).json({ message: 'Please provide name', field: 'applicant_name'});
        }
        else if(!fullNamePattern.test(applicant_name)){
            res.status(400).json({ message: 'Please provide your full name', field: 'applicant_name' });
        }
        else if (!applicant_email) {
            res.status(400).json({ message: 'Please provide email', field: 'applicant_email' });
        }
        else if (!emailPattern.test(applicant_email)) {
            res.status(400).json({ message: 'Please provide a proper email', field: 'applicant_email' });
        }
        else if (!applicant_birth_or_nid_number) {
            res.status(400).json({ message: 'Please provide  birth or nid number', field: 'nid_or_birth' });
        }
        else if (!nid_or_birth_pattern.test(applicant_birth_or_nid_number)) {
            res.status(400).json({ message: 'Check birth or nid number length', field: 'nid_or_birth' });
        }
        else if (!applicant_fatherName) {
            res.status(400).json({ message: 'Please provide father name', field: 'applicant_fatherName'});
        }
        else if(!namePattern.test(applicant_fatherName)){
            res.status(400).json({ message: 'Father name should be 3-30 char long', field: 'applicant_fatherName' });
        }
        else if (!applicant_motherName) {
            res.status(400).json({ message: 'Please provide Mother name', field: 'applicant_motherName'});
        }
        else if(!namePattern.test(applicant_motherName)){
            res.status(400).json({ message: 'Mother name should be 3-30 char long', field: 'applicant_motherName' });
        }
        else if (!applicant_mobile) {
            res.status(400).json({ message: 'Please mobile  number', field: 'applicant_mobile' });
        }
        else if (!phonePattern.test(applicant_mobile)) {
            res.status(400).json({ message: 'Please check  length', field: 'applicant_mobile' });
        }
        else if (!applicant_date_of_birth) {
            res.status(400).json({ message: 'Please provide date of birth', field: 'applicant_date_of_birth' });
        } else if (father_or_mother_nid && !nid_or_birth_pattern.test(father_or_mother_nid)) {
            res.status(400).json({ message: 'Please check  nid length', field: 'father_or_mother_nid' });
        } else {
            res.status(200).json({ message: 'firstForm validation competed' })
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const admissionSecondStep = async (req, res) => {
    const { permanent_address, present_address, guardian_name, guardian_contact } = req.body;
    const namePattern = /[A-Za-z ]{3,30}/i;
    const phonePattern = /[0-9]{11,13}/
    try {
        if (!guardian_name) {
            res.status(400).json({ message: 'Please provide guardian name', field: 'guardian_name' })
        } else if (!namePattern.test(guardian_name)) {
            res.status(400).json({ message: 'Guardian name should be 3-30 char long', field: 'guardian_name' });
        }else if (!guardian_contact) {
            res.status(400).json({ message: 'Please provide guardian contact', field: 'guardian_contact' })
        } else if (!phonePattern.test(guardian_contact)) {
            res.status(400).json({ message: 'Please check length', field: 'guardian_contact' })
        }
        else if (!permanent_address) {
            res.status(400).json({ message: 'Please provide permanent address', field: 'permanent_address' })
        } else if (!present_address) {
            res.status(400).json({ message: 'Please provide present address', field: 'present_address' })
        } else {
            res.status(200).json({ message: 'Second form validation completed' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const admissionFinalStep = async (req, res) => {

    const institutePattern = /[A-Za-z ]{10,15}/i;
    const registrationNumberPattern = /[0-9]{10}/;
    const rollNumber = /[0-9]{6}/;
    const { ssc_regis_no, ssc_institution_name, ssc_roll_no, ssc_gpa, hsc_regis_no,
        hsc_institution_name, hsc_roll_no, hsc_gpa, applicant_photo,
        ssc_group, hsc_group, ssc_year, hsc_year, ssc_board, hsc_board
    } = req.body
    try {
        if (!ssc_regis_no) {
            res.status(400).json({ message: 'Please provide SSC registration number', field: 'ssc_regis_no' })
        } else if (!registrationNumberPattern.test(ssc_regis_no)) {
            res.status(400).json({ message: 'Please check SSC registration number length', field: 'ssc_regis_no' })
        }
        else if (!hsc_regis_no) {
            res.status(400).json({ message: 'Please provide HSC registration number', field: 'hsc_regis_no' })
        } else if (!registrationNumberPattern.test(hsc_regis_no)) {
            res.status(400).json({ message: 'Please check HSC registration number length', field: 'hsc_regis_no' })
        }
        else if (!ssc_institution_name) {
            res.status(400).json({ message: 'Please provide SSC institute name', field: 'ssc_institute' })
        } else if (!institutePattern.test(ssc_institution_name)) {
            res.status(400).json({ message: 'Please provide institute full name', field: 'ssc_institute' })
        }
        else if (!hsc_institution_name) {
            res.status(400).json({ message: 'Please provide HSC institute name', field: 'hsc_institute' })
        } else if (!institutePattern.test(hsc_institution_name)) {
            res.status(400).json({ message: 'Please provide institute full name', field: 'hsc_institute' })
        }
        else if (!ssc_roll_no) {
            res.status(400).json({ message: 'Please provide SSC roll number', field: 'ssc_roll_no' })
        } else if (!rollNumber.test(ssc_roll_no)) {
            res.status(400).json({ message: 'Please check SSC roll number length', field: 'ssc_roll_no' })
        }
        else if (!hsc_roll_no) {
            res.status(400).json({ message: 'Please provide HSC roll number', field: 'hsc_roll_no' })
        } else if (!rollNumber.test(hsc_roll_no)) {
            res.status(400).json({ message: 'Please check HSC roll number length', field: 'hsc_roll_no' })
        }
        else if (!ssc_group) {
            res.status(400).json({ message: 'Please select SSC group', field: 'ssc_group' })
        }
        else if (!hsc_group) {
            res.status(400).json({ message: 'Please select HSC group', field: 'hsc_group' })
        }
        else if (!ssc_year) {
            res.status(400).json({ message: 'Please select SSC year', field: 'ssc_year' })
        }
        else if (!hsc_year) {
            res.status(400).json({ message: 'Please select HSC year', field: 'hsc_year' })
        }
        else if (!ssc_board) {
            res.status(400).json({ message: 'Please select SSC board', field: 'ssc_board' })
        }
        else if (!hsc_board) {
            res.status(400).json({ message: 'Please select HSC board', field: 'hsc_board' })
        }
        else if (!ssc_gpa) {
            res.status(400).json({ message: 'Please provide SSC GPA number', field: 'ssc_gpa' })
        } else if (ssc_gpa > 5) {
            res.status(400).json({ message: 'Please provide proper GPA number', field: 'ssc_gpa' })
        }
        else if (!hsc_gpa) {
            res.status(400).json({ message: 'Please provide HSC GPA number', field: 'hsc_gpa' })
        } else if (hsc_gpa > 5) {
            res.status(400).json({ message: 'Please provide proper GPA number', field: 'hsc_gpa' })
        } else if (!applicant_photo) {
            res.status(400).json({ message: 'Please provide applicant photo', field: 'applicant_photo' })
        } else {
            const application = await admissionModel.create(req.body);
            res.status(200).json({ application })
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong..' })
    }
}

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
        let driver = await new Builder().forBrowser('firefox').build();
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
        let driver = await new Builder().forBrowser('firefox').build();

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