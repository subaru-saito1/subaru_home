fetch('./diary.json')
  .then(response => response.json())
  .then(data => create_table(data))
  .catch((error) => {
    console.error('Error: ', error);
  });


/**
 * テーブルを作成する
 */
function create_table(data) {
  let table = $('#diary_table');
  for (let diary of data) {
    let tr = $('<tr>');
    tr.append($('<td>', {class: "timeplace diary_date"}).text(diary.date));
    tr.append($('<td>', {class: "diary_contents"}).text(diary.diary));
    table.append(tr);
  }

}

function fill_table(jsondata) {
  let table = $('#omopa_list');
  let i = 1;
  for (let omopa of jsondata) {
    let tr = $('<tr>');
    tr.append($("<td>", {class: "omopa_id"}).text(i));
    tr.append($("<td>", {class: "omopa_title"}).text(omopa.title));
    tr.append($("<td>", {class: "omopa_vol"}).text(omopa.startvol));
    tr.append($("<td>", {class: "omopa_author"}).text(omopa.author));
    tr.append($("<td>", {class: "omopa_rank"}).text(process_rank(omopa.rankup)));
    // ルール文の処理
    let rules_td = $("<td>", {class: "omopa_rules"});
    let rules_ol = $("<ol>");
    for (let rule of omopa.rules) {
      rules_ol.append($("<li>").text(rule));
    }
    rules_td.append(rules_ol);
    tr.append(rules_td);

    table.append(tr);
    i++;
  }
}