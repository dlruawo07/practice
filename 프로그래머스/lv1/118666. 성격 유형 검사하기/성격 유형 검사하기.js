function solution(survey, choices) {
    var answer = '';
    let result = {
        "RT": 0,
        "CF": 0,
        "JM": 0,
        "AN": 0
    }
    let points = [-3, -2, -1, 0, 1, 2, 3]
    for (let i = 0; i < survey.length; i++) {
        let type = survey[i];
        let point = points[choices[i] - 1];
        if (!result.hasOwnProperty(type)) {
            type = survey[i][1] + survey[i][0];
            point = -point;
        }
        result[type] += point;
    }
    for (let type in result) {
        if (result[type] <= 0) answer += type[0];
        else answer += type[1];
    }
    return answer;
}