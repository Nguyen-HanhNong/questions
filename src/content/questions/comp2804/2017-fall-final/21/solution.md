## **Counterexample to Show $ X $ and $ Y $ Are Not Independent**

We want to demonstrate mathematically that the random variables:

- $ X = i + j $ (sum of two six-sided dice rolls)
- $ Y = i - j $ (difference between two six-sided dice rolls)

are **not independent** by showing an example where the independence condition $P(X = x \land Y = y) = P(X = x) \cdot P(Y = y)$ **fails** for certain values of $ x $ and $ y $.

---

## **Choose Specific Values**

Let:

- $ X = 4 $ (sum of the two dice is 4)
- $ Y = 2 $ (difference between the two dice is 2)

We will compute:

1. $ P(X = 4 \land Y = 2) $
2. $ P(X = 4) $
3. $ P(Y = 2) $
4. Check if the independence formula holds.

---

## **Joint Probability $ P(X = 4 \land Y = 2) $**

For $ X = 4 $ and $ Y = 2 $:

- The sum $ i + j = 4 $
- The difference $ i - j = 2 $

Possible pairs $(i, j)$ that satisfy both conditions: $ (3,1) $

There is **1 valid outcome** out of $ 36 $ total outcomes, so $P(X = 4 \land Y = 2) = \frac{1}{36}$

---

## **Marginal Probability $ P(X = 4) $**

Possible pairs where the sum is 4: $ (1,3), (2,2), (3,1) $

There are **3 valid outcomes** out of $36$ total outcomes, so $P(X = 4) = \frac{3}{36} = \frac{1}{12}$

---

## **Marginal Probability $ P(Y = 2) $**

Possible pairs where the difference is 2: $ (3,1), (4,2), (5,3), (6,4) $

There are **4 outcomes** out of $36$ total outcomes, so $P(Y = 2) = \frac{4}{36} = \frac{1}{9}$

## **Check Independence Condition**

If $ X $ and $ Y $ were independent, we would expect: $P(X = 4 \land Y = 2) = P(X = 4) \cdot P(Y = 2)$

Substituting the probabilities: $\frac{1}{36} \stackrel{?}{=} \frac{1}{12} \cdot \frac{1}{9}$

Simplify the right-hand side: $\frac{1}{12} \cdot \frac{1}{9} = \frac{1}{108}$

Comparing the two probabilities: $\frac{1}{36} \neq \frac{1}{108}$

Clearly, the probabilities **do not match**, which means that the random variables $ X $ and $ Y $ are **not independent**.
