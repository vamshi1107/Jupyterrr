 function load(event) {
            var input = document.getElementById("file")
            var content = document.getElementById("content")
            var files = event.target.files
            var file = files[0]
            var reader = new FileReader()

            reader.onload = (event) => {
                var json = JSON.parse(event.target.result)
                var cells = json["cells"]
                var code = ""
                for (let cell of cells) {
                    for (let line of cell.source) {
                        code += line + "\n"
                    }
                    code += "\n"
                }
                content.innerHTML = code
            }
            reader.readAsText(file)
        }
        function select() {
            document.getElementById("file").click()
        }