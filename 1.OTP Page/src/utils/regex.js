export function isValidMobileNumber(number) {
    const pattern = /^\d{10}$/;
    return pattern.test(number);
}