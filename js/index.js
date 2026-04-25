document.addEventListener('DOMContentLoaded', function () {
    const dengruann = document.getElementById('dengruann');
    dengruann.addEventListener('click', function () {
        const zhanghao = document.getElementById('zhanghao').value;
        const mima = document.getElementById('mima').value;
        if (zhanghao === '2007913' && mima === '2007503') {
            window.location.href = 'body.html';
        } else {
            alert('生日输入错啦～再试试❤️');
        }
    })
});