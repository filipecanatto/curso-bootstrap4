new Vue({
    el: '#circuit',
    data: {
        resultXml: "resultado"
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
            $('#resultTextArea').text(this.resultXml);
        }
    }
})
