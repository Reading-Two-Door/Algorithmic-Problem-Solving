function partition(arr, low, high) {
  const pivot = arr[high]; // 피벗 값 설정
  let i = low - 1; // 왼쪽 포인터 초기화

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      // 피벗보다 작거나 같은 값 찾기
      i++;

      [arr[i], arr[j]] = [arr[j], arr[i]]; // 값 교환
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // 피벗 값 최종 위치로 이동

  return i + 1; // 피벗 값의 최종 인덱스 반환
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

const MAX_LENGTH = 10;

const arr1 = Array.from({ length: MAX_LENGTH }, (v, i) => i);
const arr2 = Array.from({ length: MAX_LENGTH }, (v, i) => MAX_LENGTH - i - 1);
// quickSort(arr1, 0, arr1.length - 1);

function generateRandomArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * n + 1)); // 1부터 1000까지 랜덤 정수 생성
  }
  return arr;
}

const randomArray = generateRandomArray(MAX_LENGTH);
console.log(randomArray);
quickSort(randomArray, 0, randomArray.length - 1);

// console.time();
// console.log(arr1);
// quickSort(arr1, 0, arr1.length - 1);
// console.log(arr1);
// console.timeEnd();

// console.time();
// console.log(arr2);
// quickSort(arr2, 0, arr2.length - 1);
// console.log(arr2);
// console.timeEnd();
