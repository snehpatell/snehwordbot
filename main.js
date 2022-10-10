//Sneh's Wordle Bot Attempt

function bestWord(list){
    var letterList = []
    var NewletterList = []

    for (i1=0; i1<list.length; i1++){
        for(q1=0; q1<list[i1].length; q1++){
            letterList.push(list[i1].charAt(q1) + (q1+1))
        }
    }

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v1) => (v1 === value && count++));
        return count;
    }

    function removeItem(array, item) {
        var i = array.length;
    
        while (i--) {
            if (array[i] === item) {
                array.splice(array.indexOf(item), 1);
            }
        }
    }    

    for (j1=0; j1<letterList.length; j1++){
        NewletterList.push(letterList[j1].charAt(0))
        if(j1 == letterList.length){
            for(j3=0; j3<letterList.length; j3++){
                removeItem(letterList, letterList[j3])
            }
        }
    }
    
    NewletterList.sort()
    console.log(NewletterList)
    console.log(letterList)

    var NewletterList2 = [...new Set(NewletterList)]

    var length = NewletterList2.length
    var width = 2
    var numberList = new Array(length)
    for (var i = 0; i < length; i++) {
        numberList[i] = new Array(width)
    }

    for(t1=0; t1<NewletterList2.length; t1++){
        var letter = document.createElement("div")
        letter.setAttribute("style", "visibility: hidden")
        letter.setAttribute("id", NewletterList2[t1])

        letter.innerHTML = getOccurrence(NewletterList, NewletterList2[t1])
        document.body.appendChild(letter)
        removeItem(NewletterList, NewletterList2[t1])

        var test1 = String(NewletterList2[t1])
        console.log(test1)
        var test = document.getElementById(test1).innerHTML
        console.log(test)

        numberList[t1][0] = parseInt(test)
        numberList[t1][1] = NewletterList2[t1] 
        
    }
    numberList.sort(sortFunction);

    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }
    var info = document.getElementById("info")
    info.innerHTML = ""

    console.log(numberList)
    info.innerHTML = info.innerHTML + numberList + "<br>"

    var letter1 = numberList[(numberList.length - 1)][1]
    var letter2 = numberList[(numberList.length - 2)][1]
    var letter3 = numberList[(numberList.length - 3)][1]
    var letter4 = numberList[(numberList.length - 4)][1]

    info.innerHTML = info.innerHTML + "All words with 4 of the best letters:" + "<br>"
    console.log("All words with 4 of the best letters:")
    for(o=0;o<corWord.length;o++){
        if(corWord[o].includes(letter1) && corWord[o].includes(letter2) && corWord[o].includes(letter3) && corWord[o].includes(letter4)){
            console.log(corWord[o])
            info.innerHTML = info.innerHTML + corWord[o] + ", "
        }
    }
    info.innerHTML = info.innerHTML + "<br>"
    info.innerHTML = info.innerHTML + "All words with 3 of the best letters:" + "<br>"
    console.log("All words with 3 of the best letters:")
    for(o=0;o<corWord.length;o++){
        if(corWord[o].includes(letter1) && corWord[o].includes(letter2) && corWord[o].includes(letter3)){
            console.log(corWord[o])
            info.innerHTML = info.innerHTML + corWord[o] + ", "
        }
    }

    //s5: 3913
    //e4: 2005
    //o4: 1814
    //a2: 1955
    //r3: 1034
    //e2: 1384
    //p1: 716
    //s1: 1195
    //t1: 666

    //mates; pares

    //s: 5981
    //e: 5422
    //a: 5007
    //o: 3675
    //r: 3257

    //SOARE = BEST
}

function removeWords(){
    var box1 = document.getElementById("box1").value
    var box2 = document.getElementById("box2").value
    var box3 = document.getElementById("box3").value
    var box4 = document.getElementById("box4").value
    var box5 = document.getElementById("box5").value
    var word = box1.charAt(1) + box2.charAt(1) + box3.charAt(1) + box4.charAt(1) + box5.charAt(1)

    function isIsogram (str) {
        return !/(.).*\1/.test(str);
    }

    function checker(a){
        var newcorWord = []
        if(a.charAt(0) == "G"){
            for(b = 0; b<corWord.length; b++){
                if(corWord[b].charAt((parseInt(a.charAt(2)))-1) === a.charAt(1)){
                    newcorWord.push(corWord[b])
                }
            }
            corWord.length = 0
            corWord.push.apply(corWord, newcorWord)
            newcorWord.length = 0
        } else if (a.charAt(0) == "Y") {
            for(b = 0; b<corWord.length; b++){
                if(corWord[b].charAt((parseInt(a.charAt(2)))-1) === a.charAt(1)){
                    newcorWord.push(corWord[b])
                    
                }
            }
            for(h=0; h<newcorWord.length; h++){
                corWord = corWord.filter(corWord => corWord !== newcorWord[h])
            }
            newcorWord.length = 0
            for(v=0; v<corWord.length; v++){
                if (corWord[v].includes(a.charAt(1))){
                    newcorWord.push(corWord[v])
                }
            }
            corWord.length = 0
            corWord.push.apply(corWord, newcorWord)
            newcorWord.length = 0
        } else if (a.charAt(0) == "B") {
            for(b = 0; b<corWord.length; b++){
                if(corWord[b].includes(a.charAt(1))){
                    newcorWord.push(corWord[b])
                }
            }
            for(h=0; h<newcorWord.length; h++){
                corWord = corWord.filter(corWord => corWord !== newcorWord[h])
            }
            newcorWord.length = 0
        } else {
            alert("You formated wrong: L")
            document.location.reload()
        }
    }

    checker(box1)
    checker(box2)
    checker(box3)
    checker(box4)
    checker(box5)

    console.log(corWord)
    bestWord(corWord)
}

var wordleWord = corWord[Math.floor(Math.random()*corWord.length)]
var alphebet = ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a",]
var position = 0
var rowposition = 0

//alert(wordleWord)
document.addEventListener("keydown", (enta) => {
    if (enta.keyCode == 8 || enta.keyCode == 13 || (enta.keyCode >= 65 && enta.keyCode <= 90)) {
        if(enta.keyCode >= 65 && enta.keyCode <= 90){
            var letterIn = alphebet[90-enta.keyCode]
        }
        if(position < 5 && enta.keyCode != 8){
            document.getElementById("W" + rowposition + "box" + position).innerHTML = letterIn.toUpperCase()
            position++
            console.log(position)
        }
        if(position > 0 && enta.keyCode == 8){
            document.getElementById("W" + rowposition + "box" + (position - 1)).innerHTML = ""
            position--
            console.log(position)
        }
        if(position == 5 && enta.keyCode == 13){
            var guessWord = document.getElementById("W" + rowposition + "box0").innerHTML + document.getElementById("W" + rowposition + "box1").innerHTML + document.getElementById("W" + rowposition + "box2").innerHTML + document.getElementById("W" + rowposition + "box3").innerHTML + document.getElementById("W" + rowposition + "box4").innerHTML
            var mainguessWord = guessWord
            var mainguessWord = mainguessWord.toLowerCase()

            var temp1 = 0
            var tempList = []

            for(o=0;o<allWords.length;o++){
                tempList.push(allWords[o])
            }
            for(o=0;o<corWord.length;o++){
                tempList.push(corWord[o])
            }
            
            for(i=0; i<tempList.length;i++){
                console.log(i)
                if(String(mainguessWord) == tempList[i]){
                    temp1++
                }
            }
            if(temp1 == 1){
                alert("Word is in the Wordle list!")
                
                guessWord = guessWord.toLowerCase()
                guessWord = guessWord.split('')

                for(k=0;k<guessWord.length;k++){
                    if(guessWord[k] == wordleWord.charAt(k)){
                        //green
                        var updatedPos = k
                        document.getElementById("W" + rowposition + "box" + updatedPos).style.backgroundColor = "#6AAA64"
                        document.getElementById("W" + rowposition + "box" + updatedPos).style.border = "1px solid #6AAA64"

                    } else if (wordleWord.includes(guessWord[k])){
                        //yellow
                        var updatedPos = k
                        document.getElementById("W" + rowposition + "box" + updatedPos).style.backgroundColor = "#C9B458"
                        document.getElementById("W" + rowposition + "box" + updatedPos).style.border = "1px solid #C9B458"
                    } else {
                        //grey
                        var updatedPos = k
                        document.getElementById("W" + rowposition + "box" + updatedPos).style.backgroundColor = "#787C7E"
                        document.getElementById("W" + rowposition + "box" + updatedPos).style.border = "1px solid #787C7E"
                    }
                }
                if(mainguessWord == wordleWord){
                    alert("Nice Job! You Win.")
                }
                rowposition++
                position = 0
            } else {
                alert("The Word Is Not In The Wordle List. Try Again")
            }
        }
    }
});

function inList(mlp) {
    for(w=0;w<corWord.length;w++){
        if(String(mlp) == corWord[w]){
            alert("W")
        }
    }
}
