export const referenceNumberMessage = (name, referenceCode) => {
    const message = `Hello ${name}.\nYour registration has been successful. For payment you should use this ${referenceCode} code as a reference number. Thank for registration.\n\nLeading University, Sylhet
    `
    return message
}

export const addTeacherMessage = (name, designation, department, email, password) => {
    const message = `Hello ${name}.\n\nYour has been appointed as ${designation} of ${department} department at Leading University. Your email: ${email} and password: ${password} for login our university web application. Thank you.\n\nLeading University, Sylhet
    `
    return message
}

export const addStudentMessage = (name, department, email, password) => {
    const message = `Hello ${name}.\n\nYou are student of ${department} department at Leading University. Your email: ${email} and password: ${password} for login university web application. Thank you.\n\nLeading University, Sylhet
    `
    return message
}