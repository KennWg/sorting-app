//Merge sort function - returns series of animations to do, not merged array

export function mergeSortAnimations(array){

    function merge(left, right, mid, array, arrayDup, animations ) {
        let pr = mid+1;
        let pl = left;
        let pt = left;

        while(pl <= mid && pr <= right){
            animations.push([pl,pr]);
            animations.push([pl,pr]);
            if(arrayDup[pl] <= arrayDup[pr]){
                animations.push([pt, arrayDup[pl]]);
                array[pt++] = arrayDup[pl++];
            } else {
                animations.push([pt, arrayDup[pr]]);
                array[pt++] = arrayDup[pr++];
            }
        };
        while(pl <= mid){
            animations.push([pl, pl]);
            animations.push([pl, pl]);
            animations.push([pt, arrayDup[pl]]);
            array[pt++] = arrayDup[pl++];
        };
        while(pr <= right){
            animations.push([pr,pr]);
            animations.push([pr,pr]);
            animations.push([pt, arrayDup[pr]]);
            array[pt++] = arrayDup[pr++];
        }
    }

    function sort(left, right, array, arrayDup, animations) {
        if(left === right) return;
        
        const mid = Math.floor((left+right)/2);

        sort(left,mid,arrayDup,array,animations);
        sort(mid+1,right,arrayDup,array,animations);
        merge(left,right,mid,array,arrayDup,animations);
    }

    const animations = [];
    const arrayDup = array.slice();
    sort(0, array.length-1, array, arrayDup, animations);
    return animations;
}