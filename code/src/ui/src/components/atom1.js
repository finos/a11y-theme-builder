
// Define css
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
.divclass {
    color: red;
}
.editorclass {
    color: green;
}
`;
document.getElementsByTagName('head')[0].appendChild(style);

const name = "My Atom1";

// Define atom
let Atom1 = {
    
    name: "My Atom1",

    setStyles: function(styles) {
        // Change css
    },

    render: function() {
        return `
        <div class="divclass">
            I am an atom renderer ${name} from HTML!
        </div>
        `;
    },
    
    editor: function() {
        return `
        <div class="editorclass">
            I am an atom editor ${name} from HTML!
        </div>
        `;
    }
}

exports.Atom1 = Atom1

