/*jshint esversion: 6 */
(function() {

    var fonts = [
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
    ];

    var emojis = [
        "( ͡° ͜ʖ ͡°)",
        "( ͡ᵔ ͜ʖ ͡ᵔ )",
        "( ͠° ͜ʖ °)",
        "(⌐■ ͜ʖ■)",
        "ᕕ( ᐛ )ᕗ",
        "¯\\_(ツ)_/¯",
        "ฅ^•ﻌ•^ฅ",
        "(ง •̀_•́)ง",
        "(ง'̀-'́)ง",
        "(• ε •)",
        "(~˘▾˘)~",
        "˙ ͜ʟ˙"
    ];

    var LLNode = function(value, searchID, prevNode, nextNode) {
        /*
        Linked List Node
        */

        this.v = value;
        this.sid = searchID;

        this.p = prevNode;
        this.n = nextNode;
    };

    var LinkedList = function() {

        this.nodes = [];

    };

    LinkedList.prototype = {

        add: function(node) {
            this.nodes.push(node);
        },

        getByIndex: function(i) {
            return this.nodes[i];
        },

        getBySearch: function(value) {
            return this.nodes.find(function(node) {
                if (node.sid) {
                    /*
                    a node's value can be anything. In the case of fonts, the nodes' values are objects which contain the name and css properties. the "value" variable in this case, is only searching for the name of the font, which it won't get if it's only evaluating the node's v property. Nodes that have objects as values will have a property that I will want to use for searchiing, but the name of that property will be different for each group of objects. The node's sid (SearchID) property is the name of that property.

                    For example, node fonts, which have a sid of "name", will evaluate to this:
                    return node.v.name === value;
                    */
                    return node.v[node.sid] === value;
                }
                else {
                    return node.v === value;
                }
            });
        },

        getFirst: function() {
            return this.getByIndex(0);
        },

        getLast: function() {
            return this.getByIndex(this.len() - 1);
        },

        setPrev: function(node, nodeToAttach) {
            node.p = nodeToAttach;
        },

        setNext: function(node, nodeToAttach) {
            node.n = nodeToAttach;
        },

        setVal: function(node, value) {
            node.v = value;
        },

        len: function() {
            return this.nodes.length;
        },

    };

    function buildLLNL(arr, searchID) {
        /*
        builds a list of connected LLNodes
        */

        var llist = new LinkedList();
        llist.add(new LLNode(arr[0], searchID));

        for (let i = 1; i < arr.length-1; i++) {
            var prevNode = llist.getByIndex(i-1);
            var value = arr[i];
            var currentNode = new LLNode(value, searchID, prevNode);

            llist.setNext(prevNode, currentNode);
            llist.add(currentNode);
        }

        /*
        Connect the first node to the last node.
        This way, when the user reaches the end of the list, it will loop around
        */
        var lastNode = new LLNode(arr[arr.length-1], searchID, llist.getLast(), llist.getFirst());
        llist.setPrev(llist.getFirst(), lastNode);
        llist.setNext(llist.getLast(), lastNode);
        llist.add(lastNode);

        return llist;
    }

    var fontll = buildLLNL(fonts, "name");
    var emojill = buildLLNL(emojis);

    var currentFont = fontll.getFirst();
    var currentEmoji = emojill.getFirst();

    function buildOption(select, name, css) {
        /*
        Adds option to select list.
        */

        var op = document.createElement("option");

        op.innerHTML = name;
        if (css) op.value = css;

        $(select).append(op);
    }

    function cycleFont(direction) {
        /*
        cycle through available fonts and apply to text area
        */

        if (direction === "l") {
            currentFont = currentFont.p;
        }
        else if (direction === "r") {
            currentFont = currentFont.n;
        }

        setFont(currentFont.v.css);

        $("#fonts").val(currentFont.v.css);
    }

    function cycleEmoji(direction) {
        /*
        cycle through available emojis and apply to text area
        */

        if (direction === "l") {
            currentEmoji = currentEmoji.p;
        }
        else if (direction === "r") {
            currentEmoji = currentEmoji.n;
        }
        setEmoji(currentEmoji.v);

        $("#emojis").val(currentEmoji.v);
    }

    function setFont(font) {
        /*
        Set font family for emoji
        */

        $("#emoji").css("font-family", font);
    }

    function setEmoji(em) {
        /*
        Set emoji to text area
        */

        $("#emoji").text(em);
    }

    function init() {
        /*
        Add fonts and emojis to select lists.
        Set current font and emoji
        */

        fonts.forEach(v => {
            buildOption("#fonts", v.name, v.css);
        });

        emojis.forEach(v => {
            buildOption("#emojis", v);
        });

        setFont(currentFont.v.css);
        setEmoji(currentEmoji.v);
    }

    init();

    // attach listeners
    $("#fonts").change(function() {
        var font = $("#fonts option:selected").text();

        /*
        Find LLNode of the font and make it the currentFont.
        This way, the program can cycle to the next or previous font correctly
        */
        currentFont = fontll.getBySearch(font);
        setFont(currentFont.v.css);
    });

    $("#emojis").change(function() {
        var em = $("#emojis option:selected").text();

        /*
        Find LLNode of the emoji and make it the currentFont.
        This way, the program can cycle to the next or previous emoji correctly 
        */
        currentEmoji = emojill.getBySearch(em);
        setEmoji(currentEmoji.v);
    });

    $("#fontsL").click(function() {
        cycleFont("l");
    });

    $("#fontsR").click(function() {
        cycleFont("r");
    });

    $("#emojisL").click(function() {
        cycleEmoji("l");
    });

    $("#emojisR").click(function() {
        cycleEmoji("r");
    });

})();
