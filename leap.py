def leap(year):
    return "闰年" if year % 400 == 0 or (year % 100 != 0 and year % 4 == 0) else "平年"
