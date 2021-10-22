export const generateReferenceCode =  () => {
    const digits = '0123456789';
    let reference_code = '';
    for (let i = 0; i < 8; i++) {
        reference_code += digits[Math.floor(Math.random() * 10)]
    }
    return parseInt(reference_code)
}

export const generateOTP =  () => {
    const digits = '0123456789';
    let otp_code = '';
    for (let i = 0; i < 6; i++) {
        otp_code += digits[Math.floor(Math.random() * 10)]
    }
    return parseInt(otp_code)
}

export const generateUniquePassword =  () => {
    const string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let Password = '';
    const length = string.length;
    for (let i = 0; i < 6; i++ ) {
        Password += string[Math.floor(Math.random() * length)];
    }
    return Password;
}