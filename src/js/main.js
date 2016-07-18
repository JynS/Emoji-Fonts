/*jshint esversion: 6 */
(function() {
    var d = new Detector();


    var Lenny = function() {

        this.fonts = [
            // base web safe fonts
            {'Andale Mono': '"Andale Mono",AndaleMono,monospace'},
            {'Arial': 'Arial,"Helvetica Neue",Helvetica,sans-serif'},
            {'Arial Black': '"Arial Black","Arial Bold",Gadget,sans-serif'},
            {'Arial Narrow': '"Arial Narrow",Arial,sans-serif'},
            {'Arial Rounded MT Bold': '"Arial Rounded MT Bold","Helvetica Rounded",Arial,sans-serif'},
            {'Avant Garde': '"Avant Garde",Avantgarde,"Century Gothic",CenturyGothic,AppleGothic,sans-serif'},
            {'Baskerville': 'Baskerville,"Baskerville Old Face","Hoefler Text",Garamond,"Times New Roman",serif'},
            {'Big Caslon': '"Big Caslon","Book Antiqua","Palatino Linotype",Georgia,serif'},
            {'Bodoni MT': '"Bodoni MT",Didot,"Didot LT STD","Hoefler Text",Garamond,"Times New Roman",serif'},
            {'Book Antiqua': '"Book Antiqua",Palatino,"Palatino Linotype","Palatino LT STD",Georgia,serif'},
            {'Brush Script MT': '"Brush Script MT",cursive'},
            {'Calibri': 'Calibri,Candara,Segoe,"Segoe UI",Optima,Arial,sans-serif'},
            {'Calisto MT': '"Calisto MT","Bookman Old Style",Bookman,"Goudy Old Style",Garamond,"Hoefler Text","Bitstream Charter",Georgia,serif'},
            {'Cambria': 'Cambria,Georgia,serif'},
            {'Candara': 'Candara,Calibri,Segoe,"Segoe UI",Optima,Arial,sans-serif'},
            {'Century Gothic': '"Century Gothic",CenturyGothic,AppleGothic,sans-serif'},
            {'Comic Sans MS': '"Comic Sans MS", cursive, sans-serif'},
            {'Consolas': 'Consolas,monaco,monospace'},
            {'Copperplate': 'Copperplate,"Copperplate Gothic Light",fantasy'},
            {'Courier': 'Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace'},
            {'Courier New': '"Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace'},
            {'Didot': 'Didot,"Didot LT STD","Hoefler Text",Garamond,"Times New Roman",serif'},
            {'Franklin Gothic Medium': '"Franklin Gothic Medium","Franklin Gothic","ITC Franklin Gothic",Arial,sans-serif'},
            {'Futura': 'Futura,"Trebuchet MS",Arial,sans-serif'},
            {'Garamond': 'Garamond,Baskerville,"Baskerville Old Face","Hoefler Text","Times New Roman",serif'},
            {'Geneva': 'Geneva,Tahoma,Verdana,sans-serif'},
            {'Georgia': 'Georgia,Times,"Times New Roman",serif'},
            {'Gill Sans': '"Gill Sans","Gill Sans MT",Calibri,sans-serif'},
            {'Goudy Old Style': '"Goudy Old Style",Garamond,"Big Caslon","Times New Roman",serif'},
            {'Helvetica': '"Helvetica Neue",Helvetica,Arial,sans-serif'},
            {'Hoefler Text': '"Hoefler Text","Baskerville Old Face",Garamond,"Times New Roman",serif'},
            {'Impact': 'Impact,Haettenschweiler,"Franklin Gothic Bold",Charcoal,"Helvetica Inserat","Bitstream Vera Sans Bold","Arial Black","sans serif"'},
            {'Lucida Bright': '"Lucida Bright",Georgia,serif'},
            {'Lucida Console': '"Lucida Console","Lucida Sans Typewriter",monaco,"Bitstream Vera Sans Mono",monospace'},
            {'Lucida Grande': '"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Verdana,sans-serif'},
            {'Lucida Sans Typewriter': '"Lucida Sans Typewriter","Lucida Console",monaco,"Bitstream Vera Sans Mono",monospace'},
            {'Monaco': 'monaco,Consolas,"Lucida Console",monospace'},
            {'Optima': 'Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif'},
            {'Palatino': 'Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif'},
            {'Papyrus': 'Papyrus,fantasy'},
            {'Perpetua': 'Perpetua,Baskerville,"Big Caslon","Palatino Linotype",Palatino,"URW Palladio L","Nimbus Roman No9 L",serif'},
            {'Rockwell': 'Rockwell,"Courier Bold",Courier,Georgia,Times,"Times New Roman",serif'},
            {'Rockwell Extra Bold': '"Rockwell Extra Bold","Rockwell Bold",monospace'},
            {'Segoe UI': '"Segoe UI",Frutiger,"Frutiger Linotype","Dejavu Sans","Helvetica Neue",Arial,sans-serif'},
            {'Tahoma': 'Tahoma,Verdana,Segoe,sans-serif'},
            {'Times New Roman': 'TimesNewRoman,"Times New Roman",Times,Baskerville,Georgia,serif'},
            {'Trebuchet MS': '"Trebuchet MS","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Tahoma,sans-serif'},
            {'Verdana': 'Verdana,Geneva,sans-serif'},

            // google fonts
            {'Ewert': '"Ewert", cursive'},
            {'Press Start 2P': '"Press Start 2P", cursive'},
            {'Vast Shadow': '"Vast Shadow", cursive'}
        ];

        this.emojis = [
            "( ͡° ͜ʖ ͡°)",
            "( ͡ᵔ ͜ʖ ͡ᵔ )",
            "( ͠° ͜ʖ °)",
            "(⌐■ ͜ʖ■)",
            "ᕕ( ᐛ )ᕗ",
            "¯\\_(ツ)_/¯",
            "ฅ^•ﻌ•^ฅ",
            "(ง •̀_•́)ง",
            "(ง'̀-'́)ง",
            "ಥ‿ಥ",
            "ʕ•ᴥ•ʔ",
            "˙ ͜ʟ˙"
        ];
    };

    Lenny.prototype = {

        buildOption: function(select, name, css) {
            /*
            Adds option to select list. When clicked, the font will be applied to the Lenny
            */

            var op = document.createElement("option");

            op.innerHTML = name;
            if (css) op.value = css;

            $(select).append(op);
        },

        setFont: function(font) {
            /*
            set font family for Lenny
            */

            $("#lenny").css("font-family", font);
        },

        setEmoji: function(em) {
            $("#lenny").text(em);
        },

        init: function() {
            /*
            Add base fonts to select list
            */

            var self = this;

            self.fonts.forEach(v => {
                var name = Object.keys(v);
                var css = v[name];
                self.buildOption("#fonts", name, css);
            });

            self.emojis.forEach(v => {
                self.buildOption("#emojis", v);
            });
        }
    };

    // initialize Lenny
    var l = new Lenny();
    l.init();

    l.setFont($($("#fonts option")[0]).text());
    l.setEmoji($($("#emojis option")[0]).text());

    // attach listeners
    $("#fonts").change(function() {
        var font = $("#fonts option:selected").val();
        l.setFont(font);
    });

    $("#emojis").change(function() {
        var em = $("#emojis option:selected").text();
        l.setEmoji(em);
    });

})();
