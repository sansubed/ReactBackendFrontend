import { apiUrl } from './constant'

export async function getCountries() {
  try {
    const res = await fetch(apiUrl)
    const data = await res.json()

    return data
  } catch (e) {
    throw Error('Enter your error message here')
  }
}
