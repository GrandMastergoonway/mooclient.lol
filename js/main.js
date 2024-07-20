const title = "@Guilded.lol";
let index = 0;
let addingText = true;

function updateTitle() {
    if (addingText) {
        if (index < title.length) {
            document.title = title.slice(0, index + 1);
            index++;
            setTimeout(updateTitle, 300);
        } else {
            addingText = false;
            setTimeout(updateTitle, 500);
        }
    } else {
        if (index > 0) {
            document.title = title.slice(0, index);
            index--;
            setTimeout(updateTitle, 300);
        } else {
            addingText = true;
            setTimeout(updateTitle, 1000);
        }
    }
}

updateTitle();

function createDot() {
    const dot = document.createElement('div');
    dot.className = 'decorative-dot';
    dot.style.left = Math.random() * window.innerWidth + 'px';
    dot.style.top = '-10px';

    document.body.appendChild(dot);

    let velocityY = 5 + Math.random() * 5;

    function update() {
        const currentTop = dot.offsetTop;
        dot.style.top = currentTop + velocityY + 'px';

        if (currentTop >= window.innerHeight - 5) {
            clearInterval(interval);
            dot.style.top = window.innerHeight - 5 + 'px';
            dot.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(dot);
            }, 2000);
        }
    }

    const interval = setInterval(update, 10);
}

setInterval(createDot, 100);
