
    function WebForm_OnSubmit() {
        var errorControls = new Array();
        if (typeof (ValidatorOnSubmit) == "function" && ValidatorOnSubmit() == false) {
            for (var i in Page_Validators) {
                try {
                    var control = document.getElementById(Page_Validators[i].controltovalidate);

                    if (!Page_Validators[i].isvalid) {
                        errorControls[errorControls.length] = control;
                    }
                    control.style.background = "#FCFCFC";
                    control.style.border = "1px solid #D1D1D1";

                } catch (e) { }
            }

            for (var i in errorControls) {
                errorControls[i].style.background = "#FBE3E4";
                errorControls[i].style.border = "1px solid #f02222";
            }

            for (var i in Page_Validators) {
                try {
                    if (!Page_Validators[i].isvalid) {
                        var control = $("#" + Page_Validators[i].controltovalidate);
                        var top = control.offset().top;
                        $('html, body').animate({ scrollTop: top - 140 }, 1000);
                        return;
                    }
                } catch (e) { }
            }


            return false;
        }
        return true;
    }

