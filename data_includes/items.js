var items = [
         ["sep", "SeparatorZ", { }],
         ["setcounter", "__SetCounter__", { }],
       //intro.html: general instruction, demographic collection and consent form
         ["intro", "Form", {
             html: { include: "intro.html" },
             validators: {
             age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
             }
         } ],
         //intro2.html: about SPR
         ["intro2", "Message", {
             html: { include: "intro2.html" },
         } ],
         //intro3.html: about comprehension questions
         ["intro3", "Message", {
             html: { include: "intro3.html" },
         } ],
         //intro4.html: about a break
         ["intro4", "Message", {
             html: { include: "intro4.html" },
         } ],

         //Practice items
         ["practicezero", "DashedSentenceNoSpace", {s: "この 文は 実験に 慣れて いただく ための 練習文 です。"}],
         ["practice", "DashedSentenceNoSpace", {s: "この文も 練習文で、 質問が あとに 続きます。"},
          "Question", {hasCorrect: 0,
               q: "今のところ大丈夫ですか？（Yキーを押してみてください）"}],
         ["practice", "DashedSentenceNoSpace", {s: "少年が 間違って カレーに 砂糖を 入れた。"},
          "Question", {hasCorrect: 0, q: "少年は砂糖を入れた"}],
         ["practice", "DashedSentenceNoSpace", {s: "柔道部員は 道場で 寝ていた 野良猫を 外に 出した。"},
          "Question", {hasCorrect: 1, q: "柔道部員は寝ていた"}],
         ["practice", "DashedSentenceNoSpace", {s: "若い インストラクターが 根気よく 指導した 女性は 実は 京都で 勤めている。"},
          "Question", {hasCorrect: 1, q: "インストラクターが指導したのは男性である "}],
         ["practice", "DashedSentenceNoSpace", {s: "漫画家が 締め切りが 近いにも かかわらず ネットゲームに 熱中していたと 編集者は 愚痴を こぼした"},
          "Question", {hasCorrect: 0, q: "漫画家はネットゲームに熱中した"}],

         // Announce the end of the practice
         ["postpractice", "Message", {
             html: { include: "postpractice.html" },
         }],

         //Random code is shown after the experiment
         ["code","Question",{q: ""+randomcode+"", timeout: 10}],

// Item
//Theme-object x Acc-1st
[["T",1], "DashedSentenceNoSpace", {s: "職人が ペンキを 壁に 塗ったので 汚れは 少し 薄くなった。"}, "Question", {q: "ペンキが壁に塗られた", hasCorrect:0}],
[["T",2], "DashedSentenceNoSpace", {s: "パン屋が バターを パンに 塗ったので サンドイッチは おいしく 仕上がった。"}, "Question", {q: "パンがおいしく焼けた", hasCorrect:1}],
[["T",3], "DashedSentenceNoSpace", {s: "ネイリストが マニキュアを 爪に 塗ったので 女性客は 上機嫌で 帰った。"}, "Question", {q: "マニキュアが爪に塗られた", hasCorrect:0}],
[["T",4], "DashedSentenceNoSpace", {s: "メイク係が ルージュを 唇に 塗ったので アイドルは 気分が 高揚した。"}, "Question", {q: "メイク係の気分が高揚した", hasCorrect:1}],

//Location-object x Acc-1st
[["L",1], "DashedSentenceNoSpace", {s: "職人が 壁を ペンキで 塗ったので 汚れは 少し 薄くなった。"}, "Question", {q: "ペンキが薄くなった", hasCorrect:1}],
[["L",2], "DashedSentenceNoSpace", {s: "パン屋が パンを バターで 塗ったので サンドイッチは おいしく 仕上がった。"}, "Question", {q: "バターがパンに塗られた", hasCorrect:0}],
[["L",3], "DashedSentenceNoSpace", {s: "ネイリストが 爪を マニキュアで 塗ったので 女性客は 上機嫌で 帰った。"}, "Question", {q: "ネイリストは上機嫌だった", hasCorrect:1}],
[["L",4], "DashedSentenceNoSpace", {s: "メイク係が 唇を ルージュで 塗ったので アイドルは 気分が 高揚した。"}, "Question", {q: "ルージュが唇に塗られた", hasCorrect:0}],

//Theme-object x Acc-2nd
[["Ts",1], "DashedSentenceNoSpace", {s: "職人が 壁に ペンキを 塗ったので 汚れは 少し 薄くなった。"}, "Question", {q: "ペンキが壁に塗られた", hasCorrect:0}],
[["Ts",2], "DashedSentenceNoSpace", {s: "パン屋が パンに バターを 塗ったので サンドイッチは おいしく 仕上がった。"}, "Question", {q: "パンがおいしく焼けた", hasCorrect:1}],
[["Ts",3], "DashedSentenceNoSpace", {s: "ネイリストが 爪に マニキュアを 塗ったので 女性客は 上機嫌で 帰った。"}, "Question", {q: "マニキュアが爪に塗られた", hasCorrect:0}],
[["Ts",4], "DashedSentenceNoSpace", {s: "メイク係が 唇に ルージュを 塗ったので アイドルは 気分が 高揚した。"}, "Question", {q: "メイク係の気分が高揚した", hasCorrect:1}],

//Location-object x Acc-2nd
[["Ls",1], "DashedSentenceNoSpace", {s: "職人が ペンキで 壁を 塗ったので 汚れは 少し 薄くなった。"}, "Question", {q: "ペンキが薄くなった", hasCorrect:1}],
[["Ls",2], "DashedSentenceNoSpace", {s: "パン屋が バターで パンを 塗ったので サンドイッチは おいしく 仕上がった。"}, "Question", {q: "バターがパンに塗られた", hasCorrect:0}],
[["Ls",3], "DashedSentenceNoSpace", {s: "ネイリストが マニキュアで 爪を 塗ったので 女性客は 上機嫌で 帰った。"}, "Question", {q: "ネイリストは上機嫌だった", hasCorrect:1}],
[["Ls",4], "DashedSentenceNoSpace", {s: "メイク係が ルージュで 唇を 塗ったので アイドルは 気分が 高揚した。"}, "Question", {q: "ルージュが唇に塗られた", hasCorrect:0}],

//Goodfiller
["goodfiller","DashedSentenceNoSpace",{s: "お母さんが ベビーカーを 公園まで 押したらしいと 近所の人が ひそひそ 噂した。"}, "Question", {q: "お母さんはベビーカーを押した", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "お客さんが DVDを 棚へ 戻したのを 店員は 不審だと 思った。"}, "Question", {q: "店員はDVDを戻した", hasCorrect:1}],

                 ];
