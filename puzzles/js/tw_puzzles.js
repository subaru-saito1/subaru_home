
/**
 * パズル情報が書かれたファイルをajaxで取得
 */
fetch('data/puzzles.txt')
  .then(response => response.text())
  .then(data => create_table_from_csv(data))     // CSVで取得
//.then(date => puztable_from_json(data))    // JSONで取得
  .catch((error) => {
    console.error('Error: ', error);
  });

/**
 * CSVパズルデータをもとにテーブルを作成
 */
function create_table_from_csv(data) {
  
  // データを一行ずつ取得
  let rows = data.split('\n');
  // 最後に空行が入る場合があるので削除する
  if (rows[rows.length - 1] === '') {
    rows.pop();
  }

  // tableオブジェクトの取得
  let tab_obj = document.querySelector('table');

  let cnt = 1;
  for (let row of rows) {
    let pinfo = row.split(',');
    // DOMの処理
    let tr_obj = document.createElement('tr');
    create_tr(tr_obj, cnt, pinfo);
    tab_obj.appendChild(tr_obj);
    cnt++;
  }
}



/**
 * テーブルの各行の作成
 */
function create_tr(tr_obj, cnt, pinfo) {
  let pdate, pname, psize, purl;
  [pdate, pname, psize, purl] = pinfo;

  // 番号
  let pid_obj = document.createElement('td');
  pid_obj.innerHTML = cnt;
  tr_obj.appendChild(pid_obj);
  // 日付
  let pdate_obj = document.createElement('td');
  pdate_obj.innerHTML = pdate;
  tr_obj.appendChild(pdate_obj);
  // 名前
  let pname_obj = document.createElement('td');
  let pname_a_obj = document.createElement('a');
  pname_a_obj.innerHTML = pname;
  pname_a_obj.setAttribute('href', purl);
  pname_a_obj.setAttribute('target', '_blank');
  pname_obj.appendChild(pname_a_obj);
  tr_obj.appendChild(pname_obj);
  // サイズ
  let psize_obj = document.createElement('td');
  psize_obj.innerHTML = psize;
  tr_obj.appendChild(psize_obj);

  // コメント欄
  let pcmnt_obj = document.createElement('td');
  pcmnt_obj.innerHTML = 'コメントかっこかり';
  tr_obj.appendChild(pcmnt_obj);
}

