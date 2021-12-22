function init() {
  console.log(document.getElementById('gyou').value);
}
init();
// 席数確認
let Gyou = document.getElementById('gyou');
let Retu = document.getElementById('retu');
let result = document.getElementById('total');
result.innerHTML = Gyou.value * Retu.value;
Gyou.addEventListener('change', (event) => {
  result.innerHTML = event.target.value * Retu.value;
});
Retu.addEventListener('change', (event) => {
  result.innerHTML = event.target.value * Gyou.value;
});
result.addEventListener('change', (event) => {
  console.log(event.target.value);
});
// 机をおく
let Members = document.getElementById('member');
let membersList = [];
Members.addEventListener('change', (event) => {
  membersList = event.target.value.split(',');
});

//机処理
let Tables = document.getElementById('tables');
function sekigae() {
  //   リスト処理
  if (membersList.length < result.innerHTML) {
    for (var i = membersList.length; i < result.innerHTML; i++) {
      membersList.push('');
    }
  } else if (membersList.length > result.innerHTML) {
    alert(membersList.length - result.innerHTML + '人座れないよ...(>_<")');
    Gyou.value = 1;
    Retu.value = 1;
    result.innerHTML = 1;
    Members.value = '';
    return;
  }

  let table = '';
  let Random = membersList.sort(() => Math.random() - 0.5);
  console.log(Random);
  Random.forEach((ele) => {
    table = table + `<div class="table">${ele}</div>`;
  });
  Tables.innerHTML = table;

  const tableStyle = document.getElementById('tables');
  console.log(tableStyle);
  tableStyle.style.width = Gyou.value * 200 + 'px';
  // tableStyle[i].style.height = 100 / Gyou.value + 'vh';
}
