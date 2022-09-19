package wordlee211;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Set;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;

public class solution {
	private Set<Character> bonusLetters=new HashSet<> (Arrays.asList('r','l','s','t','n','e'));
	public static void main(String [] args) throws IOException
	{
		new solution().run(5);
		
	}
	private void run(int wordLength) throws IOException
	{
		Set<String> dictionary =getWords("C:\\Users\\elish\\eclipse-workspace\\wordlee\\src\\wor.txt",wordLength);
		//Set<String> dictionary2 =getWords("C:\\Users\\elish\\eclipse-workspace\\wordlee\\src\\wor.txt",wordLength);
		
		Set<String> words= new HashSet<> (dictionary);
		try (Scanner scanner = new Scanner(System.in))
		{
			for (int i = 0; i < 5; i++)
			{
				String wordtry = getTryWord(words);
				String result;
				do
				{
					System.out.println("#"+(i+1)+"Try this: "+ wordtry+"(out of " + words.size()+"words)");
					System.out.println("(g = green, y = yellow, r = red");
					result = scanner.nextLine().trim();
					if (result.startsWith("get ")) 
					{
						printWordWith(dictionary,result.substring(4).toCharArray());
						
					}
					else 
					{
						words =getNewWords(words,wordtry,result);
					}
				}
				while (result.startsWith("get "));
			}
		}
	}
	private String getTryWord(Set<String> words) {
		
		// prefer more unique letter 
		String bestWord = null;
		 int maxuniqueLetters=0;
		 int maxScore = words.iterator().next().length()*2;
		 Set<Character> letters = new HashSet<>();
		 for(String word : words)
		 {
			 for(int i = 0; i < word.length(); i++)
			 {
				 letters.add(word.charAt(i));
			 }
			 int score = letters.size();
			 for(char c : letters)
			 {
				 if (bonusLetters.contains(c))
				 {
					 score++;
				 }
			 }
			 if (score == maxScore)
			 {
				 return word;
			 }
			 else if (letters.size()> maxuniqueLetters)
			 {
				 maxuniqueLetters = letters.size();
				 bestWord=word;
			 }
			 letters.clear();
		 }
		return bestWord;
		
	}
	private Set<String> getNewWords(Set<String> words, String wordtry, String result)
	{
		Set<String> newWords = new HashSet<>();
		for(String word : words)
		{
			boolean isWordValid=true;
			char[] wordChars = word.toCharArray();
			for(int i = 0; i <wordtry.length(); i++)
			
			{
				char r = result.charAt(i);
				// green : correct letter, correct position
				// yellow : correct letter, incorrect position 
				// red: incorrect letter 
				if ((r == 'g' && wordChars[i] != wordtry.charAt(i))
				 || (r == 'y' && (wordChars[i]== wordtry.charAt(i) || !contains(wordChars,wordtry.charAt(i))))
                  || (r == 'r' && contains (wordChars,wordtry.charAt(i))))
				{
					isWordValid=false;
					break;
				}
				else if (r == 'g')
				{
					wordChars[i]= '-';
				}
			}
			if(isWordValid)
			{
				System.out.println(word);
				newWords.add(word);
				
			}
		}
		
		return newWords;
		
	}
	private boolean contains(char [] cs , char targetChar) {
		for(char c : cs)
		{
			if (c == targetChar)
			{
				return true;
			}
		}
		return false;
		
	}
	
	private void printWordWith(Set<String> dictionary, char [] targetChars)
	{
		int bestScore=2;
		for(String word : dictionary)
		{
			Set<Character> letters= new HashSet<>();
			for(int i = 0; i < word.length(); i++)
			{
				letters.add(word.charAt(i));
			}
			int score = 0;
			for(char letter : letters)
			{
				if(contains(targetChars,letter))
				{
					score++;
				}
			}
			if(score>bestScore)
			{
				System.out.println(word);
			}
			for(int i = 2; i <= score; i++)
			{
				System.out.print("*");
			}
			System.out.println();
			if (score>bestScore)
			{
				bestScore=score;
			}
		}
	}
	private Set<String> getWords(String path, int wordLength) throws IOException {
		Set<String> words = new HashSet<>();
		for(String a : Files.readAllLines(Paths.get(path)).get(0).split(","))
		{
			String word  = a.replaceAll("[\\[\\].\\\"]","");
			if (wordLength == word.length())
			{
				words.add((word));
			}
		}
		return words;
	}

}
