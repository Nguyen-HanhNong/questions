Oh, we just need to find out something like $ Pr(G = 1, B = 1) = Pr(G = 1) cdot Pr(B = 1) $

<ul>
	<li> Let S be the set of all subsets 
	      $ S = { (BB), (GG), (BGB), (BGG), (GBG), (GBB) } $ 
	      $ |S| = 6 $
	<li> Let's determine $ G = 1 $ 
	      $ (G=1) = { (BGB), (GBB) } $ 
	      $ |G=1| = 2 $ 
	      $ Pr(G=1) = frac{2}{6} = frac{1}{3} $
	<li> Let's determine $ B = 1 $ 
	      $ (B=1) = { (BGB), (GBG) } $ 
	      $ |B=1| = 2 $ 
	      $ Pr(B=1) = frac{2}{6} = frac{1}{3} $
	<li> Let's determine $ G = 1, B = 1 $ 
	      There is never a case where there is only 1 boy and 1 girl. We need them to pop out another baby to break the gender tie 
	      $ G=1 cap B=1 = emptyset $ 
	      $ Pr(G=1, B=1) = 0 $
</ul>
Now, let's check for independence 
$ Pr(G=1 cap B=1) = Pr(G=1) cdot Pr(B=1) $ 
$ 0 = frac{1}{3} cdot frac{1}{3} $ 
$ 0 = frac{1}{9} $ 
$ 0 neq frac{1}{9} $ 
Therefore, $ G $ and $ B $ are not independent random variables.