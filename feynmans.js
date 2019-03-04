var feynmanDiagrams = {

  Feynman51: {
    width: 210, height: 80,
    incoming: {i1: '20,40'},
    outgoing: {o1: '140,40'},
    fermion: {line: 'i1-o1', arrow: false},
    label: { t1: ['150,26.5', '$ = \\frac{1}{m^2} $', 40, 40] },
    mathjax: true,
  },

  Feynman52: {
    width: 210, height: 80,
    incoming: {i1: '40,10', i2: '40,70'},
    outgoing: {o1: '140,10', o2: '140,70'},
    vertex: {v1: '90,40'},
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    fermion: {line: 'i1-v1,i2-v1,v1-o1,v1-o2', arrow: false},
    label: { t1: ['150,30', '$ = - \\lambda $', 40, 20] },
    mathjax: true,
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
    mathjax: true,
  },

  Feynman91: {
    width: 240, height: 40,
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    vertex: { v1: '80,20', v2: '120,20', },
    fermion: { line: 'v1-v2', arrow: false, },
    label: {
      t1: ['5,10', '$\\left< \\phi_a \\phi_b \\right> =$', 80, 20],
      t2: ['140,10', 'propagador', 80, 20],
    },
    mathjax: true,
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

};
