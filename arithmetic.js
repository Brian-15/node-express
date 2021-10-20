
function sortNums(nums) {
    if (nums.length === 1) return nums;
    return nums.sort((a, b) => a - b);
}

/**
 * Arithmetic helper functions.
 * Includes: mean, median, and mode.
 */

function mean(nums) {
    return nums.reduce((prev, num) => prev + num, 0) / nums.length;
}

function median(nums) {
    const sorted = sortNums(nums);

    if (sorted.length % 2 === 0) {
        // has an even number of elements => calculate average of both midpoint indices
        const idx = Math.floor(nums.length / 2) - 1;
        return (sorted[idx] + sorted[idx + 1]) / 2;
    } else {
        // has an odd number of elements
        return sorted[Math.floor(nums.length / 2)];
    }
}

function mode(nums) {
    // Stores frequency of each number found in nums to a key/value pair format.
    const freq = {};
    for (let num of nums) {
        if (freq[num] === undefined) {
            freq[num] = 1;
        } else {
            freq[num] += 1;
        }
    }

    const [keys, vals] = [Object.keys(freq), Object.values(freq)];
    const maxVal = Math.max(...vals);

    // if highest frequency is 1, then all keys are modes.
    if (maxVal === 1) return sortNums(keys.map(key => Number(key)));

    const modes = [];

    for (let i of Array(keys.length).keys()) {
        // checks that frequency of key matches maximum frequency,
        // and that key hasn't been added yet.
        if (vals[i] === maxVal && modes.indexOf(keys[i]) === -1) {
            modes.push(Number(keys[i]));
        }
    }

    return sortNums(modes);
}

module.exports = { mean, median, mode };