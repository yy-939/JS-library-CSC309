/*This is a js using programmer library*/
console.log("-----------------------------------")
console.log("Example js using programmer library")


// const missprogrammer = new Programmer()
// missprogrammer.makeInfoBox(target, missprogrammer.type) // log(must at least provide with a def)

/* If */
const target = document.querySelector('.if-block')
const ifprogrammer = new Programmer('if') // must at least provided with a def input
function ifExample(target){
    // Info
    const infobox = ifprogrammer.makeInfoBox(target, ifprogrammer.type)
    // Code
    const codebox = ifprogrammer.makeCodeBox(target, ifprogrammer.type)
    const codingbutton = ifprogrammer.makeResultBox(ifprogrammer.type, ifprogrammer.codebox.answer)
}
ifExample(target)


/* Loop */
const target2 = document.querySelector('.loop-block')
const loopprogrammer = new Programmer('loop')
function loopExample(target2){
    // Info
    const infobox2 = loopprogrammer.makeInfoBox(target2, loopprogrammer.type)
    // Code
    const codebox2 = loopprogrammer.makeCodeBox(target2, loopprogrammer.type)
    const codingbutton2 = loopprogrammer.makeResultBox(loopprogrammer.type, loopprogrammer.codebox.answer)

}

loopExample(target2)


/* User-defined */    
const target3 = document.querySelector('.user-block')
const userprogrammer = new Programmer(
    'user', 'an explanation',
    ['example header', 'example line1\n', 'example line2\n', 'example line3\n'], 
    [['keyword1'], ' syntax line1\n',['keyword2'], '     syntax line2\n'],
    [['keyword1'], ' question1'],
    [['4'], ' templet line1\n', '    templet line2\n', ['4'],'   templet line3\n'],
    ['ans1', 'ans2'])

function userExample(target3){
    const infobox3 = userprogrammer.makeInfoBox(target3, userprogrammer.type)
    // userprogrammer.changeExplanation("new explanation")
    // userprogrammer.changeExample(['new example header','new example line1\n'])
    // userprogrammer.changeSyntax([['keyword1'], '   syntax line1\n'])
    const codebox3 = userprogrammer.makeCodeBox(target3, userprogrammer.type)
    const codingbutton3 = userprogrammer.makeResultBox(userprogrammer.type, userprogrammer.codebox.answer)
    // userprogrammer.changeQuestion(['   question1\n', ['keyword1']])
    
    // userprogrammer.codebox.answer = null; // empty answer to check if can modify templet only
    // userprogrammer.changeTemplet(['templet line1\n', []])
    
    // userprogrammer.changeExercise({'code':['templet line1\n', ['6']], 'answer':['newans']})
}

userExample(target3)