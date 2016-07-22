/*jshint esversion: 6 */
(function() {

    var Lenny = function() {

        this.fonts = [
            // base web safe fonts
            {'name': 'Andale Mono',
            'css': '"Andale Mono",AndaleMono,monospace'},
            {'name': 'Arial',
            'css': 'Arial,"Helvetica Neue",Helvetica,sans-serif'},
            {'name': 'Arial Black',
            'css': '"Arial Black","Arial Bold",Gadget,sans-serif'},
            {'name': 'Arial Narrow',
            'css': '"Arial Narrow",Arial,sans-serif'},
            {'name': 'Arial Rounded MT Bold',
            'css': '"Arial Rounded MT Bold","Helvetica Rounded",Arial,sans-serif'},
            {'name': 'Avant Garde',
            'css': '"Avant Garde",Avantgarde,"Century Gothic",CenturyGothic,AppleGothic,sans-serif'},
            {'name': 'Baskerville',
            'css': 'Baskerville,"Baskerville Old Face","Hoefler Text",Garamond,"Times New Roman",serif'},
            {'name': 'Big Caslon',
            'css': '"Big Caslon","Book Antiqua","Palatino Linotype",Georgia,serif'},
            {'name': 'Bodoni MT',
            'css': '"Bodoni MT",Didot,"Didot LT STD","Hoefler Text",Garamond,"Times New Roman",serif'},
            {'name': 'Book Antiqua',
            'css': '"Book Antiqua",Palatino,"Palatino Linotype","Palatino LT STD",Georgia,serif'},
            {'name': 'Brush Script MT',
            'css': '"Brush Script MT",cursive'},
            {'name': 'Calibri',
            'css': 'Calibri,Candara,Segoe,"Segoe UI",Optima,Arial,sans-serif'},
            {'name': 'Calisto MT',
            'css': '"Calisto MT","Bookman Old Style",Bookman,"Goudy Old Style",Garamond,"Hoefler Text","Bitstream Charter",Georgia,serif'},
            {'name': 'Cambria',
            'css': 'Cambria,Georgia,serif'},
            {'name': 'Candara',
            'css': 'Candara,Calibri,Segoe,"Segoe UI",Optima,Arial,sans-serif'},
            {'name': 'Century Gothic',
            'css': '"Century Gothic",CenturyGothic,AppleGothic,sans-serif'},
            {'name': 'Comic Sans MS',
            'css': '"Comic Sans MS", cursive, sans-serif'},
            {'name': 'Consolas',
            'css': 'Consolas,monaco,monospace'},
            {'name': 'Copperplate',
            'css': 'Copperplate,"Copperplate Gothic Light",fantasy'},
            {'name': 'Courier',
            'css': 'Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace'},
            {'name': 'Courier New',
            'css': '"Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace'},
            {'name': 'Didot',
            'css': 'Didot,"Didot LT STD","Hoefler Text",Garamond,"Times New Roman",serif'},
            {'name': 'Franklin Gothic Medium',
            'css': '"Franklin Gothic Medium","Franklin Gothic","ITC Franklin Gothic",Arial,sans-serif'},
            {'name': 'Futura',
            'css': 'Futura,"Trebuchet MS",Arial,sans-serif'},
            {'name': 'Garamond',
            'css': 'Garamond,Baskerville,"Baskerville Old Face","Hoefler Text","Times New Roman",serif'},
            {'name': 'Geneva',
            'css': 'Geneva,Tahoma,Verdana,sans-serif'},
            {'name': 'Georgia',
            'css': 'Georgia,Times,"Times New Roman",serif'},
            {'name': 'Gill Sans',
            'css': '"Gill Sans","Gill Sans MT",Calibri,sans-serif'},
            {'name': 'Goudy Old Style',
            'css': '"Goudy Old Style",Garamond,"Big Caslon","Times New Roman",serif'},
            {'name': 'Helvetica',
            'css': '"Helvetica Neue",Helvetica,Arial,sans-serif'},
            {'name': 'Hoefler Text',
            'css': '"Hoefler Text","Baskerville Old Face",Garamond,"Times New Roman",serif'},
            {'name': 'Impact',
            'css': 'Impact,Haettenschweiler,"Franklin Gothic Bold",Charcoal,"Helvetica Inserat","Bitstream Vera Sans Bold","Arial Black","sans serif"'},
            {'name': 'Lucida Bright',
            'css': '"Lucida Bright",Georgia,serif'},
            {'name': 'Lucida Console',
            'css': '"Lucida Console","Lucida Sans Typewriter",monaco,"Bitstream Vera Sans Mono",monospace'},
            {'name': 'Lucida Grande',
            'css': '"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Verdana,sans-serif'},
            {'name': 'Lucida Sans Typewriter',
            'css': '"Lucida Sans Typewriter","Lucida Console",monaco,"Bitstream Vera Sans Mono",monospace'},
            {'name': 'Monaco',
            'css': 'monaco,Consolas,"Lucida Console",monospace'},
            {'name': 'Optima',
            'css': 'Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif'},
            {'name': 'Palatino',
            'css': 'Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif'},
            {'name': 'Papyrus',
            'css': 'Papyrus,fantasy'},
            {'name': 'Perpetua',
            'css': 'Perpetua,Baskerville,"Big Caslon","Palatino Linotype",Palatino,"URW Palladio L","Nimbus Roman No9 L",serif'},
            {'name': 'Rockwell',
            'css': 'Rockwell,"Courier Bold",Courier,Georgia,Times,"Times New Roman",serif'},
            {'name': 'Rockwell Extra Bold',
            'css': '"Rockwell Extra Bold","Rockwell Bold",monospace'},
            {'name': 'Segoe UI',
            'css': '"Segoe UI",Frutiger,"Frutiger Linotype","Dejavu Sans","Helvetica Neue",Arial,sans-serif'},
            {'name': 'Tahoma',
            'css': 'Tahoma,Verdana,Segoe,sans-serif'},
            {'name': 'Times New Roman',
            'css': 'TimesNewRoman,"Times New Roman",Times,Baskerville,Georgia,serif'},
            {'name': 'Trebuchet MS',
            'css': '"Trebuchet MS","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Tahoma,sans-serif'},
            {'name': 'Verdana',
            'css': 'Verdana,Geneva,sans-serif'},

            // google fonts
            {'name': 'Ewert',
            'css': '"Ewert", cursive'},
            {'name': 'Press Start 2P',
            'css': '"Press Start 2P", cursive'},
            {'name': 'Vast Shadow',
            'css': '"Vast Shadow", cursive'}
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
            Add fonts and emojis to select lists
            */

            var self = this;

            self.fonts.forEach(v => {
                self.buildOption("#fonts", v.name, v.css);
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
