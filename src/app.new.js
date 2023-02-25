const scores ={
    Anna: 5,
    Olga: 4,
    Ivan: 5,
    Alex: 3,
    Odi: 4
}

const totalScore = getScore(scores)

function getScore(scores) {
    var result=0;
    for (const value in scores) {
        result +=scores[value] 
    }
    return result
}

console.log (totalScore);