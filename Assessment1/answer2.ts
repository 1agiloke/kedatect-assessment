const sum = (arr: number[]) : number => {
    return arr.reduce((carr, cur) => {
        return carr + cur;
    }, 0);
}

const chunkArr = (arr: number[], size: number) : Array<number[]> => {
    const ret : Array<number[]> = [];
    for (let i = 0; i < arr.length; i++) {
        ret.push(arr.slice(i, i+size))
    }
    return ret;
}

export default function getMax(arr: number[], size: number) {
    const chunks = chunkArr(arr, size);
    let max = 0;
    for (let i = 0; i < chunks.length; i++) {
        const curr = sum(chunks[i]);
        if (curr > max) max = curr;
    }
    return max;
}

const [arg1, arg2] = process.argv.slice(2);
const arr : number[] = arg1.split(',').map((e) => parseInt(e, 10));
const size = parseInt(arg2);

console.log(getMax(arr, size));