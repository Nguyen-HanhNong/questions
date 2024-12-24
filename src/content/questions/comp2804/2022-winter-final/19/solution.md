## **Define an Indicator Random Variable**

For each friend $ i $ (where $ i = 1, 2, \ldots, n $):

- Define an indicator random variable $ X_i $ such that: $X_i =$
  - $1 \text{ if friend $ i $ shouts "Huzzah!"}$
  - $0 \text{ otherwise}$

The total number of friends who shout "Huzzah!" can be expressed as: $X = \sum\_{i=1}^{n} X_i$. The expected value of $X$ is $E(X) = E(\sum\_{i=1}^{n} X_i)$.

Using the **linearity of expectation**, we can simplify the expected value to the following: $E(X) = \sum\_{i=1}^{n} E(X_i)$

Since each friend has the same probability of shouting "Huzzah!" (by symmetry), we know: $E(X) = n \cdot E(X_1)$

Our task now reduces to finding $ E(X_1) $, the probability that a given friend shouts "Huzzah!".

---

## **Probability of Shouting "Huzzah!"**

A friend shouts "Huzzah!" if:

1. Their coin flip is different from their **left neighbor's flip**.
2. Their coin flip is different from their **right neighbor's flip**.

For three coin flips (Left Player, Current Player, Right Player), the probability distributions are:

- There are $ 2^3 = 8 $ possible outcomes for these three flips.
- Out of these, only **2 outcomes** satisfy the "Huzzah!" condition:
  - **HTH**
  - **THT**

So the probability is: $P(X_1 = 1) = \frac{2}{8} = \frac{1}{4}$

Thus: $E(X_1) = \frac{1}{4}$

---

## **Step 3: Substitute into the Expectation Formula**

Substituting into the linearity formula we calculated above:

$E(X) = n \cdot E(X_1) = n \cdot \frac{1}{4} = \frac{n}{4}$
