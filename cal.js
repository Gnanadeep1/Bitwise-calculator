let input = document.getElementById('inp');
let btns = document.querySelectorAll('button');
let btnsarr = Array.from(btns);
let string = "";
function forbackspace(str) {
    const oprs = ['>>>', 'tws', 'set', 'zers', '+', '-', '*', '/', '%', '&', '|', '^', '~', '<<', '>>'];
    for (let i of oprs) {
        if (str.endsWith(i)) {
            return str.slice(0, -i.length);
        }
    }
    return str.slice(0, -1);
}
function setibits(n) {
    let c = 0;
    while (n > 0) {
        if (n & 1)
            c += 1;
        n = (n >> 1);
    }
    return c;
}
function countbits(n) {
    let c = 0;
    while (n > 0) {
        c += 1;
        n = (n >> 1);
    }
    return c;


}
function check(n) {
    return (n & (n - 1)) === 0;
}
btnsarr.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let txt = e.target.innerHTML;
        if (txt == 'BS') {
            if (string.length > 0) {
                string = forbackspace(string);
                input.value = string;
            }
        }
        else if (txt == 'AC') {
            string = "";
            input.value = string;
        }
        else if (txt == '=') {
            string = string.replace(/&/g, ' & ')
                .replace(/\|/g, ' | ')
                .replace(/\^/g, ' ^ ')
                .replace(/~/g, ' ~ ')
                .replace(/<</g, ' << ')
                .replace(/>>/g, ' >> ')
                .replace(/>>>/g, ' >>> ');

            if (string.includes('set')) {
                if (string.length > 0) {
                    let num = parseInt(string);
                    if (!isNaN(num)) {
                        let cntSetBits = setibits(num);
                        input.value = cntSetBits.toString();
                        string = cntSetBits.toString();
                    } else {
                        input.value = "Error";
                    }
                    // input.value=string;

                }

            }
            else if (string.includes('zers')) {
                if (string.length > 0) {
                    let num1 = parseInt(string);
                    if (!isNaN(num1)) {
                        let cntbits = countbits(num1);
                        let cntSetBits = setibits(num1);
                        let ans1 = cntbits - cntSetBits;

                        input.value = ans1.toString();
                        string = ans1.toString();
                    } else {
                        input.value = "Error";
                    }

                }
            }
            else if (string.includes('pow2')) {
                if (string.length > 0) {
                    let num2 = parseInt(string);
                    if (!isNaN(num2)) {
                        let vall = check(num2);
                        if (vall) {
                            let ans2 = 'Power of 2'
                            input.value = ans2.toString();
                            string = ans2.toString();
                        }
                        else {
                            let ans3 = 'Not power of 2';
                            input.value = ans3.toString();
                            string = ans3.toString();
                        }

                    }

                }
            }
            else {
                try {
                    string = eval(string);
                    input.value = string;
                }
                catch (e) {
                    input.value = 'Invalid Input';
                }
            }
        }
        // else if (txt === 'set') {

        // }

        else {
            if (txt === '&amp;') {
                txt = '&';
            }



            string += txt;
            input.value = string;
        }

        // console.log(e.target.innerHTML)
    });

    // console.log(btnsarr);
})

let bitsi = document.getElementById('btnn');
bitsi.addEventListener('click', () => {
    if (bitsi.value == 'BITCI') {
        let addbutton = document.getElementById('add');
        addbutton.classList.add('flip');
        setTimeout(() => {
            addbutton.innerHTML = '\u0026';
            addbutton.classList.remove('flip');

        }, 1000);
        let subbutton = document.getElementById('sub');
        subbutton.classList.add('flip');
        setTimeout(() => {
            subbutton.innerHTML = '|';
            subbutton.classList.remove('flip');

        }, 1000);
        let multbutton = document.getElementById('mult');
        multbutton.classList.add('flip');
        setTimeout(() => {
            multbutton.innerHTML = '^';
            multbutton.classList.remove('flip');

        }, 1000);
        let divbutton = document.getElementById('div');
        divbutton.classList.add('flip');
        setTimeout(() => {
            divbutton.innerHTML = '~';
            divbutton.classList.remove('flip');

        }, 1000);

        document.querySelector('.container').style.width = 'auto';
        input.classList.add('expanded');
        let extrabt1 = document.getElementById('extrabtn1');
        let extrabt2 = document.getElementById('extrabtn2');
        let extrabt3 = document.getElementById('extrabtn3');
        let extrabt4 = document.getElementById('extrabtn4');
        let extrabt5 = document.getElementById('extrabtn5');

        extrabt1.innerHTML = '<button class="num">&lt;&lt;</button>';
        extrabt2.innerHTML = '<button class="num">&gt;&gt;</button>';
        extrabt5.innerHTML = '<button class="num">pow2</button>';
        extrabt3.innerHTML = '<button class="num">set</button>';
        extrabt4.innerHTML = '<button class="num">zers</button>';


        let newbtns = document.querySelectorAll('.extrabtns button');
        newbtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let txt1 = e.target.innerHTML;
                if (txt1 === '&lt;&lt;') {
                    txt1 = '<<';
                }
                else if (txt1 === '&gt;&gt;') {
                    txt1 = '>>';
                }
                // else if (txt1 === '&gt;&gt;&gt;') {
                //     txt1 = '>>>';
                // }

                string += txt1;
                input.value = string;
            });
        });




        setTimeout(() => {
            bitsi.value = 'CALCI';

        }, 1000);

    }
    else {
        let addbutton = document.getElementById('add');
        addbutton.classList.add('flip');
        setTimeout(() => {
            addbutton.innerHTML = '+';
            addbutton.classList.remove('flip');

        }, 1000);
        let subbutton = document.getElementById('sub');
        subbutton.classList.add('flip');
        setTimeout(() => {
            subbutton.innerHTML = '-';
            subbutton.classList.remove('flip');

        }, 1000);
        let multbutton = document.getElementById('mult');
        multbutton.classList.add('flip');
        setTimeout(() => {
            multbutton.innerHTML = '*';
            multbutton.classList.remove('flip');

        }, 1000);
        let divbutton = document.getElementById('div');
        divbutton.classList.add('flip');
        setTimeout(() => {
            divbutton.innerHTML = '/';
            divbutton.classList.remove('flip');

        }, 1000);

        document.querySelector('.container').style.width = 'auto';
        input.classList.remove('expanded');
        let extrabt1 = document.getElementById('extrabtn1').innerHTML = '';
        let extrabt2 = document.getElementById('extrabtn2').innerHTML = '';
        let extrabt3 = document.getElementById('extrabtn3').innerHTML = '';
        let extrabt4 = document.getElementById('extrabtn4').innerHTML = '';
        let extrabt5 = document.getElementById('extrabtn5').innerHTML = '';

        setTimeout(() => {
            bitsi.value = 'BITCI';

        }, 1000);

    }

});
