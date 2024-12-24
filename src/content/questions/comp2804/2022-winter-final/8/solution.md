# **Recursive Formula Explanation**

## **Case 1: If the first term is 1**

- If the first term is **1**, the remaining sum is $n - 1$.
- The number of ways to write $n - 1$ as a sum of 1's and 3's is $S_{n-1}$.

## **Case 2: If the first term is 3**

- If the first term is **3**, the remaining sum is $n - 3$.
- The number of ways to write $n - 3$ as a sum of 1's and 3's is $S_{n-3}$.

Since these two cases **cover all possible scenarios** of writing any sum given the constraints in the question above (the first number must either be **1** or **3**), the total number of ways is: $S_n = S_{n-1} + S_{n-3}$
