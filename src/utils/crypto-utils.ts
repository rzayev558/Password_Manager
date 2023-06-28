export const encrypt = (value: string): string => {
    return btoa(value)
}

export const decrypt = (value: string): string => {
    return atob(value)
}