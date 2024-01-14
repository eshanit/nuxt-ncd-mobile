const sumScoresBetween = (start: number, end: number, scoreValues: any[]) => {
    const newArr: any[] = [];
    
    for (var i = start; i < end ; i++){
        newArr.push(scoreValues[i].evalScore)
    }

    return newArr.reduce((acc,curr) => parseInt(acc) + parseInt(curr))
}

export default sumScoresBetween;