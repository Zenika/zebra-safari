export const fizzbuzz = (number: number): string => {
    let result = '';

    if (isFizz(number)) {
        result = 'FIZZ';
    }

    if (isBuzz(number)) {
        result += 'BUZZ';
    }
    return result ? result : number.toString();
};

const isFizz = (number: number): boolean => number % 3 === 0
const isBuzz = (number: number): boolean => number % 5 === 0