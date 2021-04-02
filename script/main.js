const area = document.getElementById('area');
let move = 0, result = '';
const content_wrapper = document.getElementById('content');
const modal_result = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btn_close = document.getElementById('btn-close');

area.addEventListener('click', e => {
    if(e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        move++;
        check();
    }
})
const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6], 
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6],
    ];
    for(i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
            result = 'Крестики';
            prepare_Result(result);
        } else if ( boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') {
            result = 'Нолики';
            prepare_Result(result);
        }
    }
}

const prepare_Result = winner => {
    content_wrapper.innerHTML = `Победили ${winner} !`;
    modal_result.style.display = 'block';
}
const close_Modal = () => {
    modal_result.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', close_Modal);
btn_close.addEventListener('click', close_Modal);