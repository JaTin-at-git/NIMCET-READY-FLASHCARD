let qnaAsText = "" +
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

qnaAsText += "" +
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

qnaAsText += "" +
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

qnaAsText += "" +
    "T: PnC" +
    "Q: Number of functions from n(A)=r to n(B)=n?<br><br>Distribution of 'n' different things into 'r' differnt boxes if any box can recieve any number of objects?" +
    "A: r<sup>n</sup>" +
    "" +
    "T: PnC" +
    "Q: Number of onto functions from n(A)=r to n(B)=n?<br><br>Distribution of 'n' different things into 'r' differnt boxes if each box has at least one object?" +
    "A:$$${[r^n]-[^{r}C_1(r-1)^n]+[^{r}C_2(r-2)^n]-[^{r}C_3(r-3)^n]...}$$";

qnaAsText += "" +
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

//copy latex from here
// https://latex.codecogs.com/eqneditor/editor.php