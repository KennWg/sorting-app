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

//Heap sort

export function heapSortAnimations(array, n) {

    function heapify(array, n, i){
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if(l < n && array[l] > array[largest]){
            largest = l;
        }
        if(r < n && array[r] > array[largest]){
            largest = r;
        }

        if(largest!== i){
            let temp = array[i];
            array[i] = array[largest];
            array[largest] = temp;
            animations.push([i, largest]);
            animations.push([i, largest]);
            animations.push([i, array[i], largest, array[largest]]);
            heapify(array, n, largest);
        }
    }

    const animations = [];

    for(let i = parseInt(n/2 -1); i>= 0; i--){
        heapify(array, n, i);
    }

    for(let i = n-1; i >=0; i--){
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        animations.push([0, i]);
        animations.push([0, i]);
        animations.push([0, array[0], i, array[i]]);
        heapify(array, i, 0);
    }

    return animations;
}

//Quick sort

export function quickSortAnimations(array) {

    function partition(array, start, end){
        const pivot = array[end];
        let pivotIndex = start;

        for(let i = start; i < end; i++){
            if(array[i] < pivot){
                let temp = array[i];
                array[i] = array[pivotIndex];
                array[pivotIndex] = temp;
                animations.push([pivotIndex, i]);
                animations.push([pivotIndex, i]);
                animations.push([pivotIndex, array[pivotIndex], i, array[i]]);
                pivotIndex++;
            }
        }

        let temp = array[pivotIndex];
        array[pivotIndex] = array[end];
        array[end] = temp;
        animations.push([pivotIndex, end]);
        animations.push([pivotIndex, end]);
        animations.push([pivotIndex, array[pivotIndex], end, array[end]]);

        return pivotIndex;
    };

    function quickSort(array, start, end) {
        if(start>=end) return;

        let index = partition(array, start, end);
    
        quickSort(array, start, index-1);
        quickSort(array, index + 1, end);
    } 

    const animations = [];
    quickSort(array, 0, array.length -1);

    return animations;
}