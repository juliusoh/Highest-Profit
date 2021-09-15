# Julius Oh's Sada GCP Challenge Submission for Highest-Profit
Read a CSV file containing corporate profits over the years and create JSON format data and look for highest profit values in the data.
1. Print out how many rows of the data is in the CSV data.
2. Print out how many rows of data are left, after removing all the rows with invalid non-numeric profit column data. 
3. Print the top 20 rows with the highest profit values.

## Technologies Used
- NodeJS
- JavaScript

## Getting Started
#### 1. Clone the repository and navigate to the directory
```shell
git clone https://github.com/juliusoh/Highest-Profit.git
```

#### 2. Run the .bat or .sh file
- cd into cloned repository 
- Run `chmod +x run.sh` 
- Run `./run.sh`
- Results should be printed

#### 3. Alternative way
- cd into cloned repo
``` shell
npm install
node HighestProfit.js
```
- Results should be printed

Result produced the number of rows in the .csv file, number of rows after filtered non numeric values, and the top 20 companies with the highest profit (in millions).

I used node module: csv-parser to convert CSV into JSON at rate of around 90,000 rows per second. The csv data was parsed into an empty array called results. Then I 
I applied the .filter() array method which "creates a new array with all elements that pass the test implemented by the provided function"(MDN web docs), in my case does Profit equal to a NaN which determines if a value is a number or not. Before implementing the filter method, I mutated the Profit values into a Number type in order to implement the filter method above. And after filtering, i used .writeFile() method of the filesystem which "Asynchronously writes data to a file, replacing the file if it already exists. data can be a string, a buffer, an <AsyncIterable> or <Iterable> object, or an object with an own toString function property. The promise is resolved with no arguments upon success." (NodeJS docs) to create new file "data2.json" with the new filtered results.

The .length method will give back the number of objects and in this case the number of rows.

After filtering out the non-numeric values, i used a sort() array method which "sorts the elements of an array in place and returns the sorted array." (MDN docs).
And in this case compares the second element to the first element. 

And after sorting the results, I applied a .slice() method which "method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array." (MDC Docs). So in this case starting from the first index (since its the highest) to end 20th index since the 20th index is not included so stops at 20th index.
