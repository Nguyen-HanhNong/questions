Since we have an endless algorithm (i.e the algorithm will run forever until it finds a solution), we can model this problem using a geometric distribution.

By the geometric distribution, the expected value of the number of attempts until we get a success is $\frac{1}{p}$, where $p$ is the probability of terminating the algorithm at each step.

In this case, the probability of terminating the algorithm is either getting three heads in a row or getting three tails in a row. The probability of getting three heads in a row is $\frac{1}{2^3} = \frac{1}{8}$, and the probability of getting three tails in a row is also $\frac{1}{8}$. Therefore, the probability of terminating the algorithm at each step is $\frac{1}{8} + \frac{1}{8} = \frac{1}{4}$.

Now, we can calculate the expected value using the formula for expected value for geometric distribution: $E(X) = \frac{1}{p} = \frac{1}{\frac{1}{4}} = 4$.
