function solution(wallpaper) {
    var answer = [];
    var lu = [];
    var rd = [];
    for (let i = 0; i < wallpaper.length; i++) {
        var s = wallpaper[i].indexOf('#')
        var e = wallpaper[wallpaper.length - i - 1].lastIndexOf('#');
        if (s !== -1) lu.push([i, s]);
        if (e !== -1) rd.push([wallpaper.length - i, e + 1]);
    }
    
    var [lux, luy] = [lu[0][0], lu[0][1]];
    var [rdx, rdy] = [rd[0][0], rd[0][1]];
    
    for (let i = 1; i < lu.length; i++) {
        lux = (lu[i][0] < lux) ? lu[i][0] : lux;
        luy = (lu[i][1] < luy) ? lu[i][1] : luy;
        rdx = (rd[i][0] > rdx) ? rd[i][0] : rdx;
        rdy = (rd[i][1] > rdy) ? rd[i][1] : rdy;
    }
    
    answer = [lux, luy, rdx, rdy];
    
    return answer;
}