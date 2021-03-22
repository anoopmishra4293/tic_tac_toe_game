console.log("script")
var player = "X"
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var flag = 0
function capture_event(e) {
    // console.log("event=",e)
    let id = e.target.id
    console.log("id =", id)
    if(arr[id]!=0 || flag==1){
        return
    }
    document.getElementById(id).innerHTML = player
    arr[id] = player
    status = game_satus(player)
    console.log(status)
    if (status == 0) {
        document.getElementById("status").innerHTML = player + " won the match"
        flag=1
    }

    if (status == 1) {
        document.getElementById("status").innerHTML = "Match draw. Try again..."
        flag=1
    }
    if (status == 2) {
        document.getElementById("status").innerHTML = "Continue Match... "
    }
    if (player == 'X') {
        player = 'O'
    } else {
        player = 'X' 
    }
}
console.log(arr)



function game_satus(player) {
    // 012,345,678,036.147,258,048,246
    console.log(arr)
    if (arr[0] == player && arr[1] == player && arr[2] == player) {
        return 0
    }
    if (arr[3] == player && arr[4] == player && arr[5] == player) {
        return 0
    }
    if (arr[6] == player && arr[7] == player && arr[8] == player) {
        return 0
    }
    if (arr[0] == player && arr[3] == player && arr[6] == player) {
        return 0
    }
    if (arr[1] == player && arr[4] == player && arr[7] == player) {
        return 0
    }
    if (arr[2] == player && arr[5] == player && arr[8] == player) {
        return 0
    }
    if (arr[0] == player && arr[4] == player && arr[8] == player) {
        return 0
    }
    if (arr[2] == player && arr[4] == player && arr[6] == player) {
        return 0
    }
    for (i in arr) {
        if (arr[i] == 0) {
            return 2
        } 
        // else if (arr[i] != 0) {
        //     return 1
        // }
    }
    return 1
}

function restart_game() {
    player = "X"
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    flag = 0

    for (i=0;i<9;i++){
        x=document.getElementById(String(i))
        x.innerHTML = ""
    }
}