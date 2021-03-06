// ステージの進行具合を制御
let currentStage = 1;

// プレイヤーの体力
let applicantHp = 100;
let playerHp = 100;



// たくわえた倍率の値
let playerCharge = 1;
let applicantCharge = 1;

function randomNumber() {
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random()* (max - min + 1)) + min;
    console.log("ランダムナンバーは" + randomNumber);
    return randomNumber;
}

function loseRoute(){
    if (currentStage === 1) {
        $('#matching_result_miss03').show();
        $('#conversation03').text("負けてしまった。 目の前が真っ暗になった。");
    } else if (currentStage === 2) {
        $('#matching_result_miss04').show();
        $('#conversation04').text("負けてしまった。 目の前が真っ暗になった。");
    } else if (currentStage === 3) {
        $('#matching_result_miss05').show();
        $('#conversation05').text("負けてしまった。 目の前が真っ暗になった。");
    } else if (currentStage === 4) {
        $('#matching_result_miss06').show();
        $('#conversation06').text("負けてしまった。 目の前が真っ暗になった。");
    } else if (currentStage === 5) {
        $('#matching_result_miss07').show();
        $('#conversation07').text("負けてしまった。 目の前が真っ暗になった。");
    }
}



function validationJudge() {
    // プレイヤーが負けた時の処理
    if (playerHp <= 0) {
        console.log('負け');
        loseRoute();
        setTimeout(function () {
        location.reload();
    }, 3000);
    } else if (applicantHp <= 0) {
        $('.battle_conversation').text("");
        currentStage = currentStage + 1;
        if (currentStage == 2) {
            $('#next_text_btn_03').show();
            $('#cp_03_choice_box').hide();
            $('#matching_result_success03').show();
            $('#conversation03').text("捕獲成功！ << UI/UXデザイナーが仲間になった。>> ");
            $('#conversation03').show();
            applicantHp = 105;
            playerHp = 100;
            chapter03_story = chapter03_story + 1;
            console.log('勝利');
            console.log('ステージ' + currentStage + 'に進みます。');
        } else if (currentStage == 3) {
            $('#cp_04_choice_box').hide();
            $('#talker04').text("");
            $('#next_text_btn_04').show();
            $('#matching_result_success04').show();
            $('#conversation04').text("捕獲成功！ << フロントエンドエンジニアが仲間になった。>> ");
            $('#conversation04').show();
            applicantHp = 110;
            playerHp = 90;
            chapter04_story = chapter04_story + 1;
            console.log('勝利');
            console.log('ステージ' + currentStage + 'に進みます。');
        } else if (currentStage == 4) {
            $('#cp_05_choice_box').hide();
            $('#next_text_btn_05').show();
            $('#matching_result_success05').show();
            $('#conversation05').text("捕獲成功！ << サーバーサイドエンジニアが仲間になった。>> ");
            $('#conversation05').show();
            applicantHp = 120;
            playerHp = 90;
            chapter05_story = chapter05_story + 1;
            console.log('マッチ成功');
            console.log('ステージ' + currentStage + 'に進みます。');
        } else if (currentStage == 5) {
            $('#cp_06_choice_box').hide();
            $('#next_text_btn_06').show();
            $('#matching_result_success06').show();
            $('#conversation06').text("捕獲成功！ << インフラエンジニアが仲間になった。>>");
            $('#conversation06').show();
            applicantHp = 140;
            playerHp = 80;
            chapter06_story = chapter06_story + 1;
            console.log('勝利');
            console.log('ステージ' + currentStage + 'に進みます。');
        } else if (currentStage == 6) {
            $('#cp_07_choice_box').hide();
            $('#next_text_btn_07').show();
            $('#talker07').show();
            $('#matching_result_success07').show();
            $('#conversation07').text("捕獲成功！ << 営業担当が仲間になった。>>");
            $('#conversation07').show();
            applicantHp = 100;
            playerHp = 100;
            chapter07_story = chapter07_story + 1;
            console.log('勝利');
            console.log('ステージ' + currentStage + 'に進みます。');
        } else { }
    } else { }
}



// 体力ゲージの表示操作
function validationHp () {
    if (currentStage === 1) {
        $('#applicant_current_hp03').css('width', applicantHp + '%');
        $('#player_current_hp03').css('width', playerHp+ '%');
    } else if(currentStage === 2){
        $('#applicant_current_hp04').css('width', applicantHp/105*100 + '%');
        $('#player_current_hp04').css('width', playerHp + '%');
    } else if(currentStage === 3){
        $('#applicant_current_hp05').css('width', applicantHp/110*100 + '%');
        $('#player_current_hp05').css('width', playerHp/90*100 + '%');
    } else if(currentStage === 4){
        $('#applicant_current_hp06').css('width', applicantHp/120*100 + '%');
        $('#player_current_hp06').css('width', playerHp/90*100 + '%');
    } else if(currentStage === 5){
        $('#applicant_current_hp07').css('width', applicantHp/140*100 + '%');
        $('#player_current_hp07').css('width', playerHp/80*100 + '%');
    }
}

// 相手がこうげきと表示する
function applicantHandAttack() {
    if (currentStage === 1) {
        $('#conversation03').text("相手は こうげきしてきた!!");
    } else if(currentStage === 2){
        $('#conversation04').text("相手は こうげきしてきた!!");
    } else if(currentStage === 3){
        $('#conversation05').text("相手は こうげきしてきた!!");
    } else if(currentStage === 4){
        $('#conversation06').text("相手は こうげきしてきた!!");
    } else if(currentStage === 5){
        $('#conversation07').text("相手は こうげきしてきた!!");
    }
}
// 相手がたくわえていると表示する
function applicantHandCharge() {
    if (currentStage === 1) {
        $('#conversation03').text("相手は たくわえている。");
    } else if(currentStage === 2){
        $('#conversation04').text("相手は たくわえている。");
    } else if(currentStage === 3){
        $('#conversation05').text("相手は たくわえている。");
    } else if(currentStage === 4){
        $('#conversation06').text("相手は たくわえている。");
    } else if(currentStage === 5){
        $('#conversation07').text("相手は たくわえている。");
    }
}
// 相手がまもっていると表示する
function applicantHandDefense() {
    if (currentStage === 1) {
        $('#conversation03').text("相手は まもっている。");
    } else if(currentStage === 2){
        $('#conversation04').text("相手は まもっている。");
    } else if(currentStage === 3){
        $('#conversation05').text("相手は まもっている。");
    } else if(currentStage === 4){
        $('#conversation06').text("相手は まもっている。");
    } else if(currentStage === 5){
        $('#conversation07').text("相手は まもっている。");
    }
}






// こうげき動作
function attackModel() {
    const playerAttack = 10 * playerCharge;
    const applicantAttack = randomNumber();
    if (applicantAttack === 0) {
        applicantHandAttack();
        // 応募者はこうげき
        // playerの攻撃処理
        applicantHp = applicantHp - playerAttack;
        // applicantの攻撃処理
        playerHp = playerHp - (10 * applicantCharge);
        applicantCharge = 1;
        console.log("＝応募者はこうげき＝")
    } else if (applicantAttack === 1) {
        applicantHandCharge();
        // 応募者はたくわえる
        // playerの攻撃処理
        applicantHp = applicantHp - playerAttack;
        // 応募者の処理
        applicantCharge = applicantCharge * 1.5;
        console.log("＝応募者はたくわえる＝")
    } else {
        applicantHandDefense();
        // 応募者はまもる
        // playerの攻撃は無効化される
        console.log("＝応募者はまもる＝")
    }
    playerCharge = 1;
    validationHp();
    validationJudge();
    console.log("プレイヤーチャージは" + playerCharge + "です");
    console.log("プレイヤーの体力は" + playerHp + "です");
    console.log("応募者チャージは" + applicantCharge + "です");
    console.log("応募者の体力は" + applicantHp + "です");
}

// たくわえる動作
function chargeModel() {
    playerCharge = playerCharge * 1.5;
    const applicantAttack = randomNumber();
    if (applicantAttack === 0) {
        applicantHandAttack();
        // 応募者はこうげき
        // applicantの攻撃処理
        playerHp = playerHp - (10 * applicantCharge);
        applicantCharge = 1;
        console.log("＝応募者はこうげき＝")
    } else if (applicantAttack === 1) {
        applicantHandCharge();
        // 応募者はたくわえる
        // 応募者の処理
        applicantCharge = applicantCharge * 1.5;
        console.log("＝応募者はたくわえる＝")
    } else {
        applicantHandDefense();
        // 応募者はまもる
        // playerの攻撃は無効化される
        console.log("＝応募者はまもる＝")
    }
    validationHp();
    validationJudge();
    console.log("プレイヤーチャージは" + playerCharge + "です");
    console.log("プレイヤーの体力は" + playerHp + "です");
    console.log("応募者チャージは" + applicantCharge + "です");
    console.log("応募者の体力は" + applicantHp + "です");

}

function defenseModel() {
    const applicantAttack = randomNumber();
    if (applicantAttack === 0) {
        applicantHandAttack();
        // 応募者はこうげき
        // applicantの攻撃処理
        applicantCharge = 1;
        console.log("＝応募者はこうげき＝")
    } else if (applicantAttack === 1) {
        applicantHandCharge();
        // 応募者はたくわえる
        applicantCharge = applicantCharge * 1.5;
        console.log("＝応募者はたくわえる＝")
    } else {
        applicantHandDefense();
        // 応募者はまもる
        // playerの攻撃は無効化される
        console.log("＝応募者はまもる＝")
    }
    console.log("プレイヤーチャージは" + playerCharge + "です");
    console.log("プレイヤーの体力は" + playerHp + "です");
    console.log("応募者チャージは" + applicantCharge + "です");
    console.log("応募者の体力は" + applicantHp + "です");
}



// playerはこうげき
$('#attack03').click(function () {
    attackModel();
})
$('#attack04').click(function () {
    attackModel();
})
$('#attack05').click(function () {
    attackModel();
})
$('#attack06').click(function () {
    attackModel();
})
$('#attack07').click(function () {
    attackModel();
})



//playerはたくわえる
$('#charge03').click(function () {
    chargeModel();
})
$('#charge04').click(function () {
    chargeModel();
})
$('#charge05').click(function () {
    chargeModel();
})
$('#charge06').click(function () {
    chargeModel();
})
$('#charge07').click(function () {
    chargeModel();
})

// playerはまもる
$('#defense03').click(function () {
    defenseModel();
    })
$('#defense04').click(function () {
    defenseModel();
    })
$('#defense05').click(function () {
    defenseModel();
    })
$('#defense06').click(function () {
    defenseModel();
    })
$('#defense07').click(function () {
    defenseModel();
    })
