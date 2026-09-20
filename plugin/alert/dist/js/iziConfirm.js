function Confirm() {
    iziToast.question({
        timeout: 10000,
        close: true,
        overlay: true,
        toastOnce: true,
        id: 'question',
        rtl: true,
 
        zindex: 999,
        title: 'توجه',
        message: 'آیا برای انجام این کار مطمعن هستید؟',
        position: 'center',
        buttons: [
            ['<button><b>بله</b></button>', function (instance, toast) {
                instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');
                DoTriger();
            

            }, true],
            ['<button>خیر</button>', function (instance, toast) {

                instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');

            } ]
        ],
        onClosing: function (instance, toast, closedBy) {
            console.info('Closing | closedBy: ' + closedBy);
        },
        onClosed: function (instance, toast, closedBy) {
            console.info('Closed | closedBy: ' + closedBy);
        }
    });
}