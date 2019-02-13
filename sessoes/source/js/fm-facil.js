new Vue({
    el: '#circuit',
    data: {

    },
    methods: {
        showCircuitInfo(event) {
            if ($('#circuitForm').hasClass("d-none")) {
                $('#circuitForm').removeClass("d-none");
            } else {
                $('#circuitForm').addClass("d-none");
            }

        }
    }
})
