const quickSort = (arr: number[]) : number[] => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot: number = arr[0];
    let leftArr: number[] = [];
    let rightArr: number[] = [];

    for (let i : number = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

export default function doSort(arr: number[]) {
    return quickSort(arr);
}
const args = process.argv.slice(2)[0]
const arr : number[] = args.split(',').map((e) => parseInt(e, 10));

console.log(doSort(arr));