import { isEmpty, isEmptyArray, isNullOrUndefined } from '@/utils/index'


export const requiredValidator = (value: unknown) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return 'This field is required'

  return !!String(value).trim().length || 'This field is required'
}

export const emailValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (Array.isArray(value))
    return (
      value.every((val) => re.test(String(val))) ||
      "Invalid Email"
    );

  return re.test(String(value)) || "Invalid Email";
}

// 👉 Password Validator
export const passwordValidator = (password: string) => {
  const regExp = /^.{8,32}$/

  const validPassword = regExp.test(password)

  return validPassword || "Password length is from 8-32 characters"
}

export const lengthValidator = (value: unknown, length: number) => {
  if (isEmpty(value))
    return true

  return String(value).length <= length || `Require ${length} characters.`
}
