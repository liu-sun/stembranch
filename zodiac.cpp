#include <iostream>
using namespace std;
int main()
{
    const char *zodiac[12] = {"鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"};
    int year;
    cin >> year;
    cout << zodiac[(year - 4) % 12] << endl;
    return 0;
}
