#include <stdio.h>

void stembranch(int year)
{
    char *stem[] = {"甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"};
    char *branch[] = {"子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"};
    printf("%s%s\n", stem[(year - 4) % 10], branch[(year - 4) % 12]);
}

int main(int argc, char *argv[])
{
    stembranch(2022);
    return 0;
}
