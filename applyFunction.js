let person = {
    인사 : function(){ 
        console.log(this.name + "안녕ㅋ");
    }
}

let person2 = {
    name : "손흥민"
}

person.인사.apply(person2);

// 배열형태로 apply하기 ----------------------------
// apply와 call모두 합칠 수 있지만 apply만 배열형태로 합치기 가능

function 더하기(a,b,c){
    console.log(a+b+c);
}

var 어레이 = [10,20,30];
더하기(어레이[0],어레이[1],어레이[2]);

더하기(...어레이); //배열의 값들을 하나의 값으로 합쳐서 계산함.