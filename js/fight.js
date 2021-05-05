プレイヤーの体力
let plyerHP = 100;
let applicantHp = 100;

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

// playerはこうげき
$('#attack').click(function () {
    const playerAttack = 10 * playerCharge;
    const applicantAttack = randomNumber();
    if (applicantAttack === 0) {
        // 応募者はこうげき
        // playerの攻撃処理
        applicantHp = applicantHp - playerAttack;
        // applicantの攻撃処理
        plyerHP = plyerHP - (10 * applicantCharge);
        applicantCharge = 1;
        console.log("＝応募者はこうげき＝")
    } else if(applicantAttack === 1){
        // 応募者はたくわえる
        // playerの攻撃処理
        applicantHp = applicantHp - playerAttack;
        // 応募者の処理
        applicantCharge = applicantCharge * 1.5;
        console.log("＝応募者はたくわえる＝")
    } else {
        // 応募者はまもる
        // playerの攻撃は無効化される
        console.log("＝応募者はまもる＝")
    }
    playerCharge = 1;
    console.log("プレイヤーチャージは" + playerCharge + "です");
    console.log("プレイヤーの体力は" + plyerHP + "です");
    console.log("応募者チャージは" + applicantCharge + "です");
    console.log("応募者の体力は" + applicantHp + "です");
})


//playerはたくわえる
$('#charge').click(function () {
    playerCharge = playerCharge * 1.5;
    const applicantAttack = randomNumber();
    if (applicantAttack === 0) {
        // 応募者はこうげき
        // applicantの攻撃処理
        plyerHP = plyerHP - (10 * applicantCharge);
        applicantCharge = 1;
        console.log("＝応募者はこうげき＝")
    } else if(applicantAttack === 1){
        // 応募者はたくわえる
        // 応募者の処理
        applicantCharge = applicantCharge * 1.5;
        console.log("＝応募者はたくわえる＝")
    } else {
        // 応募者はまもる
        // playerの攻撃は無効化される
        console.log("＝応募者はまもる＝")
    }
    console.log("プレイヤーチャージは" + playerCharge + "です");
    console.log("プレイヤーの体力は" + plyerHP + "です");
    console.log("応募者チャージは" + applicantCharge + "です");
    console.log("応募者の体力は" + applicantHp + "です");
})

// playerはまもる
$('#defense').click(function () {
    const applicantAttack = randomNumber();
    if (applicantAttack === 0) {
        // 応募者はこうげき
        // applicantの攻撃処理
        applicantCharge = 1;
        console.log("＝応募者はこうげき＝")
    } else if(applicantAttack === 1){
        // 応募者はたくわえる
        applicantCharge = applicantCharge * 1.5;
        console.log("＝応募者はたくわえる＝")
    } else {
        // 応募者はまもる
        // playerの攻撃は無効化される
        console.log("＝応募者はまもる＝")
    }
    console.log("プレイヤーチャージは" + playerCharge + "です");
    console.log("プレイヤーの体力は" + plyerHP + "です");
    console.log("応募者チャージは" + applicantCharge + "です");
    console.log("応募者の体力は" + applicantHp + "です");
})





