let count = 10;
const countElement = document.querySelector(".count");
const result = document.querySelector(".result");

countElement.innerText = count;

function decrementCount(){
    count--;
    countElement.innerText = count;
}

function computerHand(){
    const hands = ["가위", "바위", "보"];
    return hands[Math.floor(Math.random()*hands.length)];
}



function doGame(event){
    if(count === 0){
        alert("게임이 종료되었습니다.");
        return
    }
    //가위 바위 보 버튼중하나를 클릭
    const userButton = event.target.dataset.hand;
    //남은횟수를 감소시킨다 ,, 화면에 반영
    decrementCount();
    //컴퓨터의 결과 가위바위보중 하나를 랜덤으로 받아온다
    const computerButton = computerHand();
    console.log(`유저 : ${userButton} / 컴퓨터: ${computerButton}`)
    //사용자의 결과와 컴퓨터의 결과를 비교해서 승패를 알려준다
    //승패를 result에 출력
    //플레이어나 컴퓨터의 결과판에 숫자를 더해준다.
    if (userButton === computerButton) {
        result.innerText = "무승부";
    } else if ((userButton === "가위" && computerButton === "보") || 
                (userButton === "바위" && computerButton === "가위") ||
                (userButton === "보" && computerButton === "바위")) {
        result.innerText = "사용자가 이겼습니다";
        document.querySelector('.user .score').innerText++;
    } else {
        result.innerText = "컴퓨터가 이겼습니다";
        document.querySelector('.computer .score').innerText++;
    }
}
