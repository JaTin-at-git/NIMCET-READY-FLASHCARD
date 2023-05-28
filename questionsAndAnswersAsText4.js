var expansion = "" +
    "Q:$$${\\text{Expand } e^x \\text{ where} -1< x\\leq 1 }$$" +
    "A:$$${e^x=\\frac{x^0}{0!}+\\frac{x^1}{1!}+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\frac{x^4}{4!}+...}$$" +
    "" +
    "Q:$$${\\text{Expand } log_e(1+x) \\text{ where} -1< x\\leq 1 }$$" +
    "A:$$${log_e(1+x)=\\frac{x^1}{1}-\\frac{x^2}{2}+\\frac{x^3}{3}-\\frac{x^4}{4}+...}$$" +
    "" +
    "Q:$$${\\text{expand } log_e(2)}$$" +
    "A:$$${log_e(2)=1-\\frac{1}{2}+\\frac{1}{3}-\\frac{1}{4}+...}$$" +
    "" +
    "Q:$$${(x+a)^n=?}$$" +
    "A:$$${(x+a)^n=^nC_0x^na^0+^nC_1x^{n-1}a^1+^nC_{2}x^{n-2}a^2+.....}$$" +
    "" +
    "Q:$$${(1+x)^n \\text{when x<1}}$$" +
    "A:$$${(1+x)^n=1+nx+\\frac{n(n-1)}{2!}x^2+\\frac{n(n-1)(n-2)}{3!}x^3+.....}$$" +
    "" +
    "Q:$$${(1+x)^{-1} = ?}$$" +
    "A:$$${(1+x)^{-1}=1-x+x^2-x^3+x^4+.....}$$" +
    "" +
    "Q:$$${(1+x)^{\\frac{1}{2}}=?}$$" +
    "A:$$${(1+x)^{\\frac{1}{2}}=1+\\frac{1}{2}x-\\frac{1}{8}x^2+\\frac{1}{16}x^3-....}$$" +
    "" +
    "Q:$$${(1+x)^{-\\frac{1}{2}}=?}$$" +
    "A:$$${(1+x)^{-\\frac{1}{2}}=1-\\frac{1}{2}x+\\frac{3}{8}x^2-\\frac{5}{16}x^3-....}$$" +
    "" +
    "Q:$$${\\text{Expansion of }sin(x)}$$" +
    "A:$$${sin(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}+....}$$$${\\text{somewhat similar to }e^x+e^{-x} \\text{ but with alternate signs}}$$" +
    "" +
    "Q:$$${\\text{Expansion of }cos(x)}$$" +
    "A:$$${\\cos(x)=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+....}$$$${\\text{somewhat similar to log(2)}}$$" +
    "" +
    "Q:$$${\\text{Expansion of }tan(x)}$$" +
    "A:$$${\\tan(x)=x+\\frac{x^3}{3}+\\frac{2}{15}x^5+...}$$";

var propTriangle = "" +
    "Q: sine law" +
    "A: <img src='images/propTriangle/propTriangle.jpg'>" +
    "Q: Projection formulae" +
    "A: <img src='images/propTriangle/propTriangle%20(2).jpg'>" +
    "Q:$$${\\text{tan law }\\tan\\frac{b-c}{2}}$$" +
    "A: <img src='images/propTriangle/propTriangle%20(3).jpg'>" +
    "Q: Cosine law" +
    "A: <img src='images/propTriangle/propTriangle%20(4).jpg'>" +
    "Q: Half angle formula sin(A/2)" +
    "A: <img src='images/propTriangle/propTriangle%20(5).jpg'>" +
    "Q: Half angle formula cos(A/2)" +
    "A: <img src='images/propTriangle/propTriangle%20(6).jpg'>" +
    "Q: Half angle formula tan(A/2)" +
    "A: <img src='images/propTriangle/propTriangle%20(7).jpg'>" +
    "" +
    "Q: Area of triangle when sides are given" +
    "A:$$${\\bigtriangleup=\\sqrt{s(s-a)(s-b)(s-c)}}$$" +
    "" +
    "Q: Area of triangle when angle between two given sides is given" +
    "A:$$${\\bigtriangleup=\\frac{1}{2}bc\\sin(A)}$$" +
    "" +
    "Q: Area of triangle when R is given" +
    "A:$$${\\bigtriangleup=\\frac{abc}{4R}}$$" +
    "" +
    "Q: Area of triangle when 'r' is given" +
    "A:$$${\\bigtriangleup=rs}$$" +
    "" +
    "Q: Area of triangle when excentre is given" +
    "A:$$${\\bigtriangleup=r_1(s-a)}$$" +
    "" +
    "Q: Relation of 'r' with tan(A/2)" +
    "A:$$${r=(s-a)\\tan\\frac{A}{2}}$$" +
    "" +
    "Q: Relation between R and 'r'" +
    "A:$$${r=4R\\sin(\\frac{A}{2})\\sin(\\frac{B}{2})\\sin(\\frac{C}{2})}$$" +
    "" +
    "Q: <img src='images/propTriangle/propTriangle%20(8).jpg'>" +
    "A: <img src='images/propTriangle/propTriangle%20(10).jpg'>" +
    "" +
    "Q: <img src='images/propTriangle/propTriangle%20(9).jpg'>" +
    "A: <img src='images/propTriangle/propTriangle%20(11).jpg'>" +
    "" +
    "Q: Coordinates of an equilateral triangle in casterian plane" +
    "A: <img src='images/propTriangle/propTriangle%20(12).jpg'>";

var differentiation = "" +
    "Q:$$${\\sqrt{1-x^{2n}}+\\sqrt{1-y^{2n}} = a^n(x^n-y^n)}$$$${ \\text{ then, } \\frac{\\mathrm{d} y}{\\mathrm{d}   x} = ?}$$" +
    "A:$$${\\frac{\\mathrm{d} y}{\\mathrm{d} x}=\\frac{x^{n-1}}{y^{n-1}}\\sqrt{\\frac{1-y^{2n}}{1-x^{2n}}}}$$" +
    "" +
    "Q:$$${y=f(x)^{f(x)^{f(x)}...}}$$$${ \\text{ then, } \\frac{\\mathrm{d} y}{\\mathrm{d}   x} = ?}$$" +
    "A:$$${\\frac{\\mathrm{d} y}{\\mathrm{d} x}=\\frac{y^2\\frac{\\mathrm{d}f(x)}{\\mathrm{d} x}}{f(x).[1-y\\log f(x)]}}$$" +
    "" +
    "Q:$$${y=a^{f(x)^{a^{f(x)...}}}}$$$${ \\text{ then, } \\frac{\\mathrm{d} y}{\\mathrm{d}   x} = ?}$$" +
    "A:$$${\\frac{\\mathrm{d} y}{\\mathrm{d} x}=\\frac{y^2.\\log y.\\frac{\\mathrm{d}f(x)}{\\mathrm{d} x}}{f(x).[1-y.\\log y.\\log f(x)]}}$$";

var integration = "" +
    "Q:$$${\\int \\tan(x)}$$" +
    "A:$$${\\log|\\sec(x)|}$$" +
    "" +
    "Q:$$${\\int \\cot(x)}$$" +
    "A:$$${-\\log|\\cosec(x)|}$$" +
    "" +
    "Q:$$${\\int sec(x)}$$" +
    "A:$$${\\log|\\sec x +\\tan x|}$$$${\\log|\\tan(\\frac{\\pi}{4}+\\frac{x}{2})|}$$" +
    "" +
    "Q:$$${\\int \\frac{1}{x^2-a^2}}$$" +
    "A:$$${\\int \\frac{1}{x^2-a^2}=\\frac{1}{2a}\\log\\frac{x-a}{x+a}}$$" +
    "" +
    "Q:$$${\\int \\frac{1}{x^2+a^2}}$$" +
    "A:$$${\\int \\frac{1}{x^2+a^2}=\\frac{1}{a}\\tan^{-1}\\frac{x}{a}}$$" +
    "" +
    "Q:$$${\\int\\frac{1}{\\sqrt{x^2-a^2}}}$$" +
    "A:$$${\\int \\frac{1}{\\sqrt{x^2-a^2}}=\\log|x+\\sqrt{x^2-a^2}|}$$" +
    "" +
    "Q:$$${\\int\\frac{1}{\\sqrt{x^2+a^2}}}$$" +
    "A:$$${\\int \\frac{1}{\\sqrt{x^2+a^2}}=\\log|x+\\sqrt{x^2+a^2}|}$$" +
    "" +
    "Q:$$${\\int\\frac{1}{\\sqrt{a^2-x^2}}}$$" +
    "A:$$${\\int \\frac{1}{\\sqrt{a^2-x^2}}=\\sin^{-1}\\frac{x}{a}}$$" +
    "" +
    "Q:$$${\\int \\sqrt{x^2-a^2}}$$" +
    "A:$$${\\int \\sqrt{x^2-a^2}=\\frac{x}{2}\\sqrt{x^2-a^2}-\\frac{a^2}{2}\\log|x+\\sqrt{x^2-a^2}|}$$" +
    "" +
    "Q:$$${\\int \\sqrt{x^2+a^2}}$$" +
    "A:$$${\\int \\sqrt{x^2+a^2}=\\frac{x}{2}\\sqrt{x^2+a^2}+\\frac{a^2}{2}\\log|x+\\sqrt{x^2+a^2}|}$$" +
    "" +
    "Q:$$${\\int \\sqrt{a^2-x^2}}$$" +
    "A:$$${\\int \\sqrt{a^2-x^2}=\\frac{x}{2}\\sqrt{a^2-x^2}+\\frac{a^2}{2}\\sin^{-1}\\frac{x}{a}}$$" +
    "" +
    "Q: Integration of all trigonometric inverse functions" +
    "A: <img src='images/integration/integration.jpg'>" +
    "" +
    "Q:$$${\\int \\frac{x^2+1}{x^4+1}}$$" +
    "A:$$${\\int \\frac{x^2+1}{x^4+1}=\\frac{1}{2} tan^{-1}\\left ( \\frac{x^2-1}{\\sqrt{2}x} \\right )}$$" +
    "" +
    "Q:$$${\\int \\frac{x^2-1}{x^4+1}}$$" +
    "A:$$${\\int \\frac{x^2-1}{x^4+1}=\\frac{1}{2\\sqrt2} log\\left | \\frac{x^2+1-\\sqrt2x}{x^2+1+\\sqrt2x} \\right |}$$" +
    "" +
    "Q:$$${\\int \\frac{1}{x(x^n+1)}}$$" +
    "A:$$${\\frac{1}{n}\\log\\left| \\frac{x^n}{x^n+1} \\right|}$$" +
    "" +
    "Q:$$${\\int \\frac{1}{x(1-x^n)}}$$" +
    "A:$$${\\frac{1}{n}\\log\\left| \\frac{x^n}{1-x^n} \\right|}$$" +
    "" +
    "Q:$$${\\int \\frac{1}{x(x^n-1)}}$$" +
    "A:$$${\\frac{1}{n}\\log\\left| \\frac{x^n-1}{x^n} \\right|}$$" +
    "" +
    "Q:$$${\\int \\frac{1}{x\\sqrt{x^n+1}}}$$" +
    "A:$$${\\frac{1}{n} \\log \\left | \\frac{\\sqrt{x^n+1}-1}{\\sqrt{x^n+1}+1} \\right |}$$" +
    "" +
    "Q:$$${\\int \\frac{1}{x\\sqrt{1-x^n}}}$$" +
    "A:$$${\\frac{1}{n} \\log \\left | \\frac{\\sqrt{1-x^n}-1}{\\sqrt{1-x^n}+1} \\right |}$$" +
    "" +
    "Q:$$${\\int \\frac{1}{x\\sqrt{x^n-1}}}$$" +
    "A:$$${\\frac{2}{n} \\tan^{-1}\\sqrt{x^n-1}}$$" +
    "";