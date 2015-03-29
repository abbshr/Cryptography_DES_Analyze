var S1 = [
  14,  4, 13,  1,  2, 15, 11,  8,  3, 10,  6, 12,  5,  9,  0,  7,
  0, 15,  7,  4, 14,  2, 13,  1, 10,  6, 12, 11,  9,  5,  3,  8,
  4,  1, 14,  8, 13,  6,  2, 11, 15, 12,  9,  7,  3, 10,  5,  0,
  15, 12,  8,  2,  4,  9,  1,  7,  5, 11,  3, 14, 10,  0,  6, 13
];

function proc(er) {
  // origin S
  var row = 0;
  var column = 0;

  row |= ((er & 0x80) >> 6);
  row |= ((er & 0x04) >> 2);
  
  column |= ((er & 0x78) >> 3);

  return S1[row * 16 + column];
  
  // linear S
  //return (er + 1) % 16;

  // random S
  //return parseInt(Math.random()*100) % 16;
}

function toBin(digit, n) {
  var bin = digit.toString(2);
  return bin.length < n ? '0'.repeat(n - bin.length) + bin : bin;
}

for (var i = 0; i < 64; i++)
  for (var j = i; j < 64; j++)
    console.log(`${i ^ j} => ${[toBin(i, 6), toBin(j, 6)]} => (S1) => ${[toBin(proc(i), 4), toBin(proc(j), 4)]} => ${proc(i) ^ proc(j)}`);

    
