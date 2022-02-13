public class StemBranch {
    public static String stemBranch(int year) {
        String[] stem = { "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸" };
        String[] branch = { "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥" };
        return stem[(year - 4) % 10] + branch[(year - 4) % 12];
    }

    public static void main(String[] args) {
        int year = Integer.parseInt(args[0]);
        System.out.println(stemBranch(year));
    }
}