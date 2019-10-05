// inspired by https://github.com/jlengstorf/honkify/blob/master/index.js
(function (da) {
    var honk = {
        audio: new Audio('https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3'),
        silent: true,
        honk: () => honk.silent || honk.audio.play()
    };

    var keys = [],
        code = '38,38,40,40,37,39,37,39,66,65',
        codeKeys = code.split(',').filter((v, i, s) => s.indexOf(v) === i);

    da('keyup', (ev) => {
        if (codeKeys.indexOf(ev.keyCode.toString()) === -1) {
            keys = [];
            return;
        }

        keys.push(ev.keyCode);
        if (keys.toString().indexOf(code) >= 0) {
            honk.silent = !honk.silent;
            keys = [];

            if (honk.honk() !== true) {
                // todo: add graphics
            }
        }
    });

    da('click', (ev) => {
        if (honk.silent) return;

        ev.preventDefault();

        if ((a = ev.target.closest('a'))) setTimeout(() => { location = a.getAttribute('href'); }, 750);

        honk.honk();
    });
}(document.addEventListener))
