import validator from "validator";

const PHONE_REGEX = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const ZIP_CODE_REGEX = /^\d{5}/;

const IS_INVALID = "is invalid";
const IS_REQUIRED = "is required";
const IS_TOO_SHORT = "is too short";
const RANGE_ERROR = "range should be atleast 1 mile radius";
const NO_ERROR = "";

class ValidatorUtil {

    static isEmpty(value) {
        return validator.isEmpty(value);
    }

    static validatePhoneNumber(value) {
        if(this.isEmpty(value)) return IS_REQUIRED;
        if (!validator.matches(value, PHONE_REGEX)) return IS_INVALID;
        return NO_ERROR;
    }

    static validateZipcode(value) {
        if(this.isEmpty(value)) return IS_REQUIRED;
        if (!validator.isLength(value, {min: 1})) return IS_REQUIRED;
        if (!validator.matches(value, ZIP_CODE_REGEX)) return IS_INVALID;
        return NO_ERROR;
    }

    static validateEmail(value) {
        if(this.isEmpty(value)) return IS_REQUIRED;
        if (!validator.isEmail(value)) return IS_INVALID;
        return NO_ERROR;
    }

    static validateName(value) {
        if(this.isEmpty(value)) return IS_REQUIRED;
        if (!validator.isLength(value, {min: 2})) return IS_TOO_SHORT;
        return NO_ERROR;
    }

    static validateIsEmpty(value) {
        if(this.isEmpty(value)) return IS_REQUIRED;
        return NO_ERROR;
    }

    static validateRange(value) {
        if(value <= 0) return RANGE_ERROR;
        return NO_ERROR;
    }

}

export default ValidatorUtil;
