// chapter00
$('#start_btn').click(function () {
        $('.cp_00_wrapper').hide();
        $('.cp_01_wrapper').show();
});


// chapter01
let chapter01_story = 1;
$('#next_text_btn_01').click(function () {
    console.log(chapter01_story);
    if (chapter01_story == 1) {
        $('#conversation01').text("このWEBアプリはセカイを大きく変えるかもしれない！");
        chapter01_story = chapter01_story + 1;
    }else if( chapter01_story == 2){
        $('#conversation01').text("しかし、作るには知識も技術も足りない。");
        chapter01_story = chapter01_story + 1;
    } else if (chapter01_story == 3) {
        $('#conversation01').text("あのとき、ジーズアカデミーに通っていればよかったのだが。");
        chapter01_story = chapter01_story + 1;
    } else if (chapter01_story === 4) {
        $('#conversation01').text("悩んでいてもしかたない、募集を出しながらWEBアプリを作ろう！！");
        chapter01_story = chapter01_story + 1;
    }else {
            $('.cp_01_wrapper').hide();
            $('.cp_02_wrapper').show();
    }
    console.log(chapter01_story);
});


// chapter02
$('#next_text_btn_02').click(function () {
    $('.cp_02_wrapper').hide();
    $('.cp_03_wrapper').show();
});


// chapter03 デザイナー編
let chapter03_story = 1;
$('#next_text_btn_03').click(function () {
    console.log(chapter03_story);
    if (chapter03_story == 1) {
        $('#conversation03').text("とりあえずデザインだけでもと思っていたが、全く前に進まない。");
        chapter03_story = chapter03_story + 1;
    }else  if (chapter03_story == 2) {
        $('#conversation03').text("ま、まずい、いきなりつまずいてしまいそうだ。");
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 3) {
        $('#talker03').text("？？？");
        $('#conversation03').text("どうやら、お困りのようですね。");
        chapter03_story = chapter03_story + 1;
    }else if (chapter03_story == 4) {
        $('#talker03').text("あなた");
        $('#conversation03').text("！？！？");
        chapter03_story = chapter03_story + 1;
    }else if (chapter03_story == 5) {
        $('#talker03').text("あなた");
        $('#conversation03').text("あなたから感じるそのデザイナー的な雰囲気、ま、まさか！！");
        chapter03_story = chapter03_story + 1;
    }else if (chapter03_story == 6) {
        $('#talker03').text("？？？");
        $('#conversation03').text("さすが鋭いですね。実は私.......");
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 7) {
        $('#stage_name03').css('opacity','1.0');
        $('#talker03').text("応募者");
        $('#conversation03').text("前職は Orange社 でUI/UXデザイナーをしていました。");
        chapter03_story = chapter03_story + 1;
    }else if (chapter03_story == 8) {
        $('#talker03').text("応募者");
        $('#conversation03').text("面接よろしくお願いします！");
        chapter03_story = chapter03_story + 1;
    }else if (chapter03_story == 9) {
        $('#talker03').text("あなた");
        $('#conversation03').text("キタ＝＝＝＝＝＝！");
        chapter03_story = chapter03_story + 1;
    }else if (chapter03_story == 10) {
        $('#talker03').text("");
        $('#conversation03').text("");
        $('#matching_result_miss03').hide();
        $('.start_occupation').show();
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 11) {
        $('#conversation03').hide();
        $('.start_occupation').hide();
        $('#cp_03_choice_box').show();
        $('#next_text_btn_03').hide();
    } else if (chapter03_story == 12) {
        $('#matching_result_success03').hide();
        $('#talker03').text("あなた");
        $('#conversation03').text("よし、心強い仲間ができたぞ！");
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 13) {
        $('#talker03').text("あなた");
        $('#conversation03').text("さっそく、デザインの打ち合わせをしよう！");
        chapter03_story = chapter03_story + 1;
    }else {
        $('.cp_03_wrapper').hide();
        $('.cp_04_wrapper').show();

    }
    console.log(chapter03_story);
});

// 面接の選択肢
// マッチ成功の時の処理
function successMatching03() {
    $('#cp_03_choice_box').hide();
    $('#next_text_btn_03').show();
    $('#matching_result_success03').show();
    $('#conversation03').text("マッチ成功！ << UI/UXデザイナーが仲間になった。>> ");
    $('#conversation03').show();
    chapter03_story = chapter03_story + 1;
    console.log('マッチ成功');
    console.log('ステージ' + currentStage + 'に進みます。');
    return;
}

// マッチ失敗の時の処理
function missMatching03() {
    $('#cp_03_choice_box').hide();
    $('#next_text_btn_03').show();
    $('#matching_result_miss03').show();
    $('#conversation03').text("ミスマッチ、もう一度やり直そう。");
    $('#conversation03').show();
    chapter03_story = chapter03_story - 1;
    console.log('マッチ失敗');
    console.log('リトライ画面に進みます。')
}

$('#03_money_btn').click(function () {
    interview();
    if (currentStage == 2) {
        successMatching03();
    } else {
        missMatching03();
    }
    return;
})
$('#03_free_btn').click(function () {
    interview();
    if (currentStage == 2) {
        successMatching03();
    } else {
        missMatching03();
    }
    return;
})
$('#03_skill_btn').click(function () {
    interview();
    if (currentStage == 2) {
        successMatching03();
    } else {
        missMatching03();
    }
    return;
})

// ここまで チャプター03


// chapter04
let chapter04_story = 1;
$('#next_text_btn_04').click(function () {
    console.log(chapter04_story);
    if (chapter04_story == 1) {
        $('#talker04').text("あなた");
        $('#conversation04').text("よし、大体のデザインや機能はまとまってきたぞ。");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 2) {
        $('#talker04').text("あなた");
        $('#conversation04').text("さて、プログラミングなるもので実際にWEB上に描いてみよう。");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 3) {
        $('#talker04').text("あなた");
        $('#conversation04').text("HTML? CSS? さっぱり分からん。");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 4) {
        $('#talker04').text("あなた");
        $('#conversation04').text("せめてチーズアカデミーを作っていればどうにかなった気がするのだが。");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 5) {
        $('#talker04').text("？？？");
        $('#conversation04').text("ブツブツブツ.......。");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 6) {
        $('#talker04').text("あなた");
        $('#conversation04').text("！？！？");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 7) {
        $('#talker04').text("？？？");
        $('#conversation04').text("justify-content:center; , align-items......。");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 8) {
        $('#talker04').text("あなた");
        $('#conversation04').text("もしかして......。");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 9) {
        $('#talker04').text("？？？");
        $('#conversation04').text("jQuery....コンポーネント........。");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 10) {
        $('#stage_name04').css('opacity','1.0');
        $('#talker04').text("あなた");
        $('#conversation04').text("野生のフロントエンドジニアだ！！ 仲間になってくれ！");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 11) {
        $('#talker04').text("");
        $('#conversation04').text("");
        $('#matching_result_miss04').hide();
        $('.start_occupation').show();
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 12) {
        $('#talker04').text("質問: 支給されるPCのOSは何ですか？");
        $('#conversation04').hide();
        $('.start_occupation').hide();
        $('#cp_04_choice_box').show();
        $('#next_text_btn_04').hide();
    } else if (chapter04_story == 13) {
        $('#talker04').text("あなた");
        $('#matching_result_success04').hide();
        $('#conversation04').text("よし、フロントエンドエンジニアを仲間にできたぞ！");
        chapter04_story = chapter04_story + 1;
    } else if (chapter04_story == 14) {
        $('#conversation04').text("さっそく、取り掛かってくれ！");
        chapter04_story = chapter04_story + 1;
    } else {
        $('.cp_04_wrapper').hide();
        $('.cp_05_wrapper').show();

    }
    console.log(chapter04_story);
});

// 面接の選択肢
// マッチ成功の時の処理
function successMatching04() {
    $('#cp_04_choice_box').hide();
    $('#talker04').text("");
    $('#next_text_btn_04').show();
    $('#matching_result_success04').show();
    $('#conversation04').text("マッチ成功！ << フロントエンドエンジニアが仲間になった。>> ");
    $('#conversation04').show();
    chapter04_story = chapter04_story + 1;
    console.log('マッチ成功');
    console.log('ステージ' + currentStage + 'に進みます。');
    return;
}

// マッチ失敗の時の処理
function missMatching04() {
    $('#cp_04_choice_box').hide();
    $('#talker04').text("");
    $('#next_text_btn_04').show();
    $('#matching_result_miss04').show();
    $('#conversation04').text("ミスマッチ、もう一度やり直そう。");
    $('#conversation04').show();
    chapter04_story = chapter04_story - 1;
    console.log('マッチ失敗');
    console.log('リトライ画面に進みます。')
}

$('#04_money_btn').click(function () {
    interview();
    if (currentStage == 3) {
        successMatching04();
    } else {
        missMatching04();
    }
    return;
})
$('#04_free_btn').click(function () {
    interview();
    if (currentStage == 3) {
        successMatching04();
    } else {
        missMatching04();
    }
    return;
})
$('#04_skill_btn').click(function () {
    interview();
    if (currentStage == 3) {
        successMatching04();
    } else {
        missMatching04();
    }
    return;
})
// ここまでがChapter04



// chapter05 サーバーサイドエンジニア編
let chapter05_story = 1;
$('#next_text_btn_05').click(function () {
    console.log(chapter05_story);
    if (chapter05_story == 1) {
        $('#talker05').text("あなた");
        $('#conversation05').text("よし、かなり見た目が整ってきたな。");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 2) {
        $('#talker05').text("あなた");
        $('#conversation05').text("あとは、データを扱いたいから、サーバーサイドエンジニアも必要だ。");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 3) {
        $('#talker05').text("？？？");
        $('#conversation05').text("ブツブツブツブツ...........。");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 4) {
        $('#talker05').text("あなた");
        $('#conversation05').text("！？！？");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 5) {
        $('#talker05').text("？？？");
        $('#conversation05').text("それぞれのデータを取得して.......校内の人が利用できるサービス.......。");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 6) {
        $('#talker05').text("あなた");
        $('#conversation05').text("まさか、サーバーサイドエンジニア！？");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 7) {
        $('#stage_name05').css('opacity','1.0');
        $('#talker05').text("サーバーサイドエンジニア");
        $('#conversation05').text("初めまして、個人でSNSを開発しています。");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 8) {
        $('#talker05').text("サーバーサイドエンジニア");
        $('#conversation05').text("面接お願いします！");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 9) {
        $('#matching_result_miss05').hide();
        $('#talker05').text("");
        $('#conversation05').text("");
        $('.start_occupation').show();
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 10) {
        $('#conversation05').hide();
        $('.start_occupation').hide();
        $('#cp_05_choice_box').show();
        $('#next_text_btn_05').hide();
    } else if (chapter05_story == 11) {
        $('#matching_result_success05').hide();
        $('#talker05').text("あなた");
        $('#conversation05').text("これで、データを扱うことができるようになったぞ！");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 12) {
        $('#talker05').text("あなた");
        $('#conversation05').text("そういえば、名前を聞いてなかった。新しい仲間の名前を聞かせてくれ！");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 13) {
        $('#talker05').text("サーバーサイドエンジニア");
        $('#conversation05').text("........................マーク・ザッカーバーグ。");
        chapter05_story = chapter05_story + 1;
    } else if (chapter05_story == 14) {
        $('#talker05').text("あなた");
        $('#conversation05').text("えっ。");
        chapter05_story = chapter05_story + 1;
    } else {
        $('.cp_05_wrapper').hide();
        $('.cp_06_wrapper').show();

    }
    console.log(chapter05_story);
});

// 面接の選択肢
// マッチ成功の時の処理
function successMatching05() {
    $('#cp_05_choice_box').hide();
    $('#next_text_btn_05').show();
    $('#matching_result_success05').show();
    $('#conversation05').text("マッチ成功！ << サーバーサイドエンジニアが仲間になった。>> ");
    $('#conversation05').show();
    chapter05_story = chapter05_story + 1;
    console.log('マッチ成功');
    console.log('ステージ' + currentStage + 'に進みます。');
    return;
}

// マッチ失敗の時の処理
function missMatching05() {
    $('#cp_05_choice_box').hide();
    $('#next_text_btn_05').show();
    $('#matching_result_miss05').show();
    $('#conversation05').text("ミスマッチ、もう一度やり直そう。");
    $('#conversation05').show();
    chapter05_story = chapter05_story - 1;
    console.log('マッチ失敗');
    console.log('リトライ画面に進みます。')
}

$('#05_money_btn').click(function () {
    interview();
    if (currentStage == 4) {
        successMatching05();
    } else {
        missMatching05();
    }
    return;
})
$('#05_free_btn').click(function () {
    interview();
    if (currentStage == 4) {
        successMatching05();
    } else {
        missMatching05();
    }
    return;
})
$('#05_skill_btn').click(function () {
    interview();
    if (currentStage == 4) {
        successMatching05();
    } else {
        missMatching05();
    }
    return;
})
// ここまでがChapter05


// chapter06
let chapter06_story = 1;
$('#next_text_btn_06').click(function () {
    console.log(chapter06_story);
    if (chapter06_story == 1) {
        $('#talker06').text("あなた");
        $('#conversation06').text("さて、心強い仲間ができてデータも扱えるようになった。");
        $('.start_occupation').show();
        chapter06_story = chapter06_story + 1;
    } else if (chapter06_story == 2) {
        $('#talker06').text("あなた");
        $('#conversation06').text("サーバーのデータ管理や、セキュリティーに関する人材も欲しいな。");
        chapter06_story = chapter06_story + 1;
    } else if (chapter06_story == 3) {
        $('#talker06').text("");
        $('#conversation06').text("");
        chapter06_story = chapter06_story + 1;
    } else if (chapter06_story == 4) {
        $('#talker06').text("");
        $('#conversation06').text("");
        chapter06_story = chapter06_story + 1;
    } else if (chapter06_story == 5) {
        $('#stage_name06').css('opacity','1.0');
        $('#talker06').text("");
        $('#conversation06').text("");
        $('.start_occupation').show();
        $('#matching_result_missing06').hide();
        chapter06_story = chapter06_story + 1;
    } else if (chapter06_story == 6) {
        $('#conversation06').hide();
        $('.start_occupation').hide();
        $('#cp_06_choice_box').show();
        $('#next_text_btn_06').hide();
    } else {
        $('.cp_06_wrapper').hide();
        $('.cp_07_wrapper').show();

    }
    console.log(chapter06_story);
});

// 面接の選択肢
// マッチ成功の時の処理
function successMatching06() {
    $('#cp_06_choice_box').hide();
    $('#next_text_btn_06').show();
    $('#matching_result_success06').show();
    $('#conversation06').text("採用成功だ！次は営業採用に進もう！");
    $('#conversation06').show();
    chapter06_story = chapter06_story + 1;
    console.log('マッチ成功');
    console.log('ステージ' + currentStage + 'に進みます。');
    return;
}

// マッチ失敗の時の処理
function missMatching06() {
    $('#cp_06_choice_box').hide();
    $('#next_text_btn_06').show();
    $('#matching_result_missing06').show();
    $('#conversation06').text("残念だ、次の応募者に進もう。");
    $('#conversation06').show();
    chapter06_story = chapter06_story - 1;
    console.log('マッチ失敗');
    console.log('リトライ画面に進みます。')
}

$('#06_money_btn').click(function () {
    interview();
    if (currentStage == 5) {
        successMatching06();
    } else {
        missMatching06();
    }
    return;
})
$('#06_free_btn').click(function () {
    interview();
    if (currentStage == 5) {
        successMatching06();
    } else {
        missMatching06();
    }
    return;
})
$('#06_skill_btn').click(function () {
    interview();
    if (currentStage == 5) {
        successMatching06();
    } else {
        missMatching06();
    }
    return;
})
// ここまでがChapter06



// chapter07
let chapter07_story = 1;
$('#next_text_btn_07').click(function () {
    console.log(chapter07_story);
    if (chapter07_story == 1) {
        $('#talker07').text("");
        $('#conversation07').text("");
        $('.start_occupation').show();
        chapter07_story = chapter07_story + 1;
    } else if (chapter07_story == 2) {
        $('#conversation07').hide();
        $('.start_occupation').hide();
        $('#cp_07_choice_box').show();
        $('#next_text_btn_07').hide();
    } else {
        $('.cp_07_wrapper').hide();
        $('.cp_08_wrapper').show();

    }
    console.log(chapter07_story);
});

// 面接の選択肢
// マッチ成功の時の処理
function successMatching07() {
    $('#cp_07_choice_box').hide();
    $('#next_text_btn_07').show();
    $('#matching_result_success').show();
    $('#conversation07').text("採用成功だ！これで、WEBサービスが開発できる！");
    $('#conversation07').show();
    chapter07_story = chapter07_story + 1;
    console.log('マッチ成功');
    console.log('ステージ' + currentStage + 'に進みます。');
    return;
}

// マッチ失敗の時の処理
function missMatching07() {
    $('#cp_07_choice_box').hide();
    $('#next_text_btn_07').show();
    $('#matching_result_miss').show();
    $('#conversation07').text("残念だ、次の応募者に進もう。");
    $('#conversation07').show();
    chapter07_story = chapter07_story - 1;
    console.log('マッチ失敗');
    console.log('リトライ画面に進みます。')
}

$('#07_money_btn').click(function () {
    interview();
    if (currentStage == 6) {
        successMatching07();
    } else {
        missMatching07();
    }
    return;
})
$('#07_free_btn').click(function () {
    interview();
    if (currentStage == 6) {
        successMatching07();
    } else {
        missMatching07();
    }
    return;
})
$('#07_skill_btn').click(function () {
    interview();
    if (currentStage == 6) {
        successMatching07();
    } else {
        missMatching07();
    }
    return;
})
// ここまでがChapter07


//chapter08
let chapter08_story = 1;
$('#next_text_btn_08').click(function () {
    console.log(chapter08_story);
    if (chapter08_story == 1) {
        $('#talker08').text("あなた");
        $('#stage_name08').css('opacity','1.0');
        $('#conversation08').text("よし、できたぞ！ついにリリースだ！");
        chapter08_story = chapter08_story + 1;
    } else if (chapter08_story == 2) {
        $('#talker08').text("あなた");
        $('#conversation08').text("このサービスでセカイを変えるぞ！！");
        chapter08_story = chapter08_story + 1;
    } else if (chapter08_story == 3) {
        $('#talker08').text("");
        $('#conversation08').text("");
        $('#game_story_success').show();
        chapter08_story = chapter08_story + 1;
    } else {
        $('.cp_08_wrapper').hide();
        $('.cp_01_wrapper').show();

    }
    console.log(chapter07_story);
});

// ここまでがChapter07