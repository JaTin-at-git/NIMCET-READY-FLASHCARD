let PnC_TQA = "" +
    "T: PnC" +
    "Q: Total number of Circular permutation of n objects if clockwise and anti-clockwise are different?" +
    "A: (n-1)!" +
    "" +
    "T: PnC" +
    "Q: Total number of Circular Circular permutation of n objects if clockwise and anti-clockwise are same?" +
    "A:$$${\\frac{1}{2}\\left(n-1\\right)!}$$" +
    "" +
    "T: PnC" +
    "Q:$$${^nC_r=^nC_?}$$" +
    "A:$$${^nC_r=^nC_{n-r}}$$" +
    "" +
    "T: PnC" +
    "Q:$$${^nC_r + ^nC_{r-1}=?}$$" +
    "A:$$${^nC_r+^nC_{r-1}=^{n+1}C_{r+1}}$$" +
    "" +
    "T: PnC" +
    "Q:$$${^nC_r=?^{n-1}C_{r-1}}$$" +
    "A:$$${^nC_r=\\frac{n}{r}\\cdot ^{n-1}C_{r-1}}$$" +
    "" +
    "T: PnC" +
    "Q:$$${\\left(^nC_0\\right)^2+\\left(^nC_1\\right)^2+...+\\left(^nC_n\\right)^2=?}$$" +
    "A:$$${\\left(^nC_0\\right)^2+\\left(^nC_1\\right)^2+...+\\left(^nC_n\\right)^2=^{2n}C_n}$$" +
    "" +
    "T: PnC" +
    "Q:$$${^nC_0+^nC_1+^nC_2+...+^nC_n=?}$$" +
    "A:$$${^nC_0+^nC_1+^nC_2+...+^nC_n=2^n}$$" +
    "" +
    "T: PnC" +
    "Q:$$${^nC_0+^nC_2+^nC_4+...=?}$$" +
    "A:$$${^nC_0+^nC_1+^nC_2+...=2^{n-1}}$$" +
    "" +
    "T: PnC" +
    "Q:$$${^nC_1+^nC_3+^nC_5+...=?}$$" +
    "A:$$${^nC_0+^nC_1+^nC_2+...=2^{n-1}}$$" +
    "" +
    "T: PnC" +
    "Q:$$${^nC_r}$$ has max value when r = ?" +
    "A:$$${\\frac{n}{2},}$$$${\\frac{n+1}{2},}$$$${\\frac{n-1}{2},}$$" +
    "" +
    "T: PnC" +
    "Q: Exponent of p in n!" +
    "A:$$${\\frac{n}{p}+\\frac{n}{p^2}+\\frac{n}{p^3}... }$$" +
    "" +
    "T: PnC" +
    "Q:$$${N=P_{1}^{\\alpha_1}\\cdot P_{2}^{\\alpha_2}\\cdot P_{3}^{\\alpha_3}...\\cdot P_{n}^{\\alpha_n}}$$Number of divisors?" +
    "A:$$${(\\alpha_1+1)(\\alpha_2+1)...(\\alpha_n+1)}$$" +
    "" +
    "T: PnC" +
    "Q:$$${N=P_{1}^{\\alpha_1}\\cdot P_{2}^{\\alpha_2}\\cdot P_{3}^{\\alpha_3}...\\cdot P_{n}^{\\alpha_n}}$$ Sum of divisors?" +
    "A:$$${\\left [ \\frac{P_1^{\\alpha_{1}+1}-1}{P_1-1} \\right ]\\cdot\\left [ \\frac{P_2^{\\alpha_{2}+1}-1}{P_2-1} \\right ]\\cdot...\\left [ \\frac{P_n^{\\alpha_{n}+1}-1}{P_n-1} \\right]}$$" +
    "" +
    "T: PnC" +
    "Q:$$${N=P_{1}^{\\alpha_1}\\cdot P_{2}^{\\alpha_2}\\cdot P_{3}^{\\alpha_3}...\\cdot P_{n}^{\\alpha_n}}$$ Number of even divisors?" +
    "A:$$${(\\alpha_1)(\\alpha_2+1)...(\\alpha_n+1)}$$" +
    "" +
    "T: PnC" +
    "Q: Number of ways of selecting at least one thing from each group of 'p' different things,'q' different things,'r' different things?" +
    "A:$$${(2^p-1).(2^q-1).(2^r-1)}$$" +
    "" +
    "T: PnC" +
    "Q: Number of ways of selecting at least one thing of each type from 'p' identical things,'q' identical things,'r' identical things?" +
    "A:$$${(p)(q)(r)}$$" +
    "" +
    "T: PnC" +
    "Q: Number of ways of selecting at least one thing from 'p' identical things,'q' identical things,'r' identical things?" +
    "A:$$${(p+1)(q+1)(r+1)-1}$$" +
    "" +
    "T: PnC" +
    "Q: Number of ways of selecting at most r things out of n identical things?" +
    "A:$$${r+1}$$" +
    "" +
    "T: PnC" +
    "Q: Number of ways of selecting at least 1 things out of n identical things?" +
    "A:$$${n}$$" +
    "" +
    "T: PnC" +
    "Q: Number of ways of selecting zero or more things out of n identical things?" +
    "A:$$${n+1}$$" +
    "" +
    "T: PnC" +
    "Q: Number of ways of selecting r things out of n identical things?" +
    "A:$$${1}$$" +
    "";

PnC_TQA += "" +
    "T: PnC" +
    "Q: There are 'n' points in a plane out of which 'm' are collinear, then </br> Number of straight lines ? </br> Number of Triangles? </br> Number of Quadrilaterals?" +
    "A:$$${^nC_2-^mC_2+1}$$\n$${^nC_3-^mC_3}$$\n$${^nC_4-^mC_4}$$" +
    "" +
    "T: PnC" +
    "Q: Number of diagonals in a polygon of n sides ?" +
    "A:$$${^nC_2-n}$$\nor\t$${\\frac{n(n-3)}{2}}$$" +
    "" +
    "T: PnC" +
    "Q:'m' // lines intersecting with 'n' // lines.</br>Number of Quadrilaterals formed?" +
    "A:$$${^nC_2\\times ^mC_2}$$" +
    "" +
    "T: PnC" +
    "Q:$Number of rectange in a square of size $${n\\times n}$$ is ?" +
    "A:$$${\\sum_{r=1}^{n}r^3}$$" +
    "" +
    "T: PnC" +
    "Q:$Number of square in a square of size $${n\\times n}$$ is ?" +
    "A:$$${\\sum_{r=1}^{n}r^2}$$";

PnC_TQA += "" +
    "T: PnC" +
    "Q: Division of (p+q+r) distinct objects into three groups of sizes (p,q,r) respectively ?" +
    "A:$$${\\frac{(p+q+r)!}{p!&nbsp;q!&nbsp;r!}}$$" +
    "" +
    "T: PnC" +
    "Q: Division of (p+q+r) distinct objects into three persons having (p,q,r) objects respectively ?" +
    "A:$$${\\frac{(p+q+r)!}{p!&nbsp;q!&nbsp;r!}\\times 3!}$$" +
    "" +
    "T: PnC" +
    "Q: Division of (3n) distinct objects into three equal groups ?" +
    "A:$$${\\frac{(3n)!}{n!&nbsp;n!&nbsp;n!}\\times\\frac{1}{3!}}$$" +
    "" +
    "T: PnC" +
    "Q: Division of (3n) distinct objects equally into three persons ?" +
    "A:$$${\\frac{(3n)!}{n!&nbsp;n!&nbsp;n!}\\times\\frac{3!}{3!}}$$" +
    "";

PnC_TQA += "" +
    "T: PnC" +
    "Q: Number of functions from n(A)=r to n(B)=n?<br><br>Distribution of 'n' different things into 'r' differnt boxes if any box can recieve any number of objects?" +
    "A: r<sup>n</sup>" +
    "" +
    "T: PnC" +
    "Q: Number of onto functions from n(A)=r to n(B)=n?<br><br>Distribution of 'n' different things into 'r' differnt boxes if each box has at least one object?" +
    "A:$$${[r^n]-[^{r}C_1(r-1)^n]+[^{r}C_2(r-2)^n]-[^{r}C_3(r-3)^n]...}$$";

PnC_TQA += "" +
    "T: PnC" +
    "Q:$Number of positive integral solution of <br> $${x_1+x_2+x_3+...+x_r=n}$$" +
    "A:$$${^{n-1}C_{r-1}}$$" +
    "" +
    "T: PnC" +
    "Q:$Number of integral solution of <br> $${x_1+x_2+x_3+...+x_r=n}$$ <br> where $${x_i\\geq0}$$" +
    "A:$$${^{n+r-1}C_{r-1}}$$" +
    "" +
    "T: PnC" +
    "Q: Derangement formulla?" +
    "A:$$${n![\\frac{1}{0!}-\\frac{1}{1!}+\\frac{1}{2!}-\\frac{1}{3!}...\\frac{-1^n}{n!}]}$$" +
    "" +
    "T: PnC" +
    "Q: Derangement formulla if 'r' things are placed at correct places?" +
    "A:$$${^nC_r(n-r)![\\frac{1}{0!}-\\frac{1}{1!}+\\frac{1}{2!}-\\frac{1}{3!}...\\frac{-1^{n-r}}{(n-r)!}]}$$";


//probability//
let Probability_TQA = "" +
    "T: Probability" +
    "Q: P(B|A) = ?" +
    "A:$$${\\frac{P(A\\cap B)}{P(A)}}$$" +
    "" +
    "T: Probability" +
    "Q:$If A and B are independent, then<br><br>$${P(A\\cap B) = ?}$$" +
    "A:$$${P(A\\cap B)=P(A)\\times P(B)}$$" +
    "" +
    "T: Probability" +
    "Q:$Law of total probability for occurance of event E with mutually-exclusive and exhaustive events$${ E_1, E_2, ... , E_n ?}$$" +
    "A:$$${P(E)=P(E_1)\\times P(E/E_1)+P(E_2)\\times P(E/E_2)...}$$ or $${\\sum _{i=1}^n P(E_i)\\times P(E|E_i)}$$" +
    "" +
    "T: Probability" +
    "Q:$$${P(E_i|E)}$$ according to Bayes' law ?" +
    "A:$$${\\frac{P(E_i)\\times P(E|E_i)}{\\sum_{i=1}^{n} P(E_i)\\times P(E|E_i)}}$$" +
    "" +
    "T: Probability" +
    "Q: Mean of a random variable ?" +
    "A:$$${\\sum x_iP_i = \\lambda}$$" +
    "" +
    "T: Probability" +
    "Q: Variance of a Random variable ?" +
    "A:$$${Var(X) = E(X^2) - [E(X)]^2}$$or$${Var(X)=\\sum x_i^2p_i-[\\sum x_ip_i]^2}$$";

Probability_TQA += "" +
    "T: Probability" +
    "Q: (Binomial Distribution) If probability of Success is 'p' and that of failure is 'q', then probability of exactly 'r' success in 'n' trials is ?" +
    "A:$$${P(X=r)=^nC_r \\cdot  p^r\\cdot q^{n-r}}$$" +
    "" +
    "T: Probability" +
    "Q: Mean of a Binomial Variate B(n,p) is ?" +
    "A:$$${n\\cdot p}$$" +
    "" +
    "T: Probability" +
    "Q: Variance of a Binomial Variate B(n,p) is ?" +
    "A:$$${n\\cdot p \\cdot q}$$" +
    "" +
    "T: Probability" +
    "Q: Formula of Poisson Distribution ?" +
    "A:$$${P(X=r) = \\frac{ e^{-\\lambda} \\cdot \\lambda^r}{r!}}$$" +
    "" +
    "T: Probability" +
    "Q: What is ʎ in Poisson Distribution?" +
    "A:  ʎ= Mean= variance= n.p";

var SequenceAndSeries_TQA = "";
SequenceAndSeries_TQA += "" +
    "T: SequenceAndSeries" +
    "Q: n<sup>th</sup> term of an AP?" +
    "A:$$${T_n=a+(n-1)d}$$" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Sum of first n terms of an AP?" +
    "A:$$${S_n=\\frac{n}{2}[2a+(n-1)d]}$$ or $${S_n=\\frac{n}{2}[a+l]}$$" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Terms to take in AP when sum is given, of 3,4 and 5 terms?" +
    "A: <img src='images/SeriesAndSequence/1.jpeg'>" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Realtion b/w a,b,c if thery are in AP" +
    "A:$$${b=\\frac{a+c}{2}}$$" +
    "" +
    "T: SequenceAndSeries" +
    "Q: n<sup>th</sup> term of an GP?" +
    "A:$$${T_n=ar^{n-1}}$$" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Sum of n terms of a GP?" +
    "A:$$${S_n=\\frac{a(r^n-1)}{r-1}}$$" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Sum of ∞ terms of a GP?" +
    "A:$$${S_\\infty =\\frac{a}{1-r}}$$" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Terms to take in GP when product is given, of 3,4 and 5 terms?" +
    "A: <img src='images/SeriesAndSequence/2.jpeg'>" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Realtion b/w a,b,c if thery are in GP" +
    "A:$$${b=\\sqrt{a\\cdot c}}$$" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Arrange AM GM HM according to their magnitude" +
    "A: AM > GM > HM" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Realtion b/w a,b,c if thery are in HP" +
    "A:$$${b=\\frac{2ac}{a+c}}$$" +
    "" +
    "T: SequenceAndSeries" +
    "Q: n<sup>th</sup> term of an AGP?" +
    "A:$$${T_n=AP_{n^{th}term}\\cdot GP_{n^{th}term}}$$ $${T_n=[a+(n-1)d)]\\cdot[ar^{n-1}]}$$" +
    "" +
    "T: SequenceAndSeries" +
    "Q: Sum of ∞ terms of an AGP" +
    "A:$$${S_\\infty =\\frac{ab}{1-r}+ \\frac{dbr}{(1-r)^2} }$$";

let MaD_TQA = "";
MaD_TQA += "" +
    "T: MaD" +
    "Q: (AB)<sup>T</sup>" +
    "A: B<sup>T</sup>A<sup>T</sup>" +
    "" +
    "T: MaD" +
    "Q: What is a symmetric matrix?" +
    "A: A<sup>T</sup>=A" +
    "" +
    "T: MaD" +
    "Q: What is a skew-symmetric matrix?" +
    "A: A<sup>T</sup>=-A" +
    "" +
    "T: MaD" +
    "Q: Relation between Cofactor and Minor" +
    "A:$$${C_{ij}=\\pm M_{ij}}$$" +
    "" +
    "T: MaD" +
    "Q: what is adj(A)?" +
    "A: adj(A) is the transpose of cofactor matrix of A" +
    "" +
    "T: MaD" +
    "Q: General formula for A<sup>-1</sup>" +
    "A:$$${A^{-1}=\\frac{1}{\\left | A \\right |}\\cdot  adj(A)}$$" +
    "" +
    "T: MaD" +
    "Q: A.adj(A)" +
    "A:$$${|A|I_n}$$" +
    "" +
    "T: MaD" +
    "Q: (ABC)<sup>-1</sup> = ?" +
    "A:$$${C^{-1}B^{-1}A^{-1}}$$" +
    "" +
    "T: MaD" +
    "Q: (A<sup>T</sup>)<sup>-1</sup> = ?" +
    "A: (A<sup>-1</sup>)<sup>T</sup>" +
    "" +
    "T: MaD" +
    "Q: |adj(A)| = ?" +
    "A: |A|<sup>n-1</sup>" +
    "" +
    "T: MaD" +
    "Q: | adj adj adj(A) | = ?" +
    "A: |A|<sup>(n-1)<sup>3</sup></sup>" +
    "" +
    "T: MaD" +
    "Q: adj(AB) = ?" +
    "A: adj(A) adj(B)" +
    "" +
    "T: MaD" +
    "Q: adj(A<sup>T</sup>) = ?" +
    "A: (adj(A))<sup>T</sup>" +
    "" +
    "T: MaD" +
    "Q: adj adj(A) = ?" +
    "A: |A|<sup>n-2</sup>A" +
    "" +
    "T: MaD" +
    "Q: adj adj adj(A) = ?" +
    "A: |A|<sup>n-3</sup>A" +
    "" +
    "T: MaD" +
    "Q: |A<sup>-1</sup>| = ?" +
    "A: |A|<sup>-1</sup>" +
    "" +
    "T: MaD" +
    "Q: If 'r' is a real number and 'A' is n×n matrix then |rA| = ?" +
    "A: r<sup>x</sup>|A|" +
    "";

MaD_TQA += "" +
    "T: MaD" +
    "Q: |A<sup>T</sup>| = ?" +
    "A: |A|" +
    "" +
    "T: MaD" +
    "Q: If equations are represented as <img src='images/MaD/1.png'> then A/C to Cramer's rule x,y,z are given by ?" +
    "A:  <img src='images/MaD/2.png '>";

//copy latex from here
// https://latex.codecogs.com/eqneditor/editor.php