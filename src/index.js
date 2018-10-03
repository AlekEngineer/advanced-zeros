module.exports = function getZerosCount(number, base) {
let copy_base = base,
    zeros_count = 0;

for (let i = 2; i <= copy_base; i++) {
  let count = 0;
  while (copy_base % i == 0) {
  count ++;
  copy_base /= i;
  }
  let copy_number = number,
      zeros_num = 0;
      
  while (Math.floor(copy_number / i) > 0) {
    zeros_num += Math.floor(copy_number / i);
    copy_number = Math.floor(copy_number / i);
  }
  
  zeros_count = Math.min(number, Math.floor(zeros_num / count));
}

return zeros_count;
}


