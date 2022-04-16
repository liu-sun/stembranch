let stem = "甲乙丙丁戊己庚辛壬癸";
let branch = "子丑寅卯辰巳午未申酉戌亥";


function stembranch(year) {
    return stem[(year - 4) % 10] + branch[(year - 4) % 12];
}


class StemBranch {
    constructor() {
        this.stem = "甲乙丙丁戊己庚辛壬癸";
        this.branch = "子丑寅卯辰巳午未申酉戌亥";
    }

    stembranch(year) {
        return this.stem[(year - 4) % 10] + this.branch[(year - 4) % 12];
    }
}
