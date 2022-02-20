zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"


def stembranch(year):
    zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"
    return zodiac[(year - 4) % 12]


class StemBranch:
    def __init__(self):
        self.zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"

    def stembranch(self, year):
        zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"
        return zodiac[(year - 4) % 12]
