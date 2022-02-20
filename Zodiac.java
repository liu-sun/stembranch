package stembranch;

import java.util.Scanner;

public class Zodiac {
	public static String zodiac(int year) {
		String[] zodiac = { "Êó", "Å£", "»¢", "ÍÃ", "Áú", "Éß", "Âí", "Ñò", "ºï", "¼¦", "¹·", "Öí" };
		return zodiac[(year - 4) % 12];
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int year = scanner.nextInt();
		scanner.close();
		System.out.println(zodiac(year));
	}
}