$(document).ready(function() {
    if($('#multiple-checkboxes').length){
        $('#multiple-checkboxes').multiselect({
            includeSelectAllOption: true,
        });
    }
});