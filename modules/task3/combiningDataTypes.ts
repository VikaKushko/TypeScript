export function combiningDataTypes(str: number | string): void{
    if (typeof str === 'number'){
        console.log(str * str)
    } else if (typeof str === 'string'){
        console.log(str.length)
    } else {
        throw new Error('Invalid parameter type')
    }
}
