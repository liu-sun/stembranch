let zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪";


function zodiac(year) {
    let zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
    return zodiac[(year - 4) % 12];
}


class Zodiac {
    constructor() {
        this.zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
    }

    zodiac(year) {
        let zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
        return zodiac[(year - 4) % 12];
    }
}