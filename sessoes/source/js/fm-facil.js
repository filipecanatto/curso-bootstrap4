new Vue({
    el: '#circuit',
    data: {
        resultXml: ""+
        "<note> \n"+
            "<to>Tove</to> \n"+
            "<from>Jani</from> \n"+
            "<heading>Reminder</heading> \n"+
            "<body>Don't forget me this weekend!</body> \n"+
        "</note> \n"
    },
    methods: {
        showCircuitInfo(event) {
            if ($('#circuitForm').hasClass("d-none")) {
                $('#circuitForm').removeClass("d-none");
            } else {
                $('#circuitForm').addClass("d-none");
            }

        },
        getResultXml(){
            // clean result area, if necessary
            $($( ".CodeMirror")[0]).remove();
            // get result
            $('#resultTextArea').text(this.resultXml);
            this.formatXml();
            $('#resultTextArea').disable = true;
        },
        formatXml(){
            CodeMirror.fromTextArea(resultTextArea, {
                lineNumbers: true
            });
            $( ".CodeMirror").addClass('disableCodeMirrorDivs');
        }
    }
})
