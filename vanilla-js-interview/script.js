// async function fetchData(page) {
//   const response = await fetch("https://jsonfakery.com/jobs/paginated");
//   const data = await response.json();

//   console.log("Fetched data for page", page, data.data);
// }

// function debounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     const context = this;

//     clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// }

// // const res = debounce(() => console.log("Debounced"), 300);
// // window.addEventListener("resize", res);

// const res = debounce(fetchData, 500);

// res(1);
// res(2);
// res(3);

// nums[] = [2, 0, 2, 1, 1, 0]
//          low, mid        high
// o/p = [0, 0, 1, 1, 2, 2];

// let nums = [2, 0, 2, 1, 1, 0];
let nums = [2, 0, 1];

function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

console.log(sortColors(nums));
