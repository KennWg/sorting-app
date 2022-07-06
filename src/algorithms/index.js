//Merge sort function

export function mergeSort(array){

    function merge(left, right ) {
        const arr = [];

        while(left.length && right.length){
            if(left[0] < right[0]){
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        };

        return [...arr, ...left, ...right];
    }

    const mid = array.length/2;

    if(array.length <= 1) return array;

    const left = arr.splice(0, mid);
    return merge(mergeSort(left), mergeSort(array));
}