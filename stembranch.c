#include <stdio.h>

int main()
{
    const char *stem[] = {"甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"};
    const char *branch[] = {"子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"};
    int year;
    scanf("%d", &year);
    printf("%s%s\n", stem[(year - 4) % 10], branch[(year - 4) % 12]);
    return 0;
}
