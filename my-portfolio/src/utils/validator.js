export function validateEmail (email){
    const valEmail= /([a-z\d\.-]+)@([a-z\d-]+)/
    return valEmail.test(String(email))
}