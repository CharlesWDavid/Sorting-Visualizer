
// ############# BUBBLESORT ################

export function getBubbleSortAnimations(array){
    const animations = [];
    let sorted = false;
    while(!sorted){
        sorted = true;
        for (let i=0; i<array.length-1; i++){
            animations.push([i, i+1]);
            animations.push([i, i+1]);
            if (array[i] > array[i+1]){
                animations.push([i, array[i], i+1, array[i+1], true]);
                helperSwap(array, i, i+1);
                sorted = false;
            } else {
                animations.push([i, array[i], i+1, array[i+1], false]);
            }
        }
    }
    return animations;
}

// ############# MERGESORT ################

export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
        } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

// ############# QUICKSORT ################ 

export function getQuickSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length-1, animations);
    return animations;
}

function quickSortHelper(array, leftIdx, rightIdx, animations){
    if(array.length > 1){
        let index = partition(array, leftIdx, rightIdx, animations);
        if (leftIdx < index - 1){
            quickSortHelper(array, leftIdx, index-1, animations);
        }
        if (index < rightIdx){
            quickSortHelper(array, index, rightIdx, animations);
        }
    }
}

function partition(array, leftIdx, rightIdx, animations){
    let pivot = array[Math.floor((rightIdx + leftIdx) / 2)],
        i     = leftIdx, 
        j     = rightIdx;

    while (i <= j){
        while (array[i] < pivot) i++;
        while (array[j] > pivot) j--;
        animations.push([i,j]);
        animations.push([i,j]);
        if (i <= j){
            animations.push([i, array[i], j, array[j], true]);
            helperSwap(array, i, j);
            i++;
            j--;
        } else {
            animations.push([i, array[i], j, array[j], false]);
        }
    }
    return i;
}

// ############# HEAP SORT ################

var array_length;
export function getHeapSortAnimations(array){
    const animations = [];
    array_length = array.length;

    for (let i=Math.floor(array_length / 2); i>=0; i--){
        maxHeap(array, i, animations);
    }

    for (let j=array.length-1; j>0; j--){
        animations.push([0, j]);
        animations.push([0, j]);
        animations.push([0, array[0], j, array[j], true]);
        helperSwap(array, 0, j);
        array_length--;
        maxHeap(array, 0, animations)
    }

    return animations;
}

function maxHeap(array, i, animations){
    let leftIdx  = 2 * i + 1,
        rightIdx = 2 * i + 2,
        max      = i;

    if (leftIdx < array_length && array[leftIdx] > array[max]){
        max = leftIdx;
    }

    if (rightIdx < array_length && array[rightIdx] > array[max]){
        max = rightIdx;
    }

    animations.push([i, max]);
    animations.push([i, max]);
    if (max !== i){
        animations.push([i, array[i], max, array[max], true]);
        helperSwap(array, i, max);
        maxHeap(array, max, animations);
    } else {
        animations.push([i, array[i], max, array[max], false]);
    }
}




// ############# HELPER METHODS ################

function helperSwap(array, idx1, idx2){
    let tmp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = tmp;
}


