// students score, total possible score
// 15/20 --> You got a Ç (75%)

let calcScore = function (studentScore, totalScore) {
    let percent = studentScore / totalScore * 100
    let grade = ''
    
    if (percent <= 59.0) {
        grade = 'F'
    } else if (percent <= 69.0) {
        grade = 'D'
    } else if (percent <= 79.0) {
        grade = 'C'
    } else if (percent <= 89.0) {
        grade = 'B'
    } else {
        grade = 'A'
    }
    console.log(grade)
    //console.log(`${studentScore}/${totalScore} --> Your grade: ${grade} (${percent}%)`)

    return `${studentScore}/${totalScore} --> Your grade: ${grade} (${percent}%)`
}

let s1 = calcScore(145000, 210000)

console.log(s1)