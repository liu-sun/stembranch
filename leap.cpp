#include<iostream>
using namespace std;

void leap(int year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
    {
      cout<<"闰年"<<endl;
    }
    else
    {
      cout<<"平年"<<endl;
    }
}

int main() {
    int year;
    cin >>year;
    leap(year);
    return 0;
}
