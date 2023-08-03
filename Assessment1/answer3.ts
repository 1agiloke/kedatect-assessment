const diveObject = (theObject : any, arr : number[]) : boolean => {
    var result = false;
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
            result = diveObject(theObject[i], arr);
            if (result) {
                break;
            }   
        }
    }
    else
    {
        for(var prop in theObject) {
            if (typeof theObject[prop] == 'number' && theObject[prop] % 2 == 0) {
                arr.push(theObject[prop]);
            }
            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                result = diveObject(theObject[prop], arr);
                if (result) {
                    break;
                }
            } 
        }
    }
    return result;
}

export default function getSum(obj) {
    const arr : number[] = [];
    diveObject(obj, arr);
    const sum = arr.reduce((carr, curr) => carr + curr, 0);
    return sum;
}

const str = process.argv.slice(2)[0];
if (str) {
    try {
        const obj = JSON.parse(str);
        console.log(getSum(obj));
    } catch (error) {
        
    }
}
