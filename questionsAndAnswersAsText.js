// This file contains questions over 1the following topics:
// PnC_TQA
// Probability_TQA
// SequenceAndSeries_TQA
// complex
// MaD_TQA
// Misc_TQA
// quad
// tRatio
// trigSumPro
// trigMultiAngle
// trigMisc
// trigSeries
// condTrig
// generalSoln
// trigMiscFacts
// Misc_TQA


let PnC_TQA = "" +
    "Q: Total number of Circular permutation of n objects if clockwise and anti-clockwise are different?" +
    "A: (n-1)!" +
    "" +
    "Q: Total number of Circular Circular permutation of n objects if clockwise and anti-clockwise are same?" +
    "A:$$${ \\frac{1}{2} \\left(n-1 \\right)!}$$" +
    "" +
    "Q:$$${^nC_r=^nC_?}$$" +
    "A:$$${^nC_r=^nC_{n-r}}$$" +
    "" +
    "Q:$$${^nC_r + ^nC_{r-1}=?}$$" +
    "A:$$${^nC_r+^nC_{r-1}=^{n+1}C_{r+1}}$$" +
    "" +
    "Q:$$${^nC_r=?^{n-1}C_{r-1}}$$" +
    "A:$$${^nC_r= \\frac{n}{r} \\cdot ^{n-1}C_{r-1}}$$" +
    "" +
    "Q:$$${ \\left(^nC_0 \\right)^2+ \\left(^nC_1 \\right)^2+...+ \\left(^nC_n \\right)^2=?}$$" +
    "A:$$${ \\left(^nC_0 \\right)^2+ \\left(^nC_1 \\right)^2+...+ \\left(^nC_n \\right)^2=^{2n}C_n}$$" +
    "" +
    "Q:$$${^nC_0+^nC_1+^nC_2+...+^nC_n=?}$$" +
    "A:$$${^nC_0+^nC_1+^nC_2+...+^nC_n=2^n}$$" +
    "" +
    "Q:$$${^nC_0+^nC_2+^nC_4+...=?}$$" +
    "A:$$${^nC_0+^nC_1+^nC_2+...=2^{n-1}}$$" +
    "" +
    "Q:$$${^nC_1+^nC_3+^nC_5+...=?}$$" +
    "A:$$${^nC_0+^nC_1+^nC_2+...=2^{n-1}}$$" +
    "" +
    "Q:$$${^nC_n+^{n+1}C_n+^{n+2}C_n+...+^{2n-1}C_n=?}$$" +
    "A:$$${^nC_n+^{n+1}C_n+^{n+2}C_n+...+^{2n-1}C_n=^{2n}C_{n+1}}$$" +
    "" +
    "Q:$$${^nC_r}$$ has max value when r = ?" +
    "A:$$${ \\frac{n}{2},}$$$${ \\frac{n+1}{2},}$$$${ \\frac{n-1}{2},}$$" +
    "" +
    "Q: Exponent of p in n!" +
    "A:$$${ \\frac{n}{p}+ \\frac{n}{p^2}+ \\frac{n}{p^3}... }$$" +
    "" +
    "Q:$$${N=P_{1}^{ \\alpha_1} \\cdot P_{2}^{ \\alpha_2} \\cdot P_{3}^{ \\alpha_3}... \\cdot P_{n}^{ \\alpha_n}}$$Number of divisors?" +
    "A:$$${( \\alpha_1+1)( \\alpha_2+1)...( \\alpha_n+1)}$$" +
    "" +
    "Q:$$${N=P_{1}^{ \\alpha_1} \\cdot P_{2}^{ \\alpha_2} \\cdot P_{3}^{ \\alpha_3}... \\cdot P_{n}^{ \\alpha_n}}$$ Sum of divisors?" +
    "A:$$${ \\left [ \\frac{P_1^{ \\alpha_{1}+1}-1}{P_1-1} \\right ] \\cdot \\left [ \\frac{P_2^{ \\alpha_{2}+1}-1}{P_2-1} \\right ] \\cdot... \\left [ \\frac{P_n^{ \\alpha_{n}+1}-1}{P_n-1} \\right]}$$" +
    "" +
    "Q:$$${N=P_{1}^{ \\alpha_1} \\cdot P_{2}^{ \\alpha_2} \\cdot P_{3}^{ \\alpha_3}... \\cdot P_{n}^{ \\alpha_n}}$$ Number of even divisors?" +
    "A:$$${( \\alpha_1)( \\alpha_2+1)...( \\alpha_n+1)}$$" +
    "" +
    "Q: Number of ways of selecting at least one thing from each group of 'p' different things,'q' different things,'r' different things?" +
    "A:$$${(2^p-1).(2^q-1).(2^r-1)}$$" +
    "" +
    "Q: Number of ways of selecting at least one thing of each type from 'p' identical things,'q' identical things,'r' identical things?" +
    "A:$$${(p)(q)(r)}$$" +
    "" +
    "Q: Number of ways of selecting at least one thing from 'p' identical things,'q' identical things,'r' identical things?" +
    "A:$$${(p+1)(q+1)(r+1)-1}$$" +
    "" +
    "Q: Number of ways of selecting at most r things out of n identical things?" +
    "A:$$${r+1}$$" +
    "" +
    "Q: Number of ways of selecting at least 1 things out of n identical things?" +
    "A:$$${n}$$" +
    "" +
    "Q: Number of ways of selecting zero or more things out of n identical things?" +
    "A:$$${n+1}$$" +
    "" +
    "Q: Number of ways of selecting r things out of n identical things?" +
    "A:$$${1}$$" +
    "" +
    "Q: There are 'n' points in a plane out of which 'm' are collinear, then </br> Number of straight lines ? </br> Number of Triangles? </br> Number of Quadrilaterals?" +
    "A:$$${^nC_2-^mC_2+1}$$$${^nC_3-^mC_3}$$$${^nC_4-^mC_4}$$" +
    "" +
    "Q: Number of diagonals in a polygon of n sides ?" +
    "A:$$${^nC_2-n}$$or	$${ \\frac{n(n-3)}{2}}$$" +
    "" +
    "Q: 'm' // lines intersecting with 'n' // lines.</br>Number of Quadrilaterals formed?" +
    "A:$$${^nC_2 \\times ^mC_2}$$" +
    "" +
    "Q:$Number of rectange in a square of size $${n \\times n}$$ is ?" +
    "A:$$${ \\sum_{r=1}^{n}r^3}$$" +
    "" +
    "Q:$Number of square in a square of size $${n \\times n}$$ is ?" +
    "A:$$${ \\sum_{r=1}^{n}r^2}$$" +
    "" +
    "Q: Division of (p+q+r) distinct objects into three groups of sizes (p,q,r) respectively ?" +
    "A:$$${ \\frac{(p+q+r)!}{p!&nbsp;q!&nbsp;r!}}$$" +
    "" +
    "Q: Division of (p+q+r) distinct objects into three persons having (p,q,r) objects respectively ?" +
    "A:$$${ \\frac{(p+q+r)!}{p!&nbsp;q!&nbsp;r!} \\times 3!}$$" +
    "" +
    "Q: Division of (3n) distinct objects into three equal groups ?" +
    "A:$$${ \\frac{(3n)!}{n!&nbsp;n!&nbsp;n!} \\times \\frac{1}{3!}}$$" +
    "" +
    "Q: Division of (3n) distinct objects equally into three persons ?" +
    "A:$$${ \\frac{(3n)!}{n!&nbsp;n!&nbsp;n!} \\times \\frac{3!}{3!}}$$" +
    "" +
    "Q: Number of functions from n(A)=r to n(B)=n?<br><br>Distribution of 'n' different things into 'r' differnt boxes if any box can recieve any number of objects?" +
    "A:$$${r^n}$$" +
    "" +
    "Q: Number of onto functions from n(A)=r to n(B)=n?<br><br>Distribution of 'n' different things into 'r' differnt boxes if each box has at least one object?" +
    "A:$$${[r^n]-[^{r}C_1(r-1)^n]+[^{r}C_2(r-2)^n]-[^{r}C_3(r-3)^n]...}$$" +
    "" +
    "Q:$Number of positive integral solution of <br> $${x_1+x_2+x_3+...+x_r=n}$$" +
    "A:$$${^{n-1}C_{r-1}}$$" +
    "" +
    "Q:$Number of integral solution of <br> $${x_1+x_2+x_3+...+x_r=n}$$ <br> where $${x_i \\geq0}$$" +
    "A:$$${^{n+r-1}C_{r-1}}$$" +
    "" +
    "Q: Derangement formulla?" +
    "A:$$${n![ \\frac{1}{0!}- \\frac{1}{1!}+ \\frac{1}{2!}- \\frac{1}{3!}... \\frac{-1^n}{n!}]}$$" +
    "" +
    "Q: Derangement formulla if 'r' things are placed at correct places?" +
    "A:$$${^nC_r(n-r)![ \\frac{1}{0!}- \\frac{1}{1!}+ \\frac{1}{2!}- \\frac{1}{3!}... \\frac{-1^{n-r}}{(n-r)!}]}$$" +
    "" +
    "Q: Number of cases to get a sum=2,3,...12 when two dices are rolled" +
    "A: <img src='images/PnC/1.png'>" +
    "" +
    "Q: Sum of digits in the unit place of all the numbers formed without repetation using <latex-js>$${(a_1,a_2,a_3,....,a_n)$$</latex-js>" +
    "A:$$${(n-1)!\\times (a_1+a_2+a_3+.....+a_n)}$$" +
    "" +
    "Q: Sum of all the numbers formed without repetation using <latex-js>$${(a_1,a_2,a_3,....,a_n)$$</latex-js>" +
    "A:$$${(n-1)!\\times (a_1+a_2+a_3+.....+a_n).(11111....nTimes)}$$";

let Probability_TQA =
    "" +
    "Q: P(B|A) = ?" +
    "A:$$${ \\frac{P(A \\cap B)}{P(A)}}$$" +
    "" +
    "Q:$If A and B are independent, then<br><br>$${P(A \\cap B) = ?}$$" +
    "A:$$${P(A \\cap B)=P(A) \\times P(B)}$$" +
    "" +
    "Q:$Law of total probability for occurance of event E with mutually-exclusive and exhaustive events$${ E_1, E_2, ... , E_n ?}$$" +
    "A:$$${P(E)=P(E_1) \\times P(E/E_1)+P(E_2) \\times P(E/E_2)...}$$ or $${ \\sum _{i=1}^n P(E_i) \\times P(E|E_i)}$$" +
    "" +
    "Q:$$${P(E_i|E)}$$ according to Bayes' law ?" +
    "A:$$${ \\frac{P(E_i) \\times P(E|E_i)}{ \\sum_{i=1}^{n} P(E_i) \\times P(E|E_i)}}$$" +
    "" +
    "Q: Mean of a random variable ?" +
    "A:$$${ \\sum x_iP_i = \\lambda}$$" +
    "" +
    "Q: Variance of a Random variable ?" +
    "A:$$${Var(X) = E(X^2) - [E(X)]^2}$$or$${Var(X)= \\sum x_i^2p_i-[ \\sum x_ip_i]^2}$$" +
    "" +
    "Q: (Binomial Distribution) If probability of Success is 'p' and that of failure is 'q', then probability of exactly 'r' success in 'n' trials is ?" +
    "A:$$${P(X=r)=^nC_r \\cdot p^r \\cdot q^{n-r}}$$" +
    "" +
    "Q: Mean of a Binomial Variate B(n,p) is ?" +
    "A:$$${n \\cdot p}$$" +
    "" +
    "Q: Variance of a Binomial Variate B(n,p) is ?" +
    "A:$$${n \\cdot p \\cdot q}$$" +
    "" +
    "Q: Formula of Poisson Distribution ?" +
    "A:$$${P(X=r) = \\frac{ e^{- \\lambda} \\cdot \\lambda^r}{r!}}$$" +
    "" +
    "Q: What is ʎ in Poisson Distribution?" +
    "A: ʎ= Mean= variance= n.p" +
    "" +
    "Q: If P(A) and P(B) are given, then limits of P(A ∪ B) are ?" +
    "A:$$${Greater \\le P(A \\cup B) \\le 1}$$" +
    "" +
    "Q: If P(A) and P(B) are given, then limits of P(A ∩ B) are ?" +
    "A:$$${[P(A)+P(B)]-1 \\le P(A \\cap B) \\le Smaller}$$";

let SequenceAndSeries_TQA =
    "" +
    "Q:$$${n^{th}\\text{ term of an AP?}}$$" +
    "A:$$${T_n=a+(n-1)d}$$" +
    "" +
    "Q: Kth and Pth term of an AP is given, then nth term is?" +
    "A:$$${\\frac{T_n-T_k}{n-k}=\\frac{T_p-T_k}{p-k}}$$" +
    "" +
    "Q: Sum of first n terms of an AP?" +
    "A:$$${S_n= \\frac{n}{2}[2a+(n-1)d]}$$ or $${S_n= \\frac{n}{2}[a+l]}$$" +
    "" +
    "Q: If sum of n terms of an AP is <latex-js>$${Pn^2+Q}$$</latex-js> then common-difference is" +
    "A:$$${Pn^2+Q=\\frac{d}{2}n^2+Q}$$$${=>d=2P}$$" +
    "" +
    "Q: Terms to take in AP when sum is given, of 3,4 and 5 terms?" +
    "A: <img src='images/SeriesAndSequence/1.jpeg'>" +
    "" +
    "Q: Realtion b/w a,b,c if thery are in AP" +
    "A:$$${b= \\frac{a+c}{2}}$$" +
    "" +
    "Q:$$${\\text{If } p.T_p=q.T_q \\text{ then }T_{p+q}= ?}$$" +
    "A:$$${T_{p+q}=0}$$" +
    "" +
    "Q:$$${\\text{If } S_p=S_q \\text{ then }S_{p+q}= ?}$$" +
    "A:$$${S_{p+q}=0}$$" +
    "" +
    "Q:$$${\\text{If } T_p=\\frac{1}{q} \\text{ and } T_q=\\frac{1}{p} \\text{ then }T_{pq}= ?}$$" +
    "A:$$${T_{pq}=1}$$" +
    "" +
    "Q:$$${\\text{If } S_p=\\frac{1}{q} \\text{ and } S_q=\\frac{1}{p} \\text{ then }S_{pq}= ?}$$" +
    "A:$$${S_{pq}=\\frac{pq+1}{2}}$$" +
    "" +
    "Q:$$${\\text{If } T_p=q \\text{ and } T_q=p \\text{ then }T_{n} \\text{ and } T_{p+q} = ?}$$" +
    "A:$$${T_{n}=p+q-n}$$$${T_{p+q}=0}$$" +
    "" +
    "Q:$$${\\text{If } S_p=q \\text{ and } S_q=p \\text{ then } S_{p+q} = ?}$$" +
    "A:$$${S_{p+q}=-(p+q)}$$" +
    "" +
    "Q:$$${n^{th}\\text{ term of an GP?}}$$" +
    "A:$$${T_n=ar^{n-1}}$$" +
    "" +
    "Q: If Kth and Pth term of an GP are given, then nth term is " +
    "A:$$${\\left (  \\frac{T_n}{T_k}\\right )^{\\frac{1}{n-k}}=\\left (  \\frac{T_p}{T_k}\\right )^{\\frac{1}{p-k}}}$$" +
    "" +
    "Q: Sum of n terms of a GP?" +
    "A:$$${S_n= \\frac{a(r^n-1)}{r-1}}$$" +
    "" +
    "Q: Sum of ∞ terms of a GP?" +
    "A:$$${S_ \\infty = \\frac{a}{1-r}}$$" +
    "" +
    "Q: Terms to take in GP when product is given, of 3,4 and 5 terms?" +
    "A: <img src='images/SeriesAndSequence/2.jpeg'>" +
    "" +
    "Q: Realtion b/w a,b,c if thery are in GP" +
    "A:$$${b= \\sqrt{a \\cdot c}}$$" +
    "" +
    "Q: Arrange AM GM HM according to their magnitude" +
    "A: AM > GM > HM" +
    "" +
    "Q: Realtion b/w a,b,c if thery are in HP" +
    "A:$$${b= \\frac{2ac}{a+c}}$$" +
    "" +
    "Q: Example of terms in HP?" +
    "A: (2,3,6) and (3,4,6)" +
    "Q:$$${n^{th}\\text{ term of an AGP?}}$$" +
    "A:$$${T_n=AP_{n^{th}term} \\cdot GP_{n^{th}term}}$$ $${T_n=[a+(n-1)d)] \\cdot[ar^{n-1}]}$$" +
    "" +
    "Q: Sum of ∞ terms of an AGP" +
    "A:$$${S_ \\infty = \\frac{ab}{1-r}+ \\frac{dbr}{(1-r)^2} }$$" +
    "" +
    "Q: Sum of 'n' terms of series <br><br> K, KK, KKK, KKKK ...." +
    "A:$$${ \\frac{K}{81}[10^{n+1}-9n-10]}$$" +
    "" +
    "Q: Sum of 'n' terms of series <br><br> 0.K, 0.KK, 0.KKK, 0.KKKK ...." +
    "A:$$${ \\frac{K}{81}[ \\frac{1}{10^n}+9n-1]}$$ replace n=>-(n+1) is series of K+KK+KKK...." +
    "" +
    "Q: If <br>'A' is Arithmetic Mean and 'G' is Geometric Mean<br> of two numbers 'a' and 'b', then 'a' and 'b' cab be calculated using ?" +
    "A:$$${a,b=A \\pm \\sqrt{A^2-G^2}}$$" +
    "" +
    "Q: In AP, relation between Sn S2n S3n ?" +
    "A:$$${S_{3n}=3(S_{2n}-S_n)}$$" +
    "" +
    "Q:$In AP,<br>$${ \\frac{1}{a_1a_2}+ \\frac{1}{a_2a_3}+...+ \\frac{1}{a_{n-1}a_n} = ?}$$" +
    "A:$$${ \\frac{n-1}{a_na_1}}$$" +
    "" +
    "Q:$$${1+2+3+...+n = ?}$$" +
    "A:$$${\\frac{n(n+1)}{2}}$$" +
    "" +
    "Q:$$${1+3+5+7+....n-terms = ?}$$" +
    "A:$$${n^2}$$" +
    "" +
    "Q:$$${1^2+2^2+3^2+...+n^2}$$" +
    "A:$$${\\frac{n(n+1)(2n+1)}{6}}$$" +
    "" +
    "Q:$$${1^2+3^2+5^2+....n-terms}$$" +
    "A:$$${\\frac{n(2n+1)(2n-1)}{3}}$$" +
    "" +
    "Q:$$${1^3+2^3+3^3+...+n^3}$$" +
    "A:$$${\\left [ \\frac{n(n+1)}{2} \\right ]^2}$$" +
    "" +
    "Q: <img src='images/SeriesAndSequence/3.jpg'>" +
    "A: <img src='images/SeriesAndSequence/4.jpg'>";

let complex = "" +
    "Q: if ω is the cube root of unity, then <br> ω³ = ?" +
    "A: ω³ = 1" +
    "" +
    "Q: if ω is the cube root of unity, then <br> 1 + ω + ω² = ?" +
    "A: 1 + ω + ω² = 0" +
    "";

let MaD_TQA =
    "" +
    "Q:$$${(AB)^T}$$" +
    "A:$$${B^TA^T}$$" +
    "" +
    "Q: What is a symmetric matrix?" +
    "A:$$${A^T=A}$$" +
    "" +
    "Q: What is a skew-symmetric matrix?" +
    "A:$$${A^T=-A}$$" +
    "" +
    "Q: Relation between Cofactor and Minor" +
    "A:$$${C_{ij}= \\pm M_{ij}}$$" +
    "" +
    "Q: what is adj(A)?" +
    "A: adj(A) is the transpose of cofactor matrix of A" +
    "" +
    "Q:$$${\\text{General formula for } A^{-1}}$$" +
    "A:$$${A^{-1}= \\frac{1}{ \\left | A \\right |} \\cdot adj(A)}$$" +
    "" +
    "Q: A.adj(A)" +
    "A:$$${A.adj(A)=adj(A).A=|A|I_n}$$" +
    "" +
    "Q:$$${(ABC)^{-1} = ?}$$" +
    "A:$$${C^{-1}B^{-1}A^{-1}}$$" +
    "" +
    "Q:$$${(A^T)^{-1}= ?}$$" +
    "A:$$${(A^{-1})^T}$$" +
    "" +
    "Q: | adj adj adj(A) | = ?" +
    "A:$$${|A|^{(n-1)^3}}$$" +
    "" +
    "Q: adj adj adj(A) = ?" +
    "A:$$${|A|^{(n-3)}A}$$" +
    "" +
    "Q: adj(AB) = ?" +
    "A: adj(B) adj(A)" +
    "" +
    "Q:$$${adj(A^T) = ?}$$" +
    "A:$$${(adj(A))^T}$$" +
    "" +
    "Q:$$${|A^{-1}| = ?}$$" +
    "A:$$${|A|^{-1}}$$" +
    "" +
    "Q: If 'r' is a real number and 'A' is n×n matrix then |rA| = ?" +
    "A:$$${r^n|A|}$$" +
    "" +
    "Q:$$${|A^T| = ?}$$" +
    "A: |A|" +
    "" +
    "Q: If equations are represented as <img src='images/MaD/1.png'> then A/C to Cramer's rule x,y,z are given by ?" +
    "A: <img src='images/MaD/2.png '>" +
    "" +
    "Q: If A = <img src='images/MaD/3.jpg'> <br>Then <latex-js>$${A^r=?}$$</latex-js>" +
    "A: <img src='images/MaD/4.png'>" +
    "" +
    "Q: |ABC| = ?" +
    "A: |A|.|B|.|C|" +
    "" +
    "Q: For what value of D does non-homogenous equations have unique solution ?" +
    "A: D≠0" +
    "" +
    "Q: For what value of D does non-homogenous equations have no solution ?" +
    "A:$$${\\text{D = 0 and Any of }D_x, D_y \\text{ or } D_z \\text{ not equals to }0 }$$" +
    "" +
    "Q: For what value of D does non-homogenous equations have infinity many solution ?" +
    "A:$$${D = D_x = D_y = D_z = 0 \\ \\ \\ }$$ $${\\text{Sab 0}}$$" +
    "" +
    "Q: For what value of D does Homogenous equations have unique solution ?" +
    "A: D≠0, the unique solution is trivial solution, x=y=z=0" +
    "" +
    "Q: For what value of D does Homogenous equations have infinity many solution ?" +
    "A:$$${D = 0 \\ \\ \\ }$$" +
    "" +
    "Q: Idompotent matrix => ?" +
    "A: A²=A" +
    "" +
    "Q: Orthogonal matrix and its determinant ?" +
    "A:$$${A^{-1}=A^T}$$  Or $${AA^T=A^TA=I}$$ $${det(A)=\\pm1}$$" +
    "" +
    "Q: What is an involuntary matrix?" +
    "A:$$${A^{-1}=A}$$" +
    "" +
    "Q: Nilpotent matrix ?" +
    "A:$$${A^n=0}$$" +
    "" +
    "Q: Singular matrix = ?" +
    "A: determinant = 0 " +
    "" +
    "Q: Scalar matrix = ?" +
    "A: determinant not 0 " +
    "" +
    "Q: Elementary matrix = ?" +
    "A: Matrix that can be obtained by a single elementary row operation on identity matrix" +
    "" +
    "Q: Hermetian matrix and skew-hermitian matrix ?" +
    "A: Hermetian means A = conjugate(A) <br> skew-hermetian means A = -conjugate(A)" +
    "" +
    "Q: <img src='images/MaD/5.png'>" +
    "A: <img src='images/MaD/6.png'>" +
    "" +
    "Q: <img src='images/MaD/7.png'>" +
    "A: <img src='images/MaD/8.png'>" +
    "" +
    "Q: If AB=A and BA=B, then A and B are ?" +
    "A: Idompotent, A²=A and B²=B" +
    "" +
    "Q:$$${\\text{If A is idompotent; i.e, }A^2=A \\text{ then }}$$ $${(I-A)^n=?}$$" +
    "A:$$${(I-A)^n=(I-A)}$$" +
    "" +
    "Q: If A is skew-symmetric, then <latex-js>$${A^{even}}$$</latex-js> is " +
    "A: Symmetric matrix" +
    "" +
    "Q: If A is skew-symmetric, then <latex-js>$${A^{odd}}$$</latex-js> is " +
    "A: Skew-Symmetric matrix" +
    "" +
    "Q: A + A' is <br> Symmetric / Skew-Symmetric ?" +
    "A: Symmetric" +
    "" +
    "Q: A - A' is <br> Symmetric / Skew-Symmetric ?" +
    "A: Skew-Symmetric" +
    "" +
    "Q: If A and B are Symmetric, then AB + BA is " +
    "A: Symmetric Matrix" +
    "" +
    "Q: If A and B are Symmetric, then AB - BA is" +
    "A: Skew-Symmetric" +
    "" +
    "Q: For a square matrix A\ : AA' and A'A is " +
    "A: Symmetric Matrix" +
    "" +
    "Q: Determinant of skew-symmetric matrix of odd order ?" +
    "A: 0 😃" +
    "" +
    "Q: Determinant of a diagonal matrix dig(a,b,c) = ?" +
    "A: a.b.c" +
    "" +
    "Q: Trace(AB) = ?" +
    "A: Trace(A).Trace(B)" +
    "" +
    "Q: For an n×n matrix A, adj(kA) = ?" +
    "A:$$${k^{n-1}adj(A)}$$" +
    "" +
    "Q:$$${diag(a_1,a_2,....a_n)\\times diag(b_1,b_2,....b_n)}$$" +
    "A:$$${diag(a_1 b_1,a_2 b_2,....a_n b_n)}$$" +
    "" +
    "Q: Sarrus rule for determinant of <img src='images/MaD/15.png'>" +
    "A: <img src='images/MaD/16.png'>" +
    "" +
    "Q: What is the determinant of <img src='images/MaD/17.png'>" +
    "A:$$${(x-y)(y-z)(z-x)}$$" +
    "" +
    "Q: What is the determinant of <img src='images/MaD/18.png'>" +
    "A:$$${(x-y)(y-z)(z-x)(x+y+z)}$$" +
    "" +
    "Q: What is the determinant of <img src='images/MaD/19.png'>" +
    "A:$$${(x-y)(y-z)(z-x)(xy+yz+zx)}$$" +
    "" +
    "Q: If determinant of an n×n matrix is △, then what is the determinant of its cofactor matrix" +
    "A:$$${\\Delta^c = \\Delta^{n-1}}$$" +
    "" +
    "Q: <img src='images/MaD/9.png'>" +
    "A: <img src='images/MaD/10.png'>" +
    "" +
    "Q: Trace of a matrix ?" +
    "A: Sum of elements of its principal diagonal" +
    "" +
    "Q: Multiplication of two determinants <img src='images/MaD/matrix.jpg'>" +
    "A: <img src='images/MaD/matrix%20(2).jpg'>" +
    "" +
    "Q: Characterstic equation of a matrix <img src='images/MaD/matrix%20(3).jpg'>" +
    "A: |A-λI|=0  <img src='images/MaD/matrix%20(4).jpg'>";

let Misc_TQA = "" +
    "Q:$Compendendo/ Dividendo for $${\\frac{a}{b}=\\frac{c}{d}}$$ = ?" +
    "A:$$${\\frac{a+b}{a-b}=\\frac{c+d}{c-d}}$$" +
    "" +
    "Q: What is the sum of internal angles of a 'n' sided polygon?" +
    "A: 180(n-2)" +
    "" +
    "Q: What is the length of an n sided polygon inscribed in a circle of radius r" +
    "A:$$${side=2r\\sin(\\frac{\\pi}{n})}$$" +
    "" +
    "Q:$$${ax^3+bx^2+cx+d=0}$$ then $${\\alpha + \\beta + \\gamma =\\ ? }$$ " +
    "$${\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha =\\ ? }$$" +
    "$${\\alpha \\beta \\gamma =\\  ?}$$" +
    "A:$$${\\alpha + \\beta + \\gamma = \\frac{-b}{a}}$$" +
    "$${\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a}}$$" +
    "$${\\alpha \\beta \\gamma = \\frac{-d}{a}}$$";

let quad = "" +
    "Q:$$${\\text{If one root of quadratic equation is } a+ib \\text{ then another is ?}}$$" +
    "A:$$${a-ib}$$" +
    "" +
    "Q:$$${\\text{If one root of quadratic equation is }a+\\sqrt{b} \\text{ then other is ?}}$$" +
    "A:$$${a-\\sqrt{b}}$$" +
    "" +
    "Q:$$${ax^2+bx+c=0}$$ then $${\\alpha + \\beta =\\ ? }$$ " +
    "$${\\alpha \\beta =\\  ?}$$" +
    "A:$$${\\alpha + \\beta = \\frac{-b}{a}}$$" +
    "$${\\alpha \\beta = \\frac{c}{a}}$$" +
    "" +
    "Q:$$${\\text{Relation between coefficients if } }$$ $${a_1x^2+b_1x+c_1=0 \\text{ and }}$$$${ a_2x^2+b_2x+c_2=0 \\text{ have one common root}}$$" +
    "A:$$${\\frac{\\alpha^2}{b_1c_2-b_2c_1}=\\frac{-\\alpha}{c_2a_1-c_1a_2}=\\frac{1}{a_1b_2-a_2b_1}}$$or$${(a_1b_2-a_2b_1)^2=(a_1-b_2)(a_2-b_1)}$$" +
    "   To find the common root, make coefficient of second-degree terms equal in both equations and then subtract, the x thus obtained is the required common root" +
    "" +
    "Q:$$${\\text{Relation between coefficients if } }$$ $${a_1x^2+b_1x+c_1=0 \\text{ and }}$$$${ a_2x^2+b_2x+c_2=0 \\text{ have same roots}}$$" +
    "A:$$${\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}}$$" +
    "" +
    "Q: Coordinates of vertex for a quadratic equation ?" +
    "A:$$${\\left ( \\frac{-b}{2a} , \\frac{-D}{4a} \\right )}$$" +
    "" +
    "Q:$$${\\text{Condition at which } ax^2+bx+c>0 }$$" +
    "A:$$${D<0 \\Rightarrow  b^2-4ac<0}$$" +
    "" +
    "Q:$$${\\text{If roots of }ax^2+bx+c=0 \\text{ are in ratio } p:q \\text{ then relation between a,b,c,p,q is ?}}$$" +
    "A:$$${\\frac{b^2}{ac}=\\frac{(p+q)^2}{pq}}$$" +
    "" +
    "Q:$$${\\text{If roots of equation }ax^2+bx+c=0 \\text{ are }\\alpha \\text{ and } \\beta \\text{ , then equation with roots } \\frac{1}{\\alpha} \\text{ and } \\frac{1}{\\beta} is }$$" +
    "A:$$${cx^2+bx+a}$$" +
    "" +
    "Q:$$${\\text{Roots of }x^2+x+1=0}$$" +
    "A:$$${\\omega^2,\\omega}$$" +
    "" +
    "Q:$$${\\text{Roots of }x^2-x+1=0}$$" +
    "A:$$${-\\omega^2,-\\omega}$$" +
    "" +
    "";

let tRatio = "" +
    "Q:$$${\\sin(15) \\text{ and } \\cos(15) \\text{ and } \\tan(15)= \\ ?}$$" +
    "A:$$${\\sin(15) = \\frac{\\sqrt{3}-1}{2\\sqrt{2}}}$$ $${\\cos(15) = \\frac{\\sqrt{3}+1}{2\\sqrt{2}}}$$ $${\\tan(15)=2-\\sqrt{3}}$$" +
    "" +
    "Q:$$${\\sin(75) \\text{ and } \\cos(75) = \\ ?}$$" +
    "A:$$${\\sin(75) = \\frac{\\sqrt{3}+1}{2\\sqrt{2}}}$$ $${\\cos(75) = \\frac{\\sqrt{3}-1}{2\\sqrt{2}}}$$" +
    "" +
    "Q:$$${\\sin(30) \\text{ and } \\cos(30) = \\ ?}$$" +
    "A:$$${\\sin(30)=\\frac{1}{2} }$$ $${ \\cos(30) =\\frac{\\sqrt{3}}{2} }$$" +
    "" +
    "Q:$$${\\sin(45) \\text{ and } \\cos(45) = \\ ?}$$" +
    "A:$$${\\sin(45)=\\frac{1}{\\sqrt2} }$$ $${\\cos(45) =\\frac{1}{\\sqrt2} }$$" +
    "" +
    "Q:$$${\\tan(\\frac{\\pi}{8})}$$" +
    "A:$$${\\sqrt{2}-1}$$" +
    "" +
    "Q:$$${\\sin(60) \\text{ and } \\cos(60) = \\ ?}$$" +
    "A:$$${\\sin(60)=\\frac{\\sqrt3}{2} }$$ $${ \\cos(60) =\\frac{1}{2} }$$" +
    "" +
    "Q:$$${\\sin(18) \\ \\ \\ \\ \\  \\cos(18) }$$ $${ \\sin(36) \\ \\ \\ \\ \\ \\cos(36)}$$" +
    "A:$ $${\\sin(18)=\\frac{\\sqrt5-1}{4} \\ \\ \\ \\ \\ \\ \\ \\ \\ \\cos(18)=\\frac{\\sqrt{10+2\\sqrt{5}}}{4}}$$" +
    "    $${\\sin(36)=\\frac{\\sqrt{10-2\\sqrt{5}}}{4} \\ \\ \\ \\cos(36)=\\frac{\\sqrt5+1}{4}}$$"

let trigSumPro = "" +
    "Q: Relation between angle arc and radius ?" +
    "A:$$${\\Theta^c = \\frac{arc}{radius}}$$" +
    "" +
    "Q: 1 radian = ? degrees" +
    "A: 1 radian = 57°16′21′′" +
    "" +
    "Q:$$${\\sin(A+B)}$$" +
    "A:$$${\\sin(A)\\cos(B)+\\cos(A)\\sin(B)}$$" +
    "" +
    "Q:$$${\\sin(A-B)}$$" +
    "A:$$${\\sin(A)\\cos(B)-\\cos(A)\\sin(B)}$$" +
    "" +
    "Q:$$${\\cos(A+B)}$$" +
    "A:$$${\\cos(A)\\cos(B) -\\sin(A)\\sin(B)}$$" +
    "" +
    "Q:$$${\\cos(A-B)}$$" +
    "A:$$${\\cos(A)\\cos(B) +\\sin(A)\\sin(B)}$$" +
    "" +
    "Q:$$${tan(A+B)}$$" +
    "A:$$${\\frac{\\tan(A)+\\tan(B)}{1-\\tan(A)\\tan(B)}}$$" +
    "" +
    "Q:$$${tan(A-B)}$$" +
    "A:$$${\\frac{\\tan(A)-\\tan(B)}{1+\\tan(A)\\tan(B)}}$$" +
    "" +
    "Q:$$${tan(A+B+C)}$$" +
    "A:$$${\\frac{\\tan(A)+\\tan(B)+\\tan(C)-\\tan(A)\\tan(B)\\tan(C)}{1-\\tan(A)\\tan(B)-\\tan(B)\\tan(C)-\\tan(C)\\tan(A)}}$$" +
    "" +
    "Q:$$${2\\sin(A)\\cos(B)}$$" +
    "A:$$${\\sin(A+B)+\\sin(A-B)}$$" +
    "" +
    "Q:$$${2\\cos(A)\\cos(B)}$$" +
    "A:$$${\\cos(A+B)+\\cos(A-B)}$$" +
    "" +
    "Q:$$${2\\sin(A)\\sin(B)}$$" +
    "A:$$${\\cos(A+B)-\\cos(A-B)}$$" +
    "" +
    "Q:$$${\\sin(A)+\\sin(B) }$$" +
    "A:$$${ 2\\sin(\\frac{A+B}{2})\\cos(\\frac{A-B}{2})}$$" +
    "" +
    "" +
    "Q:$$${\\sin(A)-\\sin(B) }$$" +
    "A:$$${ 2\\cos(\\frac{A+B}{2})\\sin(\\frac{A-B}{2})}$$" +
    "" +
    "Q:$$${\\cos(A)+\\cos(B)}$$" +
    "A:$$${2\\cos(\\frac{A+B}{2})\\cos(\\frac{A-B}{2})}$$" +
    "" +
    "Q:$$${\\cos(A)-\\cos(B)}$$" +
    "A:$$${-2\\sin(\\frac{A+B}{2})\\sin(\\frac{A-B}{2})}$$";

let trigMultiAngle = "" +
    "Q:$$${\\sin(2A)}$$ $${\\text{ in terms of sin and cos}}$$" +
    "A:$$${2\\sin(A)cos(A)}$$" +
    "" +
    "Q:$$${\\cos(2A)}$$ $${\\text{ in terms of sin and cos}}$$" +
    "A:$$${\\cos^2(A)-\\sin^2(A)}$$ $${2\\cos^2(A)-1}$$ $${1-2\\sin^2(A)}$$" +
    "" +
    "Q:$$${\\sin(2A)}$$ $${\\text{ in terms of tan}}$$" +
    "A:$$${\\frac{2\\tan(A)}{1+\\tan^2(A)}}$$" +
    "" +
    "Q:$$${\\cos(2A)}$$ $${\\text{ in terms of tan}}$$" +
    "A:$$${\\frac{1-\\tan^2(A)}{1+\\tan^2(A)}}$$" +
    "" +
    "Q:$$${\\tan(2A)}$$ $${\\text{ in terms of tan}}$$" +
    "A:$$${\\frac{2.tan(A)}{1-\\tan^2(A)}}$$" +
    "" +
    "Q:$$${\\sin(3A)}$$" +
    "A:$$${3\\sin(A)-4\\sin^3(A)}$$" +
    "" +
    "Q:$$${\\cos(3A)}$$" +
    "A:$$${4\\cos^3(A)-3\\cos(A)}$$" +
    "" +
    "Q:$$${\\tan(3A)}$$" +
    "A:$$${\\frac{3\\tan(A)-\\tan^3(A)}{1-3\\tan^2(A)}}$$";

let trigMisc = "" +
    "Q:$$${1+\\sin(A)}$$" +
    "A:$$${\\left ( \\sin(\\frac{A}{2}) +\\cos(\\frac{A}{2}) \\right )^2}$$" +
    "" +
    "Q:$$${1-\\sin(A)}$$" +
    "A:$$${\\left ( \\sin(\\frac{A}{2}) -\\cos(\\frac{A}{2}) \\right )^2}$$" +
    "" +
    "Q:$$${\\sin(A+B)\\sin(A-B)}$$" +
    "A:$$${\\sin^2(A)-\\sin^2(B)}$$ $${\\cos^2(B)-\\cos^2(A)}$$" +
    "" +
    "Q:$$${\\cos(A+B)\\cos(A-B)}$$" +
    "A:$$${\\cos^2(B)-\\sin^2(A)}$$ $${\\cos^2(A)-\\sin^2(B)}$$" +
    "" +
    "Q:$$${\\sin(\\frac{A}{2})}$$" +
    "A:$$${\\pm\\sqrt{\\frac{1-\\cos(A)}{2}}}$$" +
    "" +
    "Q:$$${\\cos(\\frac{A}{2})}$$" +
    "A:$$${\\pm\\sqrt{\\frac{1+\\cos(A)}{2}}}$$" +
    "" +
    "Q:$$${\\tan(\\frac{A}{2})}$$" +
    "A:$$${\\pm\\sqrt{\\frac{1-\\cos(A)}{1+\\cos(A)}}}$$" +
    "$${\\frac{1-\\cos(A)}{\\sin(A)}}$$" +
    "$${\\frac{\\sin(A)}{1+\\cos(A)}}$$" +
    "$${\\cosec(x)-\\cot(x)}$$" +
    "" +
    "Q:$$${\\cot(\\frac{A}{2})}$$" +
    "A:$$${\\pm\\sqrt{\\frac{1+\\cos(A)}{1-\\cos(A)}}}$$" +
    "$${\\frac{1+\\cos(A)}{\\sin(A)}}$$" +
    "$${\\frac{\\sin(A)}{1-\\cos(A)}}$$" +
    "$${\\cosec(x)+\\cot(x)}$$" +
    "" +
    "Q:$$${\\tan(3\\theta)\\cdot\\tan(2\\theta)\\cdot\\tan(\\theta)}$$" +
    "A:$$${\\tan(3\\theta)-\\tan(2\\theta)-\\tan(\\theta)}$$" +
    "" +
    "Q:$$${1+\\cos(A)}$$" +
    "A:$$${2\\cos^2(\\frac{A}{2})}$$" +
    "" +
    "Q:$$${1-\\cos(A)}$$" +
    "A:$$${2\\sin^2(\\frac{A}{2})}$$" +
    "";

let trigSeries = "" +
    "Q:$$${\\sin(60-A).\\sin(A).sin(60+A)}$$" +
    "A:$$${\\frac{\\sin(3A)}{4}}$$" +
    "" +
    "Q:$$${\\cos(60-A).\\cos(A).cos(60+A)}$$" +
    "A:$$${\\frac{\\cos(3A)}{4}}$$" +
    "" +
    "Q:$$${\\tan(60-A).\\tan(A).tan(60+A)}$$" +
    "A:$$${tan(3A)}$$" +
    "Q:$$${cos(2^0A)\\cdot cos(2^1A)\\cdot cos(2^2A)\\cdot\\cdot\\cdot cos(2^{n-1}A)}$$" +
    "A:$$${\\frac{\\sin(2^nA)}{2^n\\cdot \\sin(A)}}$$" +
    "" +
    "Q:$$${\\sin(\\alpha) + \\sin(\\alpha + \\beta)  + \\sin(\\alpha + 2\\beta) + \\cdot \\cdot \\cdot + \\sin(\\alpha + (n-1)\\beta)   }$$" +
    "A:$$${\\frac{\\sin(\\alpha+\\frac{(n-1)\\beta}{2})\\cdot \\sin(\\frac{n\\cdot \\beta}{2})}{\\sin(\\frac{\\beta}{2})}}$$" +
    "" +
    "Q:$$${\\cos(\\alpha) + \\cos(\\alpha + \\beta)  + \\cos(\\alpha + 2\\beta) + \\cdot \\cdot \\cdot + \\cos(\\alpha + (n-1)\\beta)   }$$" +
    "A:$$${\\frac{\\cos(\\alpha+\\frac{(n-1)\\beta}{2})\\cdot \\sin(\\frac{n\\cdot \\beta}{2})}{\\sin(\\frac{\\beta}{2})}}$$" +
    "" +
    "Q:$$${\\tan(A)+\\cot(A)}$$" +
    "A:$$${2\\cdot cosec(2A)}$$" +
    "" +
    "Q:$$${sin\\frac{\\pi}{14}sin\\frac{\\3pi}{14}sin\\frac{\\7pi}{14}}$$" +
    "A:$$${sin\\frac{\\pi}{14}sin\\frac{\\3pi}{14}sin\\frac{\\7pi}{14}\\frac{1}{8}}$$";

let condTrig = "" +
    "Q:$If A+B+C=π, then $${\\sin(A)+\\sin(B)+\\sin(C)}$$" +
    "A:$$${4 \\cos(\\frac{A}{2}) \\cos(\\frac{B}{2}) \\cos(\\frac{C}{2})}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\cos(A)+\\cos(B)+\\cos(C)}$$" +
    "A:$$${1+4  \\sin(\\frac{A}{2})  \\sin(\\frac{B}{2})  \\sin(\\frac{C}{2})}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\tan(A)+\\tan(B)+\\tan(C)}$$" +
    "A:$$${\\tan(A)\\tan(B)\\tan(C)}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\sin(2A)+\\sin(2B)+\\sin(2C)}$$" +
    "A:$$${4  \\sin(A)   \\sin(B)   \\sin(C)}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\cos(2A)+\\cos(2B)+\\cos(2C)}$$" +
    "A:$$${-1-4  \\cos(A)   \\cos(B)   \\cos(C)}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\tan(2A)+\\tan(2B)+\\tan(2C)}$$" +
    "A:$$${\\tan(2A) \\tan(2B) \\tan(2C)}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\tan(\\frac{A}{2})\\tan(\\frac{B}{2})+\\tan(\\frac{B}{2})\\tan(\\frac{C}{2})+\\tan(\\frac{C}{2})\\tan(\\frac{A}{2})}$$" +
    "A:$$${1}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\cot(A)\\cot(B)+\\cot(B)\\cot(C)+\\cot(C)\\cot(A)}$$" +
    "A:$$${1}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\sin^2(A)+\\sin^2(B)+\\sin^2(C)}$$" +
    "A:$$${2+2\\cos(A) \\cos(B) \\cos(C)}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\cos^2(A)+\\cos^2(B)+\\cos^2(C)}$$" +
    "A:$$${1-2\\cos(A) \\cos(B) \\cos(C)}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\sin^2(\\frac{A}{2})+\\sin^2(\\frac{B}{2})+\\sin^2(\\frac{C}{2})}$$" +
    "A:$$${1-2\\sin(\\frac{A}{2})\\sin(\\frac{B}{2})\\sin(\\frac{C}{2})}$$" +
    "" +
    "Q:$If A+B+C=π, then $${\\cos^2(\\frac{A}{2})+\\cos^2(\\frac{B}{2})+\\cos^2(\\frac{C}{2})}$$" +
    "A:$$${2+2\\sin(\\frac{A}{2})\\sin(\\frac{B}{2})\\sin(\\frac{C}{2})}$$";

let generalSoln = "" +
    "Q: Sin(x)=0<br>then x = ?" +
    "A: x=nπ" +
    "" +
    "Q: Cos(x)=0<br>then x = ?" +
    "A:$$${x=(2n+1)\\frac{\\pi}{2}}$$" +
    "" +
    "Q: tan(x)=0<br>then x = ?" +
    "A:$$${x=n\\pi}$$" +
    "" +
    "Q:$$${\\sin(x)=\\sin(\\alpha)}$$<br>then x = ?" +
    "A:$$${x=n\\pi+(-1)^n\\alpha}$$" +
    "" +
    "Q:$$${\\cos(x)=\\cos(\\alpha)}$$<br>then x = ?" +
    "A:$$${x=2n\\pi\\pm\\alpha}$$" +
    "" +
    "Q:$$${\\tan(x)=\\tan(\\alpha)}$$<br>then x = ?" +
    "A:$$${x=n\\pi+\\alpha}$$" +
    "" +
    "Q:$$${\\sin^2(x)=\\sin^2(\\alpha)}$$<br>then x = ?" +
    "A:$$${x=n\\pi\\pm\\alpha}$$" +
    "" +
    "Q:$$${\\cos^2(x)=\\cos^2(\\alpha)}$$<br>then x = ?" +
    "A:$$${x=n\\pi\\pm\\alpha}$$" +
    "" +
    "Q:$$${\\tan^2(x)=\\tan^2(\\alpha)}$$<br>then x = ?" +
    "A:$$${x=n\\pi\\pm\\alpha}$$" +
    "";

let trigMiscFacts = "" +
    "Q:$Min and Max value of $${A=k_1\\sin^n(\\theta)+k_2\\cos^m(\\theta)}$$ if 'n,m' are even is" +
    "A:$Min and Max value will occur at any of $${0^{\\circ},30^{\\circ},45^{\\circ},60^{\\circ},90^{\\circ},15^{\\circ}}$$" +
    "" +
    "Q:$Min and Max value of $${a\\sin(\\theta)+b\\cos(\\theta)}$$" +
    "A:$$${-\\sqrt{a^2+b^2} \\leqslant  a\\sin(\\theta)+b\\cos(\\theta) \\leqslant \\sqrt{a^2+b^2}}$$" +
    "" +
    "Q:$$${\\text{If }a\\sin\\theta+b\\cos\\theta=\\sqrt{a^2+b^2}\\text{ then sin and cos are }}$$" +
    "A:$$${\\sin\\theta=\\frac{a}{\\sqrt{a^2+b^2}}}$$$${\\cos\\theta=\\frac{b}{\\sqrt{a^2+b^2}}}$$" +
    "" +
    "Q:$$${\\text{Min value of   } a\\sin^2\\theta+b\\cosed^2\\theta}$$" +
    "A:$$${\\begin{cases}\n" +
    "2\\sqrt{ab} & \\text{ if coeff(sin) greater than coeff(cosec)} \\\\ \n" +
    "a+b & \\text{ otherwise } \n" +
    "\\end{cases}}$$" +
    "" +
    "Q:$$${\\text{Min value of   } a\\cos^2\\theta+b\\sec^2\\theta}$$" +
    "A:$$${\\begin{cases}\n" +
    "2\\sqrt{ab} & \\text{ if coeff(cos) greater than coeff(sec)} \\\\ \n" +
    "a+b & \\text{ otherwise } \n" +
    "\\end{cases}}$$" +
    "" ;
//copy latex from here
// https://latex.codecogs.com/eqneditor/editor.php