// Solution
const solution = (nums, target) => {
  let result = []
  nums.some((item, index) => {
    // 生成除item外的数字组成的数组
    let numsCopy = [ ...nums ]
    numsCopy.splice(index, 1)
    const remainingNums = numsCopy

    const fitNumIndex = remainingNums.indexOf(target - item)
    if (fitNumIndex >= 0) {
      const realIndex = fitNumIndex >= index ? fitNumIndex + 1 : fitNumIndex
      result.push([index, realIndex])
    }
    // 找到结果后终止遍历
    return fitNumIndex >= 0
  })
  if (result.length === 0) {
    return 'No solution here!'
  }
  return result
}

// Test
const output = solution([3, 3, 6, 0], 6)
console.log(output)
