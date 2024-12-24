## Goal of Problem

We want to calculate the **expected value** of the random variable: $X = \max(a, b)$ where:

- $ a $ and $ b $ are chosen independently and uniformly from the set $ \{1, 2, \ldots, 100\} $.

---

## **Key Observation**

The maximum of two independent uniformly random variables, $ a $ and $ b $, takes the value $ k $ if:

- At least one of the two numbers is equal to $ k $.
- The other number is **less than or equal to $ k $**.

### **Probability that $ X = k $**

For a maximum of $ k $ to occur:

1. At least one of $ a $ or $ b $ must be equal to $ k $.
2. The other value must be $ \leq k $.

The total number of outcomes for $ (a, b) $ is: $100^2$ since $ a $ and $ b $ are chosen from $ \{1, 2, \ldots, 100\}$.

The favorable outcomes for $ X = k $ are:

- $ a = k $ and $ b \leq k $: $ k $ outcomes.
- $ b = k $ and $ a \leq k $: $ k $ outcomes.
- $ a = b = k $ is counted twice, so subtract 1.

Total favorable outcomes: $2k - 1$

This means the probability that $ X = k $ is: $P(X = k) = \frac{|X = k|}{|S|} = \frac{2k - 1}{100^2}$.

---

## **Substituting Expected Value Formula**

By the definition of expected value: $E(X) = \sum\_{k=1}^{100} k \cdot P(X = k)$

Substituting the probability: $E(X) = \sum\_{k=1}^{100} k \cdot \frac{2k - 1}{100^2}$

We can rewrite $2k-1$ as $1 + 2(k-1)$. They result in the same sum, so we get: $E(X) = \sum\_{k=1}^{100} k \cdot \left(\frac{1 + 2(k-1)}{100^2}\right)$
