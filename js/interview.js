

let currentStage = 0;

function nextStage() {
    if (currentStage === 0) {
        return "フロントエンドエンジニア面接";
    }else  if ( currentStage === 1){
        return "サーバーサイドエンジニア面接";
    }else  if ( currentStage === 2){
        return "インフラエンジニア面接";
    } else if (currentStage === 3) {
        return "営業マン面接";
    } else {
        return "採用成功";
    }
}


function interview() {
    nextStage();
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);

    if (randomNumber == 0) {
        $('#occupation').text(nextStage);
        $('#applicant_request').text('お金');
        $('#matching').text('マッチング大成功!!');
        currentStage = currentStage + 1;
    } else if (randomNumber == 1) {
        $('#occupation').text(nextStage);
        $('#applicant_request').text('スキルアップ');
        $('#matching').text('妥協したようです。');
        currentStage = currentStage + 1;
    } else {
        $('#applicant_request').text('自由');
        $('#matching').text('ミスマッチです。');
    }
}



$('#ui_money_btn').click(function () {
    interview();
    console.log('ステージは' + currentStage + 'になりました');
    return;
})
$('#ui_free_btn').click(function () {
    interview();
    console.log('ステージは' + currentStage + 'になりました');
    return;
})
$('#ui_skill_btn').click(function () {
    interview();
    console.log('ステージは' + currentStage + 'になりました');
    return;
})


