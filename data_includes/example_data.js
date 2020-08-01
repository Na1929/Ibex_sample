var shuffleSequence = seq("intro","intro2","intro3","intro4","setcounter","practicezero",sepWith("sep",seq("practice","postpractice")),sepWith("sep",seq(rshuffle(anyOf("T","L","Ts","Ls"),"goodfiller"),"code")));
var practiceItemTypes = ["practicezero","practice"];
var progressBarText ="進行状況";
var pageTitle ="日本語の調査";
var sendingResultsMessage ="結果を送信中です";
// Random code generator
var str = 'abcdefghijklmnopqrstuvwxyz' + '0123456789'+ '0123456789'+ '0123456789';
var randomcode = '';
for(var i = 0; i < 10; i++) {
    randomcode += str[Math.floor(Math.random() * str.length)];
};


var completionMessage = "お疲れ様でした。確認コードは"+randomcode+"です。このコードをコピーし、Lancers画面の入力フォームへペーストすると作業完了です。";



var defaults = [
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5","6","7"],
        presentAsScale: true,
        instructions: "数字をクリックするか、数字キーを押してください。",
        leftComment: "不自然", rightComment: "自然"
    },
        "SeparatorZ", {
            //        transfer: 1000,
            //        normalMessage: "Please wait for the next sentence.",
            //        errorMessage: "Wrong. Please wait for the next sentence."
            transfer: 800,
            normalMessage: "正解です",
            errorMessage: "残念，不正解です"
        },
        "DashedSentenceNoSpace", {
            mode: "self-paced reading",
        },
        "Question", {
            showNumbers: false,
            randomOrder: false,
            as: ["Y: はい", "N: いいえ"],
            instructions: "YかNどちらかのキーを押すかマウスでクリックしてください",
            autoFirstChar: true,
        },
        "Message", {
            hideProgressBar: true,
            continueMessage: "次へ進む"
        },
     "Form", {
            hideProgressBar: true,
            continueOnReturn: true,
            saveReactionTime: true,
         consentRequired: true,
         continueMessage: "次へ進む"}
    
    
       
        ];
   

