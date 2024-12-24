In this case, our dice has special properties compared to a normal 6-sided dice. <br />
We can define the dice as having the following results: {a, b, b, c, c, c} <br />
Now, all we have to do is determine $Pr(A \cap B)$ and $Pr(B)$ to determine $Pr(A|B)$ using the independence formula. <br />

$Pr(B)$ represents the probability of at least one of the rolls resulting in the letter $a$. To make this easier to visualize, we can draw out a table of all possible outcomes between the two dice rolls. <br />
$|S|$ = the sample space of all possible rolls = $6 \times 6 = 36$ <br />

  <table style="
    border-collapse: collapse; 
    margin: 0 auto; 
    table-layout: fixed; 
    width: 600px;">
    <caption style="
      font-size: 1.25rem; 
      font-weight: bold; 
      margin-bottom: 10px;">
      All Possible Rolls for Two Custom 6-Sided Dice
    </caption>
    <thead>
      <tr>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          background-color: #f2f2f2;"></th>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          background-color: #f2f2f2;">Die 2: a</th>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          background-color: #f2f2f2;">Die 2: b</th>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          background-color: #f2f2f2;">Die 2: b</th>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          background-color: #f2f2f2;">Die 2: c</th>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          background-color: #f2f2f2;">Die 2: c</th>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          background-color: #f2f2f2;">Die 2: c</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          font-weight: bold; 
          background-color: #f2f2f2;">Die 1: a</th>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(a,a)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(a,b)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(a,b)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(a,c)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(a,c)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(a,c)</td>
      </tr>
      <tr>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          font-weight: bold; 
          background-color: #f2f2f2;">Die 1: b</th>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(b,a)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(b,b)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(b,b)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(b,c)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(b,c)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(b,c)</td>
      </tr>
      <tr>
        <th style="
          border: 1px solid #ccc; 
          padding: 10px; 
          text-align: center; 
          font-weight: bold; 
          background-color: #f2f2f2;">Die 1: c</th>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(c,a)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(c,b)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(c,b)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(c,c)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(c,c)</td>
        <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">(c,c)</td>
      </tr>
    </tbody>
  </table>

As we can see from the table, there are 11 possible outcomes that have at least 1 $a$ in them. Therefore, $Pr(B) = \frac{|B|}{|S|} = \frac{11}{36}$. <br />

For $Pr(A \cap B)$, we only care about the cases when both rolls result in the same letter AND at least one of the rolls result in the letter $a$. <br />
From the table, we can see that there is only 1 possible outcome that satisfies both conditions, which is the case where both dice roll an $a$. Therefore, $Pr(A \cap B) = \frac{|A \cap B|}{|S|} = \frac{1}{36}$. <br />

Given this, we can now calculate $Pr(A|B)$ using the independence formula: <br />

$ Pr(A|B) = \frac{ Pr(A \cap B) }{ Pr(B) } = \frac{ \frac{1}{36} }{ \frac{11}{36} } = \frac{1}{11} $ <br />
