## **Understand the Variables**

- $ X $ depends **only on $ D_1 $**.
- $ Y $ depends on **both $ D_1 $ and $ D_2 $**, but specifically on their **sum**.

### **Independence Intuition**

- $ D_1 $ and $ D_2 $ are **independent random variables**.
- The sum $ D_1 + D_2 = 7 $ is equally likely across pairs of rolls, and knowing $ D_1 $ does not influence the probability of this sum.

This suggests that $ X $ (based on $ D_1 $) and $ Y $ (based on the sum of $ D_1 $ and $ D_2 $) are independent. However, we need to verify this mathematically.

## **Verify the Independence Mathematically**

We need to check if: $P(X = x \land Y = y) = P(X = x) \cdot P(Y = y)$

### **Compute $P(X = x)$**

$ X = 2 \cdot D_1 $, where $ D_1 $ can take values from 1 to 6.

The possible values of $ X $ can be $ 2, 4, 6, 8, 10, 12 $

The probability for each possible value of $ X $ is: $P(X = x) = \frac{1}{6}$ for each valid value of $ x $.

---

### **Compute $P(Y = y)$**

$ Y = 1 $ if $ D_1 + D_2 = 7 $.
Possible pairs that satisfy $ D_1 + D_2 = 7 $: $ (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) $

There are **6 pairs** out of $ 36 $ total outcomes that satisfy this condition that $ Y = 1 $. This means that $P(Y = 1) = \frac{6}{36} = \frac{1}{6}$

Similarly, using complement rule we can easily find out $P(Y = 0)$: $P(Y = 0) = 1 - P(Y = 1) = \frac{5}{6}$

---

### **Compute $ P(X = x \land Y = y) $**

Since $ X $ depends only on $ D_1 $ and $ Y $ depends on the sum $ D_1 + D_2 $, and since $ D_1 $ and $ D_2 $ are independent:

$
P(X = x \land Y = y) = P(X = x) \cdot P(Y = y)
$

Substituting the probabilities:

$
P(X = x \land Y = 1) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}
$

$
P(X = x \land Y = 0) = \frac{1}{6} \cdot \frac{5}{6} = \frac{5}{36}
$

These match the joint probabilities derived independently from the rolls of two dice. Thus, the independence condition holds we have proven that for all valid values of $ x $ and $ y $ that the independent random variables $ X $ and $ Y $ are independent.
