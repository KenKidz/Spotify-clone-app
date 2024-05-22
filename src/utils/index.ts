import moment from 'moment'

export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined || value === '')
    return true

  return !!(Array.isArray(value) && value.length === 0)
}

export const isNullOrUndefined = (value: unknown): value is undefined | null => {
  return value === null || value === undefined
}

export const isEmptyArray = (arr: unknown): boolean => {
  return Array.isArray(arr) && arr.length === 0
}

export const convertDateTime = (value: string | Date) => {
  return moment(value).format('MM/DD/YYYY HH:MM')
}
