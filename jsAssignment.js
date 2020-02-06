const data = [{
    project: 'P1',
    student: 'S1',
    score: 20,
}, {
    project: 'P1',
    student: 'S2',
    score: 30,
}, {
    project: 'P1',
    student: 'S3',
    score: 20,
}, {
    project: 'P2',
    student: 'S1',
    score: 10,
}, {
    project: 'P2',
    student: 'S2',
    score: 10,
}, {
    project: 'P2',
    student: 'S3',
    score: 40,
}];

const compute = (data) => {
    let map = {};
    let result = [];
    data.forEach((student) => {
        map[student.student] = map.hasOwnProperty(student.student) ? map[student.student] + student.score : student.score;
    })

    for (let key of Object.keys(map)) {
        if (map[key] > 50) {
            result.push(key);
        }
    }
    console.log(result);
}

const t0 = performance.now();
compute(data);
const t1 = performance.now();
console.log(t1 - t0);

//time complexity is O(n) as both the loops are individual.