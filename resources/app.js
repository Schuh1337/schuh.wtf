document.addEventListener('keydown', function (e) {
    if (
        (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.key === 'p') ||
        (e.ctrlKey && e.key === 'g') ||
        (e.ctrlKey && e.key === 'f') ||
        (e.ctrlKey && e.key === 'o') ||
        (e.ctrlKey && e.key === 'j') ||
        (e.ctrlKey && e.key === 'h') ||
        (e.ctrlKey && e.key === 'd') ||
        (e.ctrlKey && e.key === '+') ||
        (e.ctrlKey && e.key === '-')
    ) {
        e.preventDefault();
    }
});

(function () {
    let SSWZ = function () {
        this.keyScrollHandler = function (e) {
            if (e.ctrlKey) {
                e.preventDefault();
                return false;
            }
        };
    };
    if (window === top) {
        let sswz = new SSWZ();
        window.addEventListener('wheel', sswz.keyScrollHandler, { passive: false });
    }
})();

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

var msg = '';
msg = 'Schuh' + msg;
var position = 0;

function scrolltitle() {
    document.title = msg.substring(position, msg.length) + msg.substring(0, position);
    position++;
    if (position > msg.length) position = 0;
    window.setTimeout(scrolltitle, 400);
}

scrolltitle();

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('audio');
    var volumeSlider = document.getElementById('volumeSlider');

    audio.volume = volumeSlider.value;

    volumeSlider.addEventListener('input', function () {
        audio.volume = this.value;
    });
});

function startAudio() {
    var audio = document.getElementById('audio');
    var pressToEnter = document.getElementById('pressToEnter');

    audio.play();

    pressToEnter.style.transition = 'opacity 1s ease';
    pressToEnter.style.opacity = 0;

    setTimeout(() => {
        pressToEnter.style.display = 'none';
    }, 1000);
}

function updateVolume() {
    var audio = document.getElementById('audio');
    var volumeSlider = document.getElementById('volumeSlider');
    audio.volume = volumeSlider.value;
}

(function () {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ut, st = Date.now();

    function initShaders(gl, vertexShaderId, fragmentShaderId) {
        let vertexEl = document.querySelector(vertexShaderId);
        let vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexEl.text);
        gl.compileShader(vertexShader);

        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            debugger;
        }

        let fragmentEl = document.querySelector(fragmentShaderId);
        let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentEl.text);
        gl.compileShader(fragmentShader);

        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            debugger;
        }

        let program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        return program;
    }

    function initGraphics() {
        gl = canvas.getContext('webgl');
        let width = canvas.width;
        let height = canvas.height;
        gl.viewport(0, 0, width, height);

        let program = initShaders(gl, '#sv', '#sf');
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, 1, -1, -1, 1, -1, 1, 1]),
            gl.STATIC_DRAW,
        );

        let vPosition = gl.getAttribLocation(program, 'vPosition');
        gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(vPosition);

        ut = gl.getUniformLocation(program, 'time');
        let resolution = new Float32Array([canvas.width, canvas.height]);
        gl.uniform2fv(gl.getUniformLocation(program, 'resolution'), resolution);
    }

    function render() {
        gl.uniform1f(ut, (Date.now() - st) / 1000);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        requestAnimationFrame(render);
    }

    initGraphics();
    render();
})();
