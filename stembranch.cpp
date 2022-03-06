#include<iostream>
using namespace std;

int main() {
 const char* stem[10] = { "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸" };
 const char* branch[12] = { "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥" };
 int year;
 cin >> year;
 cout <<  stem[(year-4)%10]<<branch[(year-4)%12] << endl;
 return 0;
}
