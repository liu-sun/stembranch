let stem = "甲乙丙丁戊己庚辛壬癸";
let branch = "子丑寅卯辰巳午未申酉戌亥";


function stembranch(year) {
    return stem[(year - 4) % 10] + branch[(year - 4) % 12];
}


class StemBranch {
    stem = "甲乙丙丁戊己庚辛壬癸";
    branch = "子丑寅卯辰巳午未申酉戌亥";
    constructor() {

    }

    stembranch(year) {
        return this.stem[(year - 4) % 10] + this.branch[(year - 4) % 12];
    }
}
