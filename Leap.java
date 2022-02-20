package stembranch;

import java.util.Scanner;

public class Leap {
	public static String leap(int year) {
		if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
			return "ÈòÄê";
		} else {
			return "Æ½Äê";
		}
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int year = scanner.nextInt();
		scanner.close();
		System.out.println(leap(year));
	}
}
