let zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪";


function stembranch(year) {
    let zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
    return zodiac[(year - 4) % 12];
}


class Zodiac {
    constructor() {
        this.zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
    }

    stembranch(year) {
        let zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
        return zodiac[(year - 4) % 12];
    }
}