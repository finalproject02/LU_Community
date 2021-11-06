import { Builder, By, until } from 'selenium-webdriver';
import { sendOfferLetterMessage, sendAccurateCredential } from "../services/mailService.js";
import {smsForAccurateCredential, smsForAdmissionFee} from "../services/smsService.js";
import userModel from "../models/userModel.js";

export const admissionFirstStep = async (req, res) => {
    const { birth_or_nid_number,  department, father_name, mother_name, date_of_birth} = req.body;

    const namePattern = /[A-Za-z ]{3,30}/i;
    const nid_or_birth_pattern = /[0-9]{8,17}/;
    try {
        if (!department) {
            res.status(400).json({ message: 'Please select a program', field: 'department' });
        }

        else if (!birth_or_nid_number) {
            res.status(400).json({ message: 'Please provide  birth or nid number', field: 'nid_or_birth' });
        }
        else if (!nid_or_birth_pattern.test(birth_or_nid_number)) {
            res.status(400).json({ message: 'Check birth or nid number length', field: 'nid_or_birth' });
        }
        else if (!father_name) {
            res.status(400).json({ message: 'Please provide father name', field: 'father_name'});
        }
        else if(!namePattern.test(father_name)){
            res.status(400).json({ message: 'Father name should be 3-30 char long', field: 'father_name' });
        }
        else if (!mother_name) {
            res.status(400).json({ message: 'Please provide Mother name', field: 'mother_name'});
        }
        else if(!namePattern.test(mother_name)){
            res.status(400).json({ message: 'Mother name should be 3-30 char long', field: 'mother_name' });
        }
        else if (!date_of_birth) {
            res.status(400).json({ message: 'Please provide date of birth', field: 'date_of_birth' });
        }  else {
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
        hsc_institution_name, hsc_roll_no, hsc_gpa, profile_picture,
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
        } else if (!profile_picture) {
            res.status(400).json({ message: 'Please provide photo', field: 'photo' })
        } else {
            await userModel.findByIdAndUpdate(req.user.id, req.body)
            const application = await userModel.findByIdAndUpdate(req.user.id, { application_status: 'application pending', position: 'credential submitted', password: null })
            res.status(200).json({ application })
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong..' })
    }
}


export const acceptApplication = async (req, res) => {
    const { id } = req.params
    try {
        const application = await userModel.findOne({ _id: id });
            await sendOfferLetterMessage(application.applicant_email, application.applicant_name);
            await userModel.findByIdAndUpdate(id, {application_status: 'sent email for payment'});
            smsForAdmissionFee(application.name, application.mobile)
            res.status(200).json({message: 'Accept success'})


    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

export const rejectApplication = async (req, res) => {
    const { id } = req.params
    try {
        const application = await userModel.findOne({ _id: id });
            await sendAccurateCredential(application.applicant_email, application.applicant_name);
            smsForAccurateCredential(application.name, application.mobile);
            await userModel.findByIdAndDelete(id)
            res.status(200).json({ message: 'remove success' })

    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

export const verifySSCCredentialChecking = async (req, res) => {
    const { id } = req.params;
    try {
        const application = await userModel.findById(id);
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
                        const correct = await FinalResult(result, application.name, application.ssc_gpa, application.father_name, application.mother_name);
                        if (correct === true) {
                            await userModel.findByIdAndUpdate(id, { ssc_credential_authenticate: 'authenticated credential' }, { new: true })
                            res.status(200).json({ message: 'SSC Credential is  valid' })
                        } else {
                            await userModel.findByIdAndUpdate(id, { ssc_credential_authenticate: 'not authenticated' }, { new: true })
                            res.status(200).json({ message: 'SSC Credential is not valid' })
                        }

                    })
                })
            } catch (error) {
                console.log('Something went wrong');
                await userModel.findByIdAndUpdate(id, { ssc_credential_authenticate: 'not authenticated' }, { new: true })
                res.status(200).json({ message: 'SSC Credential is not valid' })
                await driver.quit();
            }
        } catch (error) {
            await userModel.findByIdAndUpdate(id, { ssc_credential_authenticate: 'not authenticated' }, { new: true })
            res.status(200).json({ message: 'SSC Credential is not valid' })
        }
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

export const verifyHSCCredentialChecking = async (req, res) => {
    const { id } = req.params;
    try {
        const application = await userModel.findById(id);
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
                        const correct = await FinalResult(result, application.name, application.hsc_gpa, application.father_name, application.mother_name);
                        if (correct === true) {
                            await userModel.findByIdAndUpdate(id, { hsc_credential_authenticate: 'authenticated credential' }, { new: true })
                            res.status(200).json({ message: 'HSC Credential is valid' })
                        } else {
                            await userModel.findByIdAndUpdate(id, { hsc_credential_authenticate: 'not authenticated' }, { new: true })
                            res.status(200).json({ message: 'HSC Credential is not valid' })
                        }

                    })
                })
            } catch (error) {
                console.log('Something went wrong');
                await userModel.findByIdAndUpdate(id, { hsc_credential_authenticate: 'not authenticated' }, { new: true })
                res.status(200).json({ message: 'HSC Credential is not valid' })
                await driver.quit();
            }
        } catch (error) {
            console.log('Something went wrong');
            await userModel.findByIdAndUpdate(id, { hsc_credential_authenticate: 'not authenticated' }, { new: true })
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