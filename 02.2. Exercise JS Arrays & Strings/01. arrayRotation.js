function rotateArray(arr, rotations) {
    const n = arr.length;

    const effectiveRotations = rotations % n;

    const rotatedArray = arr.slice(effectiveRotations).concat(arr.slice(0, effectiveRotations));

    console.log(rotatedArray.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);
