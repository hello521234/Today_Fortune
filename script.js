function start() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('form').style.display = 'block';
}

function next() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;

    if (name && year && month && day) {
        document.getElementById('form').style.display = 'none';
        document.getElementById('fortune').style.display = 'block';
    } else {
        alert("이름과 생년월일을 모두 입력해주세요.");
    }
}

function getFortune(type) {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;

    const fortunes = {
        '연애운': ['오늘은 사랑의 기운이 넘칩니다.', '오래된 인연과의 재회가 있을 수 있습니다.'],
        '재물운': ['재정적으로 좋은 소식이 있을 것입니다.', '뜻밖의 수익이 예상됩니다.'],
        '학업운': ['오늘은 집중력이 높아지는 날입니다.', '좋은 성과를 얻을 수 있을 것입니다.']
    };

    const randomFortune = fortunes[type][Math.floor(Math.random() * fortunes[type].length)];
    document.getElementById('fortuneResult').innerText = `이름: ${name}\n출생: ${year}년 ${month}월 ${day}일\n오늘의 운세 (${type}): ${randomFortune}`;
    
    document.getElementById('fortune').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

function restart() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('form').style.display = 'none';
    document.getElementById('fortune').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    
    document.getElementById('name').value = '';
    document.getElementById('year').selectedIndex = 0;
    document.getElementById('month').selectedIndex = 0;
    document.getElementById('day').selectedIndex = 0;
}
