stem = "甲乙丙丁戊己庚辛壬癸"
branch = "子丑寅卯辰巳午未申酉戌亥"


def stembranch(year):
    return stem[(year - 4) % 10] + branch[(year - 4) % 12]


class StemBranch:
    def __init__(self):
        self.stem = "甲乙丙丁戊己庚辛壬癸"
        self.branch = "子丑寅卯辰巳午未申酉戌亥"

    def stembranch(self, year):
        return self.stem[(year - 4) % 10] + self.branch[(year - 4) % 12]
