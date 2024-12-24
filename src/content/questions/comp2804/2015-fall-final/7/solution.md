# Recursive Breakdown

Consider two cases based on the **first character** of the string:

1. **If the first character is 'a':**

The remaining $n - 1$ characters can be any string of length $n - 1$ using **a, b, c**. The number of such strings is $3^{n-1}$.

2. **If the first character is 'b' or 'c':**

The string must still contain at least one 'a' in the remaining $n - 1$ characters. This is equivalent to counting valid strings of length $n - 1$ containing at least one 'a', which is $S_{n-1}$. Since the first character can be either **'b'** or **'c'** (2 choices), the contribution is: $2 \cdot S_{n-1}$

Adding both contributions: $S_n = 2 \cdot S_{n-1} + 3^{n-1}$
