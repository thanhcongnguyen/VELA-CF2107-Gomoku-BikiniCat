let vitri_X = [];
let vitri_Y = [];
let banco = [[a,b][c,d]];
console.log(banco[0][1]);


let flag_X = false;
let flag_Y = false;

//luot danh dau tien
function setFirtPerson(name){
    switch(name){
        case 'X': {
            flag_X = true;
            break;
        }
        case 'Y': {
            flag_Y = true;
            break;
        }
        default:{
            console.error("Ten nguoi choi ko hop le");
        }
    }
}

//set vi tri vua danh cua nguoi choi
function setvitri(x,y){
    // kiem tra vi tri ton tai chua
    if(banco[x][y] == true){
        console.error("O nay da duoc danh, chon o khac")
        return false;
    }

    banco[x][y] = true;
    return true;
}

//danh
function danh(name, x, y){
    // check turn
    if(!getTurn()){
        console.error("Ong tham qua, luot danh cua nguoi khac");
        return;
    }
    // set vi tri -> chua done
    if(setvitri(x,y)){
        // luu vi danh vao o nho cua nguoi do
        setOnho(name, x, y);
    }
    // check win, not win => next turn
    if(checkWin()){
        console.info("Game over, {} is winner", name);
        return;
    }
    // next lady
    setNextTurn(name);
}

// set o nho da danh
function setOnho(name, x, y){
    if(name == 'X'){
        vitri_X.push({x,y});
    }else{
        vitri_Y.push({x,y});
    }
}

// set next turn
function setNextTurn(currentName){
    if(currentName == 'X'){
        flag_X = false;
        flag_Y = true;
    }else{
        flag_Y = false;
        flag_X = true;
    }

}

//tra ve luot choi tiep theo
function getTurn(name){
    switch(name){
        case 'X':{
            if(flag_X == true){
                return true;
            }
        }
        case 'Y':{
            if(flag_Y == true){
                return true;
            }
        }
        default:{
            return false;
        }
    }
};

//kiem tra endgame
function checkWin(name){

}

function _5inArowOfX(){
    let last_x = vitri_X[vitri_X.length].x;
    let last_y = vitri_[vitri_X.length].y;
    // 5 ngang
    if(banco[x-1][y])

    // check 5 doc

    // check 5 cheo chinh

    // check 5 cheo phu
}