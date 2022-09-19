package CS210;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.security.MessageDigest;

public class Solution{
	public static void main(String [] args)
	{
		Dictionary d = new Dictionary(); //importing my dictionary class. 
		int n = d.getSize(); //initiate an integer and setting it to get the size of the dictionary class.
		String hashList[] = new String[n]; //creating a string for x decimal name hashList.
		String words[] = new String[n];   // creating a string for sentences name words. 
		int n1 = 0;     //initiating an int to store score .      
		int n2 = n1;  //declaring n2 = n1.
		
		//declaring String where the current value will be stored and to print out all values.
		
		String s1 = "";    // string 1 stores sentence 1 
		String s2 = "";    // string 2 stores sentence 2 
		
		//This stores the current x decimal value
		
		String s3 = ""; // string 3 stores the first x decimal value.
		String s4 = ""; // string 4 stores the second x decimal value.
		
		// declaring a loop to convert word  into hash.
		for(int i = 0; i < n; i++)
		{
			words[i] = d.getWord(i);     //This pull out the word from the dictionary.
			hashList[i] = sha256(words[i]);   //This get the x decimal value of the sentence.
			
			
		}
		//declaring a nested loop.
		//two for loop within each other.
		
		for(int i =0; i < n; i++)       //first loop  checks sentence one and two and stores it in n1 
		{
			for(int j = i+1; j < n; j++ )   //the inner loop checks the first and the third sentences 
				 
			{
				n2 = sum(hashList[i],hashList[j]);        // finds the sum of the particular sentences and checks if the score is greater or less 
				if(n2>n1 &&! words[i].equals(words[j]))
				{
					n1 = n2;
					s1 = words[i];                               //This then update and gives the current value. 
					s2 = words [j];
					s3 =hashList[i];
					s4 = hashList[j];
					
				}
			}
			
		}	
		
		// printing out the values.
		System.out.println(s1);
		System.out.println(s3);
		System.out.println(s2);
		System.out.println(s4);
		System.out.println(n1);
		
		
		
	}
		// sha256 method 
	public static String sha256(String input){
		        try{
		            MessageDigest mDigest = MessageDigest.getInstance("SHA-256");
		            byte[] salt = "CS210+".getBytes("UTF-8");
		            mDigest.update(salt);
		            byte[] data = mDigest.digest(input.getBytes("UTF-8"));
		            StringBuffer sb = new StringBuffer();
		            for (int i=0;i<data.length;i++){
		                sb.append(Integer.toString((data[i]&0xff)+0x100,16).substring(1));
		            }
		            return sb.toString();
		        }catch(Exception e){
		            return(e.toString());
		        }
		        
	 }
	// code to calculate score.
	 public static int sum(String hash1, String hash2) // string my value 
	 {
		 int score = 0; 
		 for (int i =0; i < 64; i++)  //creating a loop to calculate the sentence and the x decimal value to give me the final result which will be stored in n1
		 {
			 if (hash1.charAt(i) == hash2.charAt(i))  //Initiate if one = to the other add to score.
			 {
				 score++;  //increase score.
				
			 }
		 }
		 return score;
		 
		
	 }
}
	//Dictionary class 
	class Dictionary{
	     
	    private String input[]; 

	    public Dictionary(){
	        input = load("C:\\Users\\elish\\OneDrive\\Documents\\words.txt");   // add text file location 
	    }
	    
	    public int getSize(){
	        return input.length;
	    }
	    
	    public String getWord(int n){
	        return input[n];
	    }
	    
	    private String[] load(String file) {
	        File aFile = new File(file);     
	        StringBuffer contents = new StringBuffer();
	        BufferedReader input = null;
	        try {
	            input = new BufferedReader( new FileReader(aFile) );
	            String line = null; 
	            int i = 0;
	            while (( line = input.readLine()) != null){
	                contents.append(line);
	                i++;
	                contents.append(System.getProperty("line.separator"));
	            }
	        }catch (FileNotFoundException ex){
	            System.out.println("Can't find the file - are you sure the file is in this location: "+file);
	            ex.printStackTrace();
	        }catch (IOException ex){
	            System.out.println("Input output exception while processing file");
	            ex.printStackTrace();
	        }finally{
	            try {
	                if (input!= null) {
	                    input.close();
	                }
	            }catch (IOException ex){
	                System.out.println("Input output exception while processing file");
	                ex.printStackTrace();
	            }
	        }
	        String[] array = contents.toString().split("\n"); //split sentences at .or!.
	        for(String s: array){
	            s.trim();
	        }
	        return array;
	    }
	}

		        
		        

	

