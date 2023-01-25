import {isNaN } from 'lodash';
import moment from 'moment';
import {  Dimensions, Keyboard,  PermissionsAndroid, Platform, Share } from 'react-native';
export const DATE_FORMAT_DD_MM_YYYY = 'DD/MM/YYYY';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DISPLAY_DATE_TIME_FORMAT = 'DD MMM YYYY hh:mm a';
export const DISPLAY_TIME = 'hh:mm';
export const DATE_TIME_FORMAT_DD_MM_YYYY_HH_MM_SS = 'DD-MM-YYYY HH:mm:ss';
export const DATE_TIME_FORMAT_YYYY_MM_DD_HH_MM_SS = 'YYYY-MM-DD HH:mm:ss';
export const DISPLAY_DATE_FORMAT_DD_MM = 'DD/MM';
export const DISPLAY_DATE_MONTH_TIME_FORMAT = 'DD MMM hh:mm a';

export const DISPLAY_DATE_FORMAT = 'DD MMM YYYY';
export const DISPLAY_COMPLETE_DATE_FORMAT = 'DD MMMM YYYY';

export const DISPLAY_TIME_FORMAT = 'hh:mm a';
export const DISPLAY_HOUR_FORMAT = 'hh a';
export const EMAIL_PATTERN = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}' + '$';
export const PHONE_REGEX = `^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$`

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const RANDOM_STRING_ALPHA_NUMERIC = {
    ALPHANUMERIC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
    NUMERIC: '1234567890'
};


export const getContainerWidth = (web = '40%') => {
    return deviceHeight > deviceWidth ? '90%' : web;
};

export const getContainerMargin = () => {
    return deviceHeight > deviceWidth ? deviceHeight * 0.12 : 0;
};

export const isValidElement = (data) => {
    return data !== null && data !== undefined;
};

export const isValidString = (data) => {
    return data !== null && data !== undefined && data !== '' && data !== 'null';
};

export const isValidNumber = (data) => {
    return data !== null && data !== undefined && data !== '' && !isNaN(data);
};

export const isValidNonZeroNumber = (data) => {
    return data !== null && data !== undefined && data !== '' && !isNaN(data) && Number(data) > 0.0;
};


export const isValidFormat = (regex, enteredString) => {
    try {
        if (regex.test(enteredString)) {
            return true;
        }
    } catch (e) {
        return false;
    }

    return false;
};



export const isEmpty = (string) => {
    return !string || string.length === 0;
};

export const isAndroid = () => {
    return Platform.OS === 'android';
};

export const isIos = () => {
    return Platform.OS === 'ios';
};

export const dismissKeyboard = () => {
    Keyboard.dismiss();
};


export const onShare = async (data) => {
    try {
        const result = await Share.share({
            message: data
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
};





export const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date);
};




export const formattedDate = (time) => {
    return moment(time).format(DATE_FORMAT);
};


export const requestAndroidStoragePermission = async () =>
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);


export const isValidLength = (text, minLength) => {
    if (isValidElement(text) && text.length < minLength) {
        return false;
    } else {
        return true;
    }
};

export const isUpperCase = (text) => {
    let upperRegExp = /[A-Z]/;
    if (isValidElement(text) && upperRegExp.test(text)) {
        return true;
    } else {
        return false;
    }
};

export const isLowerCase = (text) => {
    let lowerRegEx = /[a-z]/;
    if (isValidElement(text) && lowerRegEx.test(text)) {
        return true;
    } else {
        return false;
    }
};

export const isSpecialCharacter = (text) => {
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (isValidElement(text) && specialChars.test(text)) {
        return true;
    } else {
        return false;
    }
};

export const isNumber = (text) => {
    let number = /[0-9]/;
    if (isValidElement(text) && number.test(text)) {
        return true;
    } else {
        return false;
    }
};
export const checkRegexPatternTest = (pattern, data) => {
    let testPattern = new RegExp(pattern);
    return testPattern.test(data);
};
export const isValidEmail = (text) => {
    return isValidString(text) && checkRegexPatternTest(EMAIL_PATTERN, text);
};

export const isValidPhone = (text) => {
    return isValidString(text) && checkRegexPatternTest(PHONE_REGEX, text);
};
export const prettyAadharNumber = (value) => {
    let cardNumber;
    value = value.replace(/\D/g, '');
    if (/^3[47]\d{0,13}$/.test(value)) {
        cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})   (\d{4})/, '$1 $2 $3');
    }

   
    return isValidNotEmptyString(cardNumber) ? cardNumber.trim() : value;
};