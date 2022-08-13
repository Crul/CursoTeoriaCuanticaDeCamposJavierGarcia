var mathjaxDefined = (typeof MathJax !== 'undefined');
var feynmanDiagrams = {

  Feynman51: {
    width: 210, height: 80,
    incoming: {i1: '20,40'},
    outgoing: {o1: '140,40'},
    fermion: {line: 'i1-o1', arrow: false},
    label: { t1: ['150,26.5', '$ = \\frac{1}{m^2} $', 40, 40] },
    mathjax: mathjaxDefined,
  },

  Feynman52: {
    width: 210, height: 80,
    incoming: {i1: '40,10', i2: '40,70'},
    outgoing: {o1: '140,10', o2: '140,70'},
    vertex: {v1: '90,40'},
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    fermion: {line: 'i1-v1,i2-v1,v1-o1,v1-o2', arrow: false},
    label: { t1: ['150,30', '$ = - \\lambda $', 40, 20] },
    mathjax: mathjaxDefined,
  },

  Feynman53: {
    width: 600, height: 80,
    incoming: {i1: '90,60',  i2: '170,60', i3: '250,60', i4: '370,60', i5: '450,60'},
    outgoing: {o1: '150,60', o2: '230,60', o3: '350,60', o4: '430,60', o5: '550,60'},
    vertex: {
      v1: '200,60',
      v2: '275,60', v3: '325,60',
      v4: '400,60', v5: '400,35',
      v6: '480,60', v7: '520,60',
    },
    auxiliary: {
      a1: '200,10',
      a2: '275,10', a3: '325,10',
      a4: '400,10',
    },
    fermion: {
      line: 'i1-o1,i2-v1-o2,i3-v2-v3-o3,i4-v4-o4,i5-v6-v7-o5',
      loop: 'v1-a1,v2-a2,v3-a3,v4-v5,v5-a4,v6-v7',
      ratio: 0.75, arrow: false
    },
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      t1: ['20,50', '$\\left< \\phi^2 \\right> =$', 75, 40],
      t2: ['155,50', '+', 20, 20],
      t3: ['235,50', '+', 20, 20],
      t4: ['355,50', '+', 20, 20],
      t5: ['435,50', '+', 20, 20],
    },
    mathjax: mathjaxDefined,
  },

  Feynman91: {
    width: 290, height: 64,
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    vertex: { v1: '100,37', v2: '140,37', },
    fermion: { line: 'v1-v2', arrow: false, },
    label: {
      t1: ['85,20', 'a', 20, 20],
      t2: ['149,20', 'b', 20, 20],
      t3: ['5,24', '$\\large \\left< \\phi_a \\phi_b \\right> =$', 80, 20],
      t4: ['170,8', 'propagador $\\Large \\frac{A^{-1}_{ab}}{m^2}$', 150, 70],
    },
    mathjax: mathjaxDefined,
  },

  Feynman92: {
    width: 350, height: 80,
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    vertex: {
      v1: '20,60', v2: '60,60', v3: '20,20', v4: '60,20',
      v5: '110,60', v6: '150,60', v7: '110,20', v8: '150,20',
      v9: '200,60', v10: '240,60', v11: '200,20', v12: '240,20',
      v13: '290,60', v14: '330,60', v15: '290,20', v16: '330,20',
    },
    fermion: {
      line: 'v5-v6,v7-v8,v9-v12,v10-v11,v13-v15,v14-v16',
      arrow: false,
    },
    label: {
      t1: ['10,15', 'a', 20, 20],
      t2: ['70,15', 'b', 20, 20],
      t3: ['10,72', 'c', 20, 20],
      t4: ['70,72', 'd', 20, 20],
      t5: ['85,44', '=', 20, 20],
      t6: ['100,15', 'a', 20, 20],
      t7: ['160,15', 'b', 20, 20],
      t8: ['100,72', 'c', 20, 20],
      t9: ['160,72', 'd', 20, 20],
      t10: ['175,44', '+', 20, 20],
      t11: ['190,15', 'a', 20, 20],
      t12: ['250,15', 'b', 20, 20],
      t13: ['190,72', 'c', 20, 20],
      t14: ['250,72', 'd', 20, 20],
      t15: ['265,44', '+', 20, 20],
      t16: ['280,15', 'a', 20, 20],
      t17: ['340,15', 'b', 20, 20],
      t18: ['280,72', 'c', 20, 20],
      t19: ['340,72', 'd', 20, 20],
    },
  },

  Feynman751: {
    width: 350, height: 80,
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    vertex: {
      v5: '110,60', v6: '150,60', v7: '110,20', v8: '150,20',
      v9: '200,60', v10: '240,60', v11: '200,20', v12: '240,20',
      v13: '290,60', v14: '330,60', v15: '290,20', v16: '330,20',
    },
    fermion: {
      line: 'v5-v6,v7-v8,v9-v11,v10-v12,v13-v16,v14-v15',
      arrow: false,
    },
    label: {
      t5: ['85,44', '=', 20, 20],
      t6: ['100,15', '1', 20, 20],
      t7: ['160,15', '2', 20, 20],
      t8: ['100,72', '3', 20, 20],
      t9: ['160,72', '4', 20, 20],
      t10: ['175,44', '+', 20, 20],
      t11: ['190,15', '1', 20, 20],
      t12: ['250,15', '2', 20, 20],
      t13: ['190,72', '3', 20, 20],
      t14: ['250,72', '4', 20, 20],
      t15: ['265,44', '+', 20, 20],
      t16: ['280,15', '1', 20, 20],
      t17: ['340,15', '2', 20, 20],
      t18: ['280,72', '3', 20, 20],
      t19: ['340,72', '4', 20, 20],
    },
  },

  Feynman781: {
    width: 700, height: 90,
    incoming: {
      i1: '70,50',  // fracción
      // numerador
      i2: '75,30',  // num 1
      i3: '115,30', // num 2
      i4: '177,30', // num 4
      i5: '219,30', // num 5
      i6: '281,30', // num 6
      i7: '343,40', // num 8
      i8: '385,30', // num 9
      i9: '462,30', // num 12
      i10: '532,30',  // num 14
      i11: '591,30',  // num 16
    },
    outgoing: {
      o1: '670,50', // fracción
      // numerador
      o2: '95,30',  // num 1
      o3: '135,30', // num 2
      o4: '197,30', // num 4
      o5: '259,30', // num 5
      o6: '301,30', // num 6
      o7: '363,40', // num 8
      o8: '405,30', // num 9
      o9: '482,30', // num 12
      o10: '552,30',  // num 14
      o11: '623,30',  // num 16
    },
    auxiliary: {
      //numerador
      a1: '150,20', a2: '150,40',   // num 3
      a3: '187,20',         // num 4
      a4: '229,20', a5: '249,20',   // num 5
      a6: '291,20',         // num 6
      a7: '316,20', a8: '316,40',   // num 7
      a9: '353,20',         // num 8
      a10: '420,20', a11: '420,40', // num 10
      a12: '437,20', a13: '437,40', // num 11
      a14: '500,26', a15: '500,34', // num 13
      a16: '564,15', a17: '564,45', // num 15
      // denominador
      a18: '288,60', a19: '288,80', // den 1
      a20: '322,60', a21: '322,80', // den 2
      a22: '339,60', a23: '339,80', // den 3
      a24: '372,55', a25: '372,85', // den 4
      a26: '409,66', a27: '409,74', // den 5
    },
    vertex: {
      // numerador
      v1: '150,30',         // num 3
      v2: '187,30',         // num 4
      v3: '229,30', v4: '249,30',   // num 5
      v5: '291,30',         // num 6
      v6: '316,30',         // num 7
      v7: '353,40', v8: '353,30',   // num 8
      v9: '420,30',         // num 10
      v10: '437,30',          // num 11
      v11: '490,30', v12: '510,30', // num 13
      v13: '564,25', v14: '564,35', // num 15
      v15: '599,30', v16: '615,30', // num 16
      // denominador
      v17: '288,70',          // den 1
      v18: '322,70',          // den 2
      v19: '339,70',          // den 3
      v20: '372,65', v21: '372,75', // den 4
      v22: '399,70', v23: '419,70', // den 5
    },
    node: {show: 'v', type: 'dot', fill: 'red', radius: 1.2},
    fermion: {
      line: 'i1-o1,i2-o2,i3-o3,i4-o4,i5-o5,i6-o6,i7-o7,i8-o8,i9-o9,i10-o10,i11-o11',
      loop: 'v1-a1,v1-a2,v2-a3,v3-a4,v4-a5,v5-a6,v6-a7,v6-a8,v7-v8,v8-a9,v9-a10,v9-a11,v10-a12,v10-a13,v11-v12,v13-v14,v13-a16,v14-a17,v15-v16,'
        + 'v17-a18,v17-a19,v18-a20,v18-a21,v19-a22,v19-a23,v20-v21,v20-a24,v21-a25,v22-v23',
      arc: 'v11-a14-v12-a15-v11,v22-a26-v23-a27-v22',
      tension: 2.5,
      arrow: false
    },
    label: {
      size: 18,
      // fracción
        t1: ['6,37', '$\\left< \\phi^2 \\right> =$', 120, 60],
      // numerador
      t2: ['100,17', '+', 20, 20],
      t3: ['160,17', '+', 20, 20],
      t4: ['202,17', '+', 20, 20],
      t5: ['264,17', '+', 20, 20],
      t6: ['326,17', '+', 20, 20],
      t7: ['370,17', '+', 20, 20],
      t8: ['447,17', '+', 20, 20],
      t9: ['515,17', '+', 20, 20],
      t10: ['574,17', '+', 20, 20],
      t11: ['627,17', '+ $\\cdots$', 50, 20],
      // denominador
      t12: ['251,58', '$1$ +', 40, 20],
      t13: ['299,58', '+', 20, 20],
      t14: ['350,58', '+', 20, 20],
      t15: ['382,58', '+', 20, 20],
      t16: ['425,58', '+ $\\cdots$', 50, 20],
    },
    mathjax: mathjaxDefined,
  },

  Feynman782: {
    width: 700, height: 70,
    incoming: {
      i12: '70,30',
      i13: '113,30',
      i14: '155,30',
      i15: '217,30',
      i16: '261,30',
    },
    outgoing: {
      o12: '91,30',
      o13: '133,30',
      o14: '195,30',
      o15: '237,30',
      o16: '293,30',
    },
    auxiliary: {
      a28: '123,20',
      a29: '165,20', a30: '185,20',
      a31: '227,10',
    },
    vertex: {
      v24: '123,30',
      v25: '165,30', v26: '185,30',
      v27: '227,30', v28: '227,20',
      v29: '269,30', v30: '285,30',
    },
    node: {show: 'v', type: 'dot', fill: 'red', radius: 1.2},
    fermion: {
      line: 'i12-o12,i13-o13,i14-o14,i15-o15,i16-o16',
      loop: 'v24-a28,v25-a29,v26-a30,v27-v28,v28-a31,v29-v30',
      arrow: false
    },
    label: {
      size: 18,
      t17: ['50,18', '$=$', 20, 20],
      t18: ['96,18', '+', 20, 20],
      t19: ['138,18', '+', 20, 20],
      t20: ['200,18', '+', 20, 20],
      t21: ['242,18', '+', 20, 20],
      t22: ['298,18', '+ $\\cdots$', 50, 20],
      },
    mathjax: mathjaxDefined,
  },

  Feynman783: {
    width: 200, height: 90,
    incoming: {i1: '10,80'},
    outgoing: {o1: '190,80'},
    vertex: {v1: '35,80', v2: '100,80', v3: '165,80'},
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    fermion: {line: 'i1-o1', arc: 'v1-v3,v1-v2,v2-v3', arrow: false},
    mathjax: mathjaxDefined,
  },

  Feynman801: {
    width: 265, height: 70,
    incoming: {i1: '45,40'},
    outgoing: {o1: '120,40'},
    fermion: {line: 'i1-o1', arrow: false},
    label: {
      t1: ['30,30', '$x$', 30, 30],
      t2: ['130,30', '$y$', 30, 30],
      t3: ['145,30', '$=\\Delta_F(x-y)$', 120, 70]
    },
    mathjax: mathjaxDefined,
  },

  Feynman802: {
    width: 265, height: 70,
    incoming: {i1: '70,60', i2: '110,60', i3: '70,20', i4: '110,20'},
    vertex: {v1: '90,40'},
    fermion: {line: 'v1-i1,v1-i2,v1-i3,v1-i4', arrow: false},
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      t1: ['88,18', '$z$', 20, 20],
      t5: ['145,28', '$=-i\\lambda \\  \\int \\mathrm{d}^4z$', 90, 100]
    },
    mathjax: mathjaxDefined
  },

  Feynman803: {
    width: 170, height: 70,
    incoming: {i1: '40,50'},
    outgoing: {o1: '120,50'},
    vertex: {v1: '80,50'},
    auxiliary: {a1: '80,20'},
    fermion: {line: 'i1-v1-o1', loop: 'v1-a1', arrow: false},
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      t1: ['30,40', '$x$', 10, 30],
      t2: ['130,40', '$y$', 10, 30],
      t3: ['78, 30', '$z$', 10, 30],
    },
    mathjax: mathjaxDefined,
  },

  Feynman804: {
    width: 170, height: 70,
    incoming: {i1: '30,50'},
    outgoing: {o1: '130,50'},
    vertex: {v1: '60,50', v2: '100,50'},
    auxiliary: {a1: '60,20', a2: '100,20'},
    fermion: {line: 'i1-v1-v2-o1', loop: 'v1-a1,v2-a2', arrow: false},
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      t1: ['20,40', '$x$', 10, 30],
      t2: ['140,40', '$y$', 10, 30],
      t3: ['55,28', '$z_1$', 15, 30],
      t4: ['95,28', '$z_2$', 15, 30],
    },
    mathjax: mathjaxDefined,
  },

  Feynman811: {
    width: 130, height: 75,
    incoming: {i1: '20,40'},
    outgoing: {o1: '120,40'},
    vertex: {v1: '40,40', v2: '100,40'},
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    fermion: {line: 'i1-o1', arc: 'v1-v2-v1', arrow: false},
    label: {
      t1: ['6,30', '$x$', 20, 20],
      t2: ['122,30', '$y$', 20, 20],
      t3: ['48,39', '$z_1$', 20, 20],
      t4: ['78,19', '$z_2$', 20, 20],
    },
    mathjax: mathjaxDefined,
  },

  Feynman812: {
    width: 365, height: 60,
    incoming: {i1: '10,40'},
    outgoing: {o1: '90,40'},
    fermion: {line: 'i1-o1', arrow: false},
    symbol: {s1: ['30,35', 0, 'arrow', 40, 0, false]},
    label: {
      t1: ['50,15', '$p$', 30, 30],
      t3: ['115,25', '$=\\frac{i}{p^2-m^2+i\\varepsilon}$', 120, 70]
    },
    mathjax: mathjaxDefined,
  },

  Feynman813: {
    width: 365, height: 80,
    incoming: {i1: '30,70', i2: '90,70', i3: '30,10', i4: '90,10'},
    vertex: {v1: '60,40'},
    fermion: {line: 'v1-i1,v1-i2,v1-i3,v1-i4', arrow: false},
    symbol: {
      s1: ['80,15', 135, 'arrow'],
      s2: ['85,60', -135, 'arrow'],
      s3: ['40,15', 45, 'arrow'],
      s4: ['35,60', -45, 'arrow'],
    },
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      t1: ['115,28', '$=-i\\lambda (2 \\pi)^4 \\delta^{(4)}(p_1+p_2+p_3+p_4)$', 250, 30],
      t2: ['62,1', '$p_1$', 20, 20],
      t3: ['45,1', '$p_2$', 20, 20],
      t4: ['23,37', '$p_3$', 20, 20],
      t5: ['83,37', '$p_4$', 20, 20],
    },
    mathjax: mathjaxDefined
  },

  Feynman814: {
    width: 170, height: 90,
    incoming: {i1: '30,70'},
    outgoing: {o1: '130,70'},
    vertex: {v1: '80,70'},
    auxiliary: {a1: '80,30'},
    fermion: {line: 'i1-v1-o1', loop: 'v1-a1', arrow: false},
    symbol: {
      s1: ['35,65', 0, 'arrow', 25],
      s2: ['96,65', 0, 'arrow', 25],
      s3: ['70,25', 0, 'arrow', 20, 20],
    },
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      t1: ['40,42', '$p_1$', 20, 30],
      t2: ['105,42', '$p_2$', 20, 30],
      t3: ['70,5', '$k$', 10, 30],
    },
    mathjax: mathjaxDefined,
  },

  Feynman815: {
    width: 200, height: 90,
    incoming: {i1: '20,75'},
    outgoing: {o1: '190,75'},
    vertex: {v1: '70,75', v2: '140,75'},
    auxiliary: {a1: '70,35', a2: '140,35'},
    fermion: {line: 'i1-v1-v2-o1', loop: 'v1-a1,v2-a2', arrow: false},
    symbol: {
      s1: ['25,70', 0, 'arrow', 25],
      s2: ['156,70', 0, 'arrow', 25],
      s3: ['90,70', 0, 'arrow', 25],
      s4: ['60,30', 0, 'arrow', 20, 20],
      s5: ['130,30', 0, 'arrow', 20, 20],
    },
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      t1: ['30,47', '$p_1$', 20, 30],
      t2: ['95,47', '$p_1$', 20, 30],
      t3: ['165,47', '$p_2$', 20, 30],
      t4: ['60,5', '$k_1$', 20, 30],
      t5: ['130,5', '$k_2$', 20, 30],
    },
    mathjax: mathjaxDefined,
  },

};
