## **How does Linearity of Expectation apply to the question?**

1. Jim answers **25 questions** randomly.
2. For each question:

   - With probability $P(\text{correct}) = \frac{1}{4}$, Jim gets **+1** mark.
   - With probability $P(\text{incorrect}) = \frac{3}{4}$, Jim loses $-z$ marks.

Let $X_i$ represent the score Jim receives for the **i-th question**. Let $X$ represent Jim's total score.
We can represent his final total score as: $X = \sum_{i=1}^{25} X_i$. The expected value of Jim's total score is: $E(X) = E(\sum_{i=1}^{25} X_i)$.

We can use linearity of expectation to simplify the expression above. Using **linearity of expectation**: $E(X) = E(\sum_{i=1}^{25} X_i) = \sum_{i=1}^{25} E(X_i)$. Now, all we have to do is calculate $E(X_i)$ instead of calculating the expected value of the entire summation itself.

We can simplify the above expression even further. Since every question is identical and independent: $E(X) = 25 \cdot E(X_i)$ For the total expected value to be **0**, we need to find the $z$ value where: $E(X_i) = 0$

---

## **Calculate the Expected Value**

Using the definition of expected value: $E(X_i) = (1) \cdot P(\text{correct}) + (-z) \cdot P(\text{incorrect})$

Substituting the probabilities: $E(X_i) = (1) \cdot \frac{1}{4} + (-z) \cdot \frac{3}{4}$

Simplify: $E(X_i) = \frac{1}{4} - \frac{3z}{4}$

Set $E(X_i) = 0$: $\frac{1}{4} - \frac{3z}{4} = 0$

Rearrange the equation: $\frac{1}{4} = \frac{3z}{4}$

Cancel the common factor of $\frac{1}{4}$ by multiplying both sides by $4$: $1 = 3z$

Solve for the unknown variable $z$: $z = \frac{1}{3}$
