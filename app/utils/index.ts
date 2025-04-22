
export async function fetchCars(url:string) {

    const response = await fetch(url)
    const result = await response.json()
    return result
}