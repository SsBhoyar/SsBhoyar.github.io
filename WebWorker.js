let y = 0;

function timeCount() {
    y++;
    postMessage(y);
    setTimeout("timeCount()" , 0.01);
}

timeCount();