let display = document.getElementById('textbox');
        let replaceItems = document.getElementById('replace')
        let result = document.getElementById('result');
        let b = document.getElementById('colour')
        let search;

        function searchText(params){
            search = document.querySelector('#search').value;
            let show = new RegExp (search, 'gi');
            let regex = display.innerText.match(show);

            if(regex == null){
                result.innerHTML = `no match for '${search}' found`;
            }
            else{
                result.innerHTML = `${regex.length} match for '${search}' found`;
            }

            
        }
        let replaceText=()=>{
            let replace = new RegExp(search, 'gi')
            display.innerText = display.innerText.replace(replace, replaceItems.value)
        }
        function boldText(){
            document.execCommand('bold', false, null)
        }
        function italicText(){
            document.execCommand('italic', false, null)
        }
        function underlineText(){
            document.execCommand('underline', false, null)
        }
        function paragraphText(){
            document.execCommand('paragraph', false, null)
        }
        function justifyLeft(){
            document.execCommand('justifyLeft', false, null)
        }
        function justifyCenter(){
            document.execCommand('justifyCenter', false, null)
        }
        function justifyRight(){
            document.execCommand('justifyRight', false, null)
        }
        function justify(){
            document.execCommand('justify', false, null)
        }
        function colr(){
            display.style.color = b.value
        }