#include <stdio.h>
#include <stdlib.h>

void zodiac(int year) {
    char *zodiac[] = {"鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"};
    printf("%s\n", zodiac[(year - 4) % 12]);
}

int main(int argc, char *argv[]) {
    zodiac(atoi(argv[1]));
    return 0;
}
