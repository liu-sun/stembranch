let stem = "甲乙丙丁戊己庚辛壬癸";
let branch = "子丑寅卯辰巳午未申酉戌亥";
function stembranch(year) {
    let stem = "甲乙丙丁戊己庚辛壬癸";
    let branch = "子丑寅卯辰巳午未申酉戌亥";
    return stem[(year - 4) % 10] + branch[(year - 4) % 12];
}
class StemBranch {
    constructor(stem, branch) {
        this.stem = "甲乙丙丁戊己庚辛壬癸";
        this.branch = "子丑寅卯辰巳午未申酉戌亥";
    }
    stembranch(year) {
        let stem = "甲乙丙丁戊己庚辛壬癸";
        let branch = "子丑寅卯辰巳午未申酉戌亥";
        return stem[(year - 4) % 10] + branch[(year - 4) % 12];
    }
}
