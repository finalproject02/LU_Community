import admissions from "../models/admissionModel.js";
import { Builder, By, until } from 'selenium-webdriver';
import { sendOfferLetterMessage, sendAccurateCredential } from "../services/mailService.js";
export const admission = async (req, res) => {
    const application = req.body;

    try {
        const newAdmission = new admissions(application);
        await newAdmission.save()
        res.status(200).json({ application: newAdmission, success: true, message: 'Application successfully completed. We will with you contact very soon.' })

    } catch (error) {
       // res.status(400).json({ message: error, success: false })
        console.log(error)
    }


};

export const getApplications = async (req, res) => {
    try {
        const applications = await admissions.find();
        res.status(200).json({ applications: applications });
    } catch (error) {
      res.status(400).json({ message : 'Something went wrong' })
    }
}

export const getApplication = async (req, res) => {
    const { id } = req.params
    try {
        const application = await admissions.findOne({ _id: id });
        if (application.ssc_credential_authenticate === 'authenticated credential' && application.hsc_credential_authenticate === 'authenticated credential' && application.status === 'application padding') {
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
            driver.wait(until.elementsLocated(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/form/table/tbody/tr/td[2]/fieldset/table/tbody/tr[7]/td[3]"),1000));
            let l = p.length-1
            let re = p[0]
            let q = p[l]
            let firstNumber = parseInt(re)
            let secondNumber = parseInt(q)
            let addition = firstNumber + secondNumber

            await driver.findElement(By.css("#value_s")).sendKeys(addition)
            try {
                await driver.findElement(By.css("#button2")).click().then(async () =>{
                    await driver.findElement(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody")).getText().then(async (rx) =>  {
                        let result = rx;
                        await driver.quit();
                        const correct = await FinalResult(result, application.applicant_name, application.ssc_gpa, application.applicant_fatherName, application.applicant_motherName);
                        if (correct === true) {
                            await admissions.findByIdAndUpdate( id, { ssc_credential_authenticate: 'authenticated credential' }, { new: true })
                            res.status(200).json('authenticated credential');
                        } else {
                            await admissions.findByIdAndUpdate( id, { ssc_credential_authenticate: 'not authenticated' }, { new: true })
                            res.status(400).json('not authenticated');
                        }

                    })
                })
            } catch (error) {
                console.log('Something went wrong');
                await admissions.findByIdAndUpdate( id, { ssc_credential_authenticate: 'not authenticated' }, { new: true })
                res.status(400).json('not authenticated');
                await driver.quit();
            }
        } catch (error) {
            console.log('Something went wrong');
            await admissions.findByIdAndUpdate( id, { ssc_credential_authenticate: 'not authenticated' }, { new: true })
            res.status(400).json('not authenticated');
        }
    } catch (error) {
        res.status(400).json({msg:error})
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
            await selectBoard(application.hsc_board.toLowerCase(),driver);
            await driver.findElement(By.name('roll')).sendKeys(application.hsc_roll_no);
            await driver.findElement(By.name('reg')).sendKeys(application.hsc_regis_no);

            let p = await driver.findElement(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/form/table/tbody/tr/td[2]/fieldset/table/tbody/tr[7]/td[2]")).getText();
            driver.wait(until.elementsLocated(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/form/table/tbody/tr/td[2]/fieldset/table/tbody/tr[7]/td[3]"),1000));
            let l = p.length-1
            let re = p[0]
            let q = p[l]
            let firstNumber = parseInt(re)
            let secondNumber = parseInt(q)
            let addition = firstNumber + secondNumber

            await driver.findElement(By.css("#value_s")).sendKeys(addition)
            try {
                await driver.findElement(By.css("#button2")).click().then(async () =>{
                    await driver.findElement(By.xpath("/html/body/table/tbody/tr[2]/td/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody")).getText().then(async (rx) =>  {
                        let result = rx;
                        await driver.quit();
                        const correct = await FinalResult(result, application.applicant_name, application.hsc_gpa, application.applicant_fatherName, application.applicant_motherName);
                        if (correct === true) {
                            await admissions.findByIdAndUpdate( id, { hsc_credential_authenticate: 'authenticated credential' }, { new: true })
                            res.status(200).json('authenticated credential');
                        } else {
                            await admissions.findByIdAndUpdate( id, { hsc_credential_authenticate: 'not authenticated' }, { new: true })
                            res.status(400).json('not authenticated');
                        }

                    })
                })
            } catch (error) {
                console.log('Something went wrong');
                await admissions.findByIdAndUpdate( id, { hsc_credential_authenticate: 'not authenticated' }, { new: true })
                res.status(400).json('not authenticated');
                await driver.quit();
            }
        } catch (error) {
            console.log('Something went wrong');
            await admissions.findByIdAndUpdate( id, { hsc_credential_authenticate: 'not authenticated' }, { new: true })
            res.status(400).json('not authenticated');
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