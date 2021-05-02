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
        $('#conversation01').text("このWEBサービスはセカイを大きく変えるかもしれない！");
        chapter01_story = chapter01_story + 1;
    }else if( chapter01_story == 2){
        $('#conversation01').text("しかし、技術が足りない。あのとき、ジーズアカデミーに通っていればよかったのだが。");
        chapter01_story = chapter01_story + 1;
    } else if (chapter01_story == 3) {
        $('#conversation01').text("悩んでいてもしかたない、募集を出してチームを作ろう！！");
        chapter01_story = chapter01_story + 1;
    } else {
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


// chapter03
let chapter03_story = 1;
$('#next_text_btn_03').click(function () {
    console.log(chapter03_story);
    if (chapter03_story == 1) {
        $('#talker03').text("");
        $('#conversation03').text("");
        $('.start_occupation').show();
        chapter03_story = chapter03_story + 1;
    }else if( chapter03_story == 2){
        $('.start_occupation').hide();
        $('#cp_03_choice_box').show();
    } else {
    }
    console.log(chapter03_story);
});