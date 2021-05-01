
$('#money_btn').click(function () {
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);

    if (randomNumber == 0) {
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('お金');
        $('#matching').text('マッチング大成功!!');
    } else if (randomNumber == 1) {
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('スキルアップ');
        $('#matching').text('妥協したようです。');
    }else {
        $('#applicant_request').text('自由');
        $('#matching').text('ミスマッチです。');
    }
})

$('#skill_btn').click(function () {
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);

    if (randomNumber == 0) {
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('お金');
        $('#matching').text('マッチング大成功!!');
    } else if (randomNumber == 1) {
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('スキルアップ');
        $('#matching').text('妥協したようです。');
    }else {
        $('#applicant_request').text('自由');
        $('#matching').text('ミスマッチです。');
    }
})

$('#free_btn').click(function () {
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);

    if (randomNumber == 0) {
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('お金');
        $('#matching').text('マッチング大成功!!');
    } else if (randomNumber == 1) {
        $('#occupation').text('フロントエンドエンジニア面接');
        $('#applicant_request').text('スキルアップ');
        $('#matching').text('妥協したようです。');
    }else {
        $('#applicant_request').text('自由');
        $('#matching').text('ミスマッチです。');
    }
})
