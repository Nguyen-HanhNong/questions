We need to determine whether $X$ and $Y$ are **independent** or **dependent**.

---

## **Definition of Independence of Random Variables**

Two random variables $X$ and $Y$ are **independent** if: $P(X = x | Y = y) = P(X = x) \cdot P(Y = y)$ for all $x$ and $y$. If this condition does not hold, they are **dependent**.

---

## **Relationship Between X and Y**

### **What do the variables represent?**

- $X = \max(D_1, D_2)$: The maximum value observed from two six-sided dice rolls.
- $Y = D_1 + D_2$: The sum of the two dice rolls.

### **Key Observation**

The maximum value of two dice rolls is inherently tied to their sum:

For example, if $Y = 12$ (the sum is maximized), it means both dice rolled a **6**, and therefore, $X = 6$.

Certain values of $Y$ restrict the possible values of $X$. This means knowing $Y$ influences our knowledge of $X$.

## **Counter-Example for Independence**

To prove that $X$ and $Y$ are **dependent**, we need to find a counter-example where the independence condition does not hold for a single pair of $x$ and $y$ values.

Let's consider the following:

- $X = 6$ (Maximum of two rolls is 6)
- $Y = 7$ (Sum of two rolls is 7)

We will calculate:

1. $ P(X = 6 \land Y = 7) $
2. $ P(X = 6) $
3. $ P(Y = 7) $
4. Check if the independence condition holds.

---

### **Calculate Each Probability**

Possible pairs $(D_1, D_2)$ such that $ Y = 7 $: Possible pairs are: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$

Among these pairs, the ones where the maximum value is 6 are:
$
(1,6), (6,1)
$

There are **2 favorable outcomes** out of $ 36 $ total outcomes (since two six-sided dice have $ 6 \times 6 = 36 $ total possibilities). So:
$
P(X = 6 \land Y = 7) = \frac{2}{36} = \frac{1}{18}
$

---

For $ X = 6 $, the possible pairs are: $(1,6), (2,6), (3,6), (4,6), (5,6), (6,1), (6,2), (6,3), (6,4), (6,5), (6,6)$

There are **11 favorable outcomes** out of $ 36 $ total outcomes. So: $P(X = 6) = \frac{11}{36}$

---

The possible pairs for $ Y = 7 $ are: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$

There are **6 favorable outcomes** out of $ 36 $ total outcomes. So: $P(Y = 7) = \frac{6}{36} = \frac{1}{6}$

---

### Compare the Independence Condition

Substituting into the independence formula:

$
P(X = 6 \land Y = 7) \stackrel{?}{=} P(X = 6) \cdot P(Y = 7)
$

Substituting the values:

$
\frac{1}{18} \stackrel{?}{=} \frac{11}{36} \cdot \frac{1}{6}
$

Simplify the right-hand side:

$
\frac{11}{216}
$

Convert the left-hand side to have the same denominator:

$
\frac{1}{18} = \frac{12}{216}
$

Clearly:

$
\frac{12}{216} \neq \frac{11}{216}
$

The equality does **not hold**, violating the independence condition. This proves that $X$ and $Y$ are not **independent**.
