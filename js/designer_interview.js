
$('#ui_money_btn').click(interview () {

})

$('#ui_skill_btn').click(function () {
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);

    if (randomNumber == 0) {
        $('#ui_money_btn').attr('id', 'fe_money_btn');
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('お金');
        $('#matching').text('マッチング大成功!!');
    } else if (randomNumber == 1) {
        $('#ui_money_btn').attr('id', 'fe_money_btn');
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('スキルアップ');
        $('#matching').text('妥協したようです。');
    }else {
        $('#applicant_request').text('自由');
        $('#matching').text('ミスマッチです。');
    }
})

$('#ui_free_btn').click(function () {
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);

    if (randomNumber == 0) {
        $('#ui_money_btn').attr('id', 'fe_money_btn');
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('お金');
        $('#matching').text('マッチング大成功!!');
    } else if (randomNumber == 1) {
        $('#ui_money_btn').attr('id', 'fe_money_btn');
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('スキルアップ');
        $('#matching').text('妥協したようです。');
    }else {
        $('#applicant_request').text('自由');
        $('#matching').text('ミスマッチです。');
    }
})
