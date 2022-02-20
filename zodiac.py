zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"


def zodiac(year):
    zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"
    return zodiac[(year - 4) % 12]


class Zodiac:
    def __init__(self):
        self.zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"

    def zodiac(self, year):
        zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"
        return zodiac[(year - 4) % 12]
