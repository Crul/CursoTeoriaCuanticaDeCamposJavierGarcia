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
      t2: ['155 ,50', '+', 20, 20],
      t3: ['235 ,50', '+', 20, 20],
      t4: ['355 ,50', '+', 20, 20],
      t5: ['435 ,50', '+', 20, 20],
    },
    mathjax: true,
  },
};
