const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// fill listeners 
fill.ondragstart = function() {
    setTimeout(() => {

        this.className += ' hold';
        this.className = 'invisible'

    }, 0);


}

fill.ondragend = function() {
    this.className = 'fill'

}

// empties 
for (var empty of empties) {
    empty.ondragover = function(e) {
        e.preventDefault()
    };
    empty.ondragenter = function(e) {
        // console.log('enter')
        e.preventDefault()
        this.className += ' hovered'
    };
    empty.ondragleave = function() {
        // console.log('leave')
        this.className = 'empty'

    };
    empty.ondrop = function() {
        // console.log('drop')
        this.className = 'empty';
        this.append(fill);

    }
}