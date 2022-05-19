$(document).ready(function () {

    $("select[data-name='first']").change(
        function selectOption() {
            let seletedValue = $("select[data-name='first']").val()

            $("select[data-name='second'] option[selected]").each(function () {
                $("select[data-name='second'] option[selected]").removeAttr('selected')
            })

            $("select[data-name='second']").children(`option[value=${seletedValue}]`).attr('selected', true)
        }
    )
})
