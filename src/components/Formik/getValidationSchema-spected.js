import { MIN_PASSWORD_LENGTH } from './const'
import { isParenthesizedExpression } from '@babel/types';

export default function getSpectedValidationSchema(values) {
  return {
    email: [
      [value => !isEmpty(value), 'E-mail is required!'],
      [value => isEmail(value), 'E-mail is not valid!']
    ],
    name: [
      [value => !isEmpty(value), 'Name is required!'],
      [
        value => value.length >= MIN_PASSWORD_LENGTH, 
        `Name must be longer than ${MIN_PASSWORD_LENGTH} character!` 
      ]
    ],
    zip: [
      [value => !isEmpty(value), 'Zip code is required!'],
      [value => isZip(value), 'Zip code is not valid!']
    ],
    consent: [
      [value => value === true, 'You have to agree with our Terms and Conditions!'],
    ]
  }
}

function isEmpty(value) {
  return !value || !value.trim()
}

function isEmail(value) {
  const EMAIL_REGEXP = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/
  return EMAIL_REGEXP.test(value)
}

function isZip(value) {
  const ZIP_REGEXP = /^\d{5}(?:[-\s]\d{4})?$/
  return ZIP_REGEXP.test(value)
}