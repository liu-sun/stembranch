package stembranch;

import java.util.Scanner;

public class Zodiac {
	public static String zodiac(int year) {
		String[] zodiac = { "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪" };
		return zodiac[(year - 4) % 12];
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int year = scanner.nextInt();
		scanner.close();
		System.out.println(zodiac(year));
	}
}
