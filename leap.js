function leap(year) {
    if ((year % 400 == 0) | (year % 100 != 0 & year % 4 == 0)) {
        return "闰年";
    }
    else {
        return "平年";
    }

}
