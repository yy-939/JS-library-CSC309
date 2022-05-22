"use strict";
(function(global, document){ 
console.log('----------------------------------------')
console.log('Creating and loading programmer library')

class _Info{
    // provide explanation templet 
    constructor(def, explanation, example, syntax) {   
		this.def = def;
		this.explanation = explanation;
        this.example = example;  // Array, keyword is wrapped in an array
        this.syntax = syntax;  // Array, keyword is wrapped in an array
	}
}

class _Code{
    // provide coding templet
    constructor(question, code_templet, answer) {
        this.question = question; // Array, keyword is wrapped in an array
        this.code_templet = code_templet;  // Array, keyword is wrapped in an array
        this.answer = answer; // Array
	}
}

/******** Helper Functions ***********/
/*** Info box ***/
function _classifyInfo(infobox){
    if (infobox.def == null){
        console.log("must at least provide a definition")
        return;
    }
    let userDef = infobox.def.toString()
    userDef = userDef.toLowerCase()

    // Explanation
        if (infobox.explanation == null){
            if (userDef.includes("if")){
                infobox.explanation = 'Tests a given condition and returns one value for a TRUE result and another value for a FALSE result'
            }
            else if (userDef.includes("loop")){
                infobox.explanation = 'Loops can execute a block of code a number of times. We can use for loop or while loop to iterate an item. With the for loop we can execute a set of statements, once for each item in items. With the while loop we can execute a set of statements as long as a condition is true.'  
            }
            //else if ...
        }

    // Example
        if (infobox.example == null){
            if (userDef.includes("if")){
                const example = document.createElement('div')
                const header = document.createElement('h4')
                header.innerText = "For example, the follow will print ' variable is 10 ' since the if condition is satisfied"
                header.style = "font-family: 'Open Sans';"
                const code = document.createElement('div')
                code.style = 'background-color: #ccc;margin-top: 5%;margin-left: 25%;width: fit-content;padding: 5px;'
                let string = ''
                let strings = [
                "variable = 10\n", 
                "if variable == 10:\n", 
                "  print('variable is 10')\n", "else:\n",
                "  print('variable is not 10')\n"]  
                const pre = document.createElement('PRE')

                for (let i=0; i<strings.length; i++){
                    string += strings[i]
                }
                example.appendChild(header)
                example.appendChild(code)
                code.appendChild(pre)
                pre.innerText = string
                infobox.example = example;
                }    
            else if (userDef.includes("loop")){
                const example = document.createElement('div')
                const header = document.createElement('h4')
                header.innerText = "For example, the following will print each element in students ('paul', 'lily', and 'jim')"
                header.style = "font-family: 'Open Sans';"
                const code = document.createElement('div')
                code.style = 'background-color: #ccc;margin-top: 5%;margin-left: 25%;width: fit-content;padding: 5px;'
                let string = ''
                const strings = ["students = ['paul', 'lily', 'jim']\n", 
                "for student in students:\n", 
                "  print(student)"]  
                for (let i=0; i<strings.length; i++){
                    string += strings[i]
                }
                const pre = document.createElement('PRE')

                example.appendChild(header)
                example.appendChild(code)
                code.appendChild(pre)
                pre.innerText = string;

                infobox.example = example;
            }
        }
        else{
            if (!Array.isArray(infobox.example)){
                console.log("Example must be an array")
                return;
            }
            const example = document.createElement('div')
            example.className = 'example'
            const header = document.createElement('h4')
            header.innerText = infobox.example[0]
            header.style = "font-family: 'Open Sans';"
            const code = document.createElement('div')
            code.style = 'background-color: #ccc;margin-top: 5%;margin-left: 25%;width: fit-content;padding: 5px;'
            let string = ''
            for (let i=1; i<infobox.example.length; i++){
                string += infobox.example[i]
            }  
            const pre = document.createElement('PRE')

            example.appendChild(header)
            example.appendChild(code)
            code.appendChild(pre)
            pre.innerText = string
            infobox.example = example;

        }

    // Syntax
        if (infobox.syntax == null){
            if (userDef.includes("if")){
                const syntax = document.createElement('div')
                const format = document.createElement('p')
                format.innerText = 'Format:'
                format.style = "text-decoration: underline; font-family: 'Open Sans', sans-serif; font-size:large;"
                const code = document.createElement('div')
                code.style = 'background-color: white; padding:10px; border-radius: 5px;'
                const code1 = document.createElement('code')
                code1.innerText='if'
                const span1 = document.createElement('span')
                span1.innerText = ' condition expression:'
                const p1 = document.createElement('p')
                p1.innerText = 'result when condition is satisfied'
                p1.style = 'margin-left:20px'
                const code2 = document.createElement('code')
                code2.innerText='else:'
                const p2 = document.createElement('p')
                p2.innerText = 'result when condition is NOT satisfied'
                p2.style = 'margin-left:20px'
                syntax.appendChild(format)
                syntax.appendChild(code)
                code.appendChild(code1)
                code.appendChild(span1)
                code.appendChild(p1)
                code.appendChild(code2)
                code.appendChild(p2)
                infobox.syntax = syntax;

            }
            else if (userDef.includes("loop")){
                const syntax = document.createElement('div')
                const format1 = document.createElement('p')
                format1.innerText = 'For Loop Format:'
                const codearea1 = document.createElement('div')
                codearea1.style = 'background-color: white; padding:10px; border-radius: 5px;'
                format1.style = "text-decoration: underline; font-family: 'Open Sans', sans-serif; font-size:large;"
                const code1 = document.createElement('code')
                code1.innerText='for'
                const span1 = document.createElement('span')
                span1.innerText = ' item '
                const code2 = document.createElement('code')
                code2.innerText='in'
                const span2 = document.createElement('span')
                span2.innerText = ' items:'
                const p1 = document.createElement('p')
                p1.innerText = 'do something...'
                p1.style = 'margin-left:20px'

                const format2 = document.createElement('p')
                format2.innerText = 'While Loop Format:'
                format2.style = "text-decoration: underline; font-family: 'Open Sans', sans-serif; font-size:large;"
                const codearea2 = document.createElement('div')
                codearea2.style = 'background-color: white; padding:10px; border-radius: 5px;'
                const code3 = document.createElement('code')
                code3.innerText='while'
                const span3 = document.createElement('span')
                span3.innerText = ' condition expression:'
                const p2 = document.createElement('p')
                p2.innerText = 'do something...'
                p2.style = 'margin-left:20px'

                syntax.appendChild(format1)
                syntax.appendChild(codearea1)
                codearea1.appendChild(code1)
                codearea1.appendChild(span1)
                codearea1.appendChild(code2)
                codearea1.appendChild(span2)
                codearea1.appendChild(p1)

                syntax.appendChild(format2)
                syntax.appendChild(codearea2)
                codearea2.appendChild(code3)
                codearea2.appendChild(span3)
                codearea2.appendChild(p2)

                infobox.syntax = syntax;
            }
            //else if ...
        }
        else{
            if (!Array.isArray(infobox.syntax)){
                console.log("Syntax must be an array")
                return;
            }
            const syntax = document.createElement('div')
            syntax.className = 'syntax'
            const format = document.createElement('p')
            format.innerText = 'Format:'
            format.style = "text-decoration: underline; font-family: 'Open Sans', sans-serif; font-size:large;"
            const code = document.createElement('div')
            code.className = 'syntaxCode'
            code.style = 'background-color: white; padding:10px; border-radius: 5px;'
            syntax.appendChild(format)
            syntax.appendChild(code)
            for (let i=0; i<infobox.syntax.length; i++){
                if (Array.isArray(infobox.syntax[i])){
                    let code1 = document.createElement('code')
                    code1.innerText= infobox.syntax[i][0]
                    code.append(code1)
                }
                else{
                    const span = document.createElement('span')
                    span.innerText = infobox.syntax[i]
                    code.append(span)
                }
            }
            infobox.syntax = syntax;
        }
    }

/*** Code box ***/
function _classifycoding(infobox, codebox){
    if (infobox.def == null){
        console.log("must at least provide a definition")
        return;
    }
    
    let userDef = infobox.def.toString()
    userDef = userDef.toLowerCase()
        
    // Question   
        if (codebox.question == null){
            const question =  document.createElement('p')
            question.className = 'question'
            question.style = 'background-color: white; padding:10px; border-radius: 5px; margin:5px; font-size:large;'
            if (userDef.includes("if")){
                const questioncode1 = document.createElement('code')
                questioncode1.innerText = 'apple'
                const questioncode2 = document.createElement('code')
                questioncode2.innerText = 'Hello'
                const questioncode3 = document.createElement('code')
                questioncode3.innerText = 'Bye'
                const t1 = document.createTextNode("Print ")
                const t2 = document.createTextNode(" if word ")
                const t3 = document.createTextNode(" contains character 'a', else print ")
                const list = [t1, questioncode2, t2, questioncode1, t3, questioncode3]
                for (let i =0; i<list.length; i++){
                    question.appendChild(list[i])
                }
                codebox.question = question
            }
            else if (userDef.includes("loop")){
                const questioncode = document.createElement('code')
                questioncode.innerText = 'fruit'
                const t1 = document.createTextNode("Loop through the items in the ")
                const t2 = document.createTextNode(" list.")
                question.appendChild(t1)
                question.appendChild(questioncode)
                question.appendChild(t2)
                codebox.question = question
            }
            //else if ...
        }
        else{
            if (!Array.isArray(codebox.question)){
                console.log("Question must be an array")
                return;
            }
            const question =  document.createElement('p')
            question.className = 'question'
            question.style = 'background-color: white; padding:10px; border-radius: 5px; margin:5px; font-size:large;'
            for (let i=0; i<codebox.question.length; i++){
                if (Array.isArray(codebox.question[i])){
                    let questioncode = document.createElement('code')
                    questioncode.innerText = codebox.question[i][0]
                    question.appendChild(questioncode)
                }
                else{
                    let t1 = document.createTextNode(codebox.question[i])
                    question.appendChild(t1)
                }        
            }
            codebox.question = question
        }
        
        // Code Templet & Answer
        if (codebox.code_templet == null && codebox.answer == null){
            const codeContainer = document.createElement('div')
            codeContainer.className = 'codeContainer'
            let string = ''
            let strings = []
            if (userDef.includes("if")){
                strings = ["<PRE>", "<input name='input0' maxlength='2' style='width: 20px;'>",
                "'a' in 'apple':\n", "  print('Hello')\n",
                "<input name='input1' maxlength='4' style='width: 40px;'>", ":\n",
                "  print('Bye')", "</PRE>"]
            }
            else if (userDef.includes("loop")){
                strings = ["<PRE>", "fruit = [a, b, c]\n", 
                "<input name='input0' maxlength='3' style='width: 30px;'>", 
                " x ", "<input name='input1' maxlength='2' style='width: 20px;'>",
                " fruits:\n", "  print (x)", "</PRE>" ] 
            }
            //else if (...)
            
            for (let i=0; i<strings.length; i++){
                string += strings[i]
            }
            codeContainer.innerHTML = string;
            codebox.code_templet = codeContainer;

            // Answer
            let ans = []
            if (userDef.includes("if")){
                ans = ['if', 'else']
            }
            else if (userDef.includes("loop")){
                ans = ['for', 'in']
            }
            //else if (...)

            codebox.answer = ans;
            }
        else if (codebox.code_templet != null && codebox.answer != null){
            if (!Array.isArray(codebox.code_templet) || !Array.isArray(codebox.answer)){
                console.log("Templet and Answer must be arrays")
                return;
            }
            const codeContainer = document.createElement('div')
            codeContainer.className = 'codeContainer'
            let strings = "<PRE>"
            let inputCounter = 0;
            for (let i=0; i<codebox.code_templet.length; i++){
                if (Array.isArray(codebox.code_templet[i])){
                    let string1 = "<input name='input"+inputCounter+"'"
                    let string2 = " maxlength="+codebox.code_templet[i][0]
                    let string3 = " style='width:"+codebox.code_templet[i][0]+"0px;'>"
                    // let string1 = '<input name="input'+inputCounter+' maxlength='+codebox.code_templet[i][0]+' style="width: 33px;"">'
                    inputCounter++
                    strings = strings+string1+string2+string3
                }
                else{
                    strings += codebox.code_templet[i]
                }
            }
            strings += "</PRE>"
           
            // In case of the number of input and the number of answer do not match
            if (inputCounter != codebox.answer.length){
                console.log("Answer and input fields do not match, automatically justify answer!")
                codebox.answer.length = inputCounter+1
            }

            codeContainer.innerHTML = strings;
            codebox.code_templet = codeContainer;  
        }
        else{
            console.log("input incomplete")
            codebox.code_templet = null
            codebox.answer = null
        }
           
    }

/*** Analyze Ans ***/ 
function _analyzeAns(type, ans){
    let flag = 1;
    let inputs = []
    const codebox = document.querySelector("#codebox_"+type)
    let inputtags = codebox.getElementsByTagName('input'); 

    for (let i=0; i<inputtags.length; i++){
        inputs.push(inputtags[i])
    }
    const isnull = (input) => input.value != '';
    const user = inputs.every(isnull)
    if (!user){
        console.log("wait for all userinputs")
        return;
    }
    for (let i=0; i<inputs.length; i++){
    let result = ans[i].localeCompare(inputs[i].value);
    if (result){
        flag = 0;
        break;
        }
    }
    const result = document.querySelector("#codebox_"+type+' .result')
    const note = result.firstChild
    if (flag){
        note.innerText = 'You got correct answer!'
    }
    else{
        note.innerText = 'Try again!'
    }
}   
   

function Programmer(def, explanation, example, syntax, question, code_templet, answer) {
    this.infobox = new _Info(def, explanation, example, syntax)
    this.codebox = new _Code(question, code_templet, answer); 
    
    this.type = this.infobox.def != null? this.infobox.def.toString().toLowerCase() : null

}

Programmer.prototype = {
    /******************************** Info box ***********************************/

	makeInfoBox: function(target, type) {
        if (this.infobox.def == null){
            console.log("must at least provide a definition")
            return;
        }
        const infobox = document.createElement('div')
        infobox.id = 'infobox_'+type;
        infobox.className = 'infobox-shut'

        const def = document.createElement('div')
        def.className = 'def'
        def.innerText = this.infobox.def
        const explanation = document.createElement('div')
        explanation.className = 'explanation'

        _classifyInfo(this.infobox)
        
        explanation.innerText = this.infobox.explanation
        const example = this.infobox.example
        
        const syntax = this.infobox.syntax
        syntax.className = 'syntax'

        infobox.appendChild(def)
        infobox.appendChild(explanation)
        infobox.appendChild(syntax)
        infobox.appendChild(example)
        
        target.appendChild(infobox)
        
        /***********/
        const defArea = target.querySelector(".target");
        defArea.addEventListener('click', function(e) {
        e.preventDefault();
        const box = document.querySelector('#infobox_'+type)
        if (box == null){
            console.log("please makebox first")
            return;
        }
        if (box.classList.contains('infobox-shut')){
            box.classList.remove('infobox-shut')
            box.classList.add('infobox')
        }
        else{
        box.classList.remove('infobox')
        box.classList.add('infobox-shut')
        }
        }, false);

        /***********/
        return infobox
	},

    changeExplanation: function(newContent){
        const explanation = document.querySelector('#infobox_'+this.type+' .explanation')
        explanation.innerText = newContent
        this.infobox.explanation = newContent
    },

    // Change both example header & content
    changeExample: function(newContent){
        if (!Array.isArray(newContent)){
            console.log("Example must be an array")
            return;
        }
        const example = document.querySelector('#infobox_'+this.type+' .example')
        const header = document.querySelector('#infobox_'+this.type+' .example h4')
        header.innerText = newContent[0]
        const pre = document.querySelector('#infobox_'+this.type+' .example pre')
        let string = ''
        for (let i=1; i<newContent.length; i++){
            string += newContent[i]
        }
        pre.innerText = string 
        this.infobox.example = example 
    },

    changeSyntax: function(newContent){
        if (!Array.isArray(newContent)){
            console.log("Syntax must be an array")
            return;
        }
        const syntax = document.querySelector('#infobox_'+this.type+' .syntax')
        const syntaxCode = document.querySelector('#infobox_'+this.type+' .syntaxCode')
        syntaxCode.innerHTML = ''
        for (let i=0; i<newContent.length; i++){
            if (Array.isArray(newContent[i])){
                let code1 = document.createElement('code')
                code1.innerText= newContent[i][0]
                syntaxCode.append(code1)
            }
            else{
                const span = document.createElement('span')
                span.innerText = newContent[i]
                syntaxCode.append(span)
            }
        }  
        this.infobox.syntax = syntax   
    },

    /******************************** Code box *****************************************/

    makeCodeBox: function(target, type){
        if (this.infobox.def == null){
            console.log("must at least provide a definition")
            return;
        }
        /*Only Coding box, please use it with resultbox*/

        // create coding box
        const codebox = document.createElement('div')
        codebox.id = 'codebox_'+type
        codebox.className = 'codebox-shut'
        // coding area
        const coding = document.createElement('div')
        coding.className = 'codeArea'
        const h2 = document.createElement('h2')
        h2.innerText = 'Test yourself!'
        coding.appendChild(h2)

        // make question
        _classifycoding(this.infobox, this.codebox)
        const question = this.codebox.question

        // code area
        const codeContainer = this.codebox.code_templet

        coding.appendChild(question)
        coding.appendChild(codeContainer)

        codebox.appendChild(coding)

        target.insertAdjacentElement('afterend', codebox)
        
        /***********/
        const defArea = target.querySelector(".target")
        defArea.addEventListener('click', function(e) {
        e.preventDefault();
        const box = document.querySelector('#codebox_'+type)
        if (box == null){
            console.log("please makebox first")
            return;
        }
        if (box.classList.contains('codebox-shut')){
            box.classList.remove('codebox-shut')
            box.classList.add('codebox')
        }
        else{
            box.classList.remove('codebox')
            box.classList.add('codebox-shut')
        }
        }, false);

        return codebox;

    },

    changeQuestion: function(newContent){
        if (!Array.isArray(newContent)){
            console.log("Question must be an array")
            return;
        }
        const question = document.querySelector('#codebox_'+this.type+' .question')
        question.children = []

        for (let i=0; i<newContent.length; i++){
            if (Array.isArray(newContent[i])){
                let questioncode = document.createElement('code')
                questioncode.innerText = newContent[i][0]
                question.appendChild(questioncode)
            }
            else{
                let t1 = document.createTextNode(newContent[i])
                question.appendChild(t1)
            }        
        }
        this.codebox.question = question;

    },

    changeTemplet: function(newContent){
        if (!Array.isArray(newContent)){
            console.log("Templet must be an array")
            return;
        }
        const templet = document.querySelector('#codebox_'+this.type+' .codeContainer')
        let strings = "<PRE>"
        let inputCounter = 0;
        for (let i=0; i<newContent.length; i++){
            if (Array.isArray(newContent[i])){
                let string1 = "<input name='input"+inputCounter+"'"
                let string2 = " maxlength="+newContent[i][0]
                let string3 = " style='width:"+newContent[i][0]+"0px;'>"
                inputCounter++
                strings = strings+string1+string2+string3
            }
            else{
                strings += newContent[i]
            }
        }
        strings += "</PRE>"

        // In case of the number of input and the number of answer do not match
        if ((this.codebox.answer!= undefined) && (inputCounter != this.codebox.answer.length)){
            console.log("Answer and input fields do not match, change templet failed")
            return;
        }

        templet.innerHTML = strings;
        this.codebox.code_templet = templet; 

    },

    changeExercise: function(newContent){

        if (newContent.constructor == Object){  
            const button = document.querySelector("#codebutton_"+this.type)
            button.removeEventListener('click', function(e){
                e.preventDefault();
                _analyzeAns(this.type, this.codebox.answer)})

            const newans = newContent["answer"]
            this.codebox.answer = newans
            this.changeTemplet(newContent["code"]) 

            const codebox = document.querySelector("#codebox_"+this.type)
            console.log(codebox)
            let inputtags = codebox.getElementsByTagName('input'); 
            const result = document.querySelector("#codebox_"+this.type+' .result')
            const note = result.firstChild
            
            button.addEventListener('click', function(e){
                e.preventDefault();
                let flag = 1;
                let inputs = []

                for (let i=0; i<inputtags.length; i++){
                    inputs.push(inputtags[i])
                }
                const isnull = (input) => input.value != '';
                const user = inputs.every(isnull)
                if (!user){
                    console.log("wait for all userinputs")
                    return;
                }
                for (let i=0; i<inputs.length; i++){
                let result = newans[i].localeCompare(inputs[i].value);
                if (result){
                    flag = 0;
                    break;
                    }
                }
            
                if (flag){
                    note.innerText = 'You got correct answer!'
                }
                else{
                    note.innerText = 'Try again!'
                }
                
            })
            
        }
        else{
            console.log("input must be an dictionary")
        }
    },

    /************************************ Result box ***********************************/

    makeResultBox: function(type, answer){
        if (this.infobox.def == null){
            console.log("must at least provide a definition")
            return;
        }
        // Submit button to verify
        const button = document.createElement('button')
        button.className = 'codebutton'
        button.id = 'codebutton_'+type
        button.type = 'click'
        button.innerText = 'submit your answer'

        const coding = document.querySelector("#codebox_"+type+' .codeArea')
        coding.appendChild(button)

        const result = document.createElement('div')
        result.className = 'result'
        const note = document.createElement('p')
        result.append(note)
        const codebox = document.querySelector("#codebox_"+type)
        codebox.appendChild(result)

        /***********/

        button.addEventListener('click', function(e){
            e.preventDefault();
            const ans = answer;
            _analyzeAns(type, ans)
            }, false);
        return button;
    },

}

    global.Programmer = global.Programmer || Programmer
})(window, window.document);
