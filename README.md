## Technical test

### Versions

- node : v18.16.1
- npm : 9.5.1
- nvm : 0.39.1

### Run App

```
npm run start
```

### Run unit test

```
npm run test
```

### see coverage

1. `npm run test`
2. a folder `/coverage` will be created
3. in the route `/coverage/lcov-report/index.html`
4. open the `index.html` with the preferred browser

---

## Task

​
The task is to write a function that finds pairs of integers from a list that
sum to a given value. The function will take as input the list of numbers as
well as the target sum.
​
Sample output is shown below.

```
> app 1,9,5,0,20,-4,12,16,7,12
​
+ 12,0
+ 5,7
+ 16,-4
​
```

​
In the example, there is an executable named `app`. It takes as command line
arguments a comma separated list of integers, and the target integer. Your app
doesn't need to have identical input/output mechanisms. For example, you could
read from a file instead of the command line.
​
You can assume that all input values are integers. You can assume that there aren't
any repeat values in the list.
​
The algorithm to find the pairs must be faster than O(n^2). All edge cases
should be handled appropriately. This is _not_ a closed book test. You are
encouraged to reach out with any questions that you come across.
