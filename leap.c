#include <stdio.h>

void leap(int year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
    {
      printf("闰年\n");
    }
    else
    {
      printf("平年\n");
    }
}

int main() {
    int year;
    scanf("%d", &year);
    leap(year);
    return 0;
}
