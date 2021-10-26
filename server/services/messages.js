export const referenceNumberMessage = (name, reference_no) => {
    const message = `Hello ${name}.\n\nYour registration has been successful. For payment you should use this ${reference_no} code as a reference number. Thank for registration.\n\nLeading University, Sylhet
    `
    return message
}

export const paymentMessage = (name) => {
    const message = `Hello ${name}.\n\nAdmission fee successfully paid. Thank you.\n\nLeading University, Sylhet
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

export const approveAdmissionMessage = (name, department, email, password) => {
    const message = `Hello ${name}.\n\nWe are confirm your admission ${department} department at Leading University. Your email: ${email} and password: ${password} for login university web application. Thank you.\n\nLeading University, Sylhet
    `
    return message
}