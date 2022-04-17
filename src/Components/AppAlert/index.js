import Swal from "sweetalert2"
import "./appAlert.css"

export default function useAppAlert() {
    return {
        // Spread all original function
        ...Swal,
        // Overide fire() so we can use some custom props before fire()
        fire:(cb)=>{

            return Swal.mixin({
                confirmButtonText:"ตกลง",
                cancelButtonText:"ยกเลิก",
                reverseButtons:true,
                html:`<div class="app-alert-inner-htmlcontainer">${cb?.text || cb?.html}</div>`,
                customClass: {
                    icon:'app-alert-icon',
                    image:'app-alert-image',
                    title:'app-alert-title',
                    popup:`app-alert-popup app-alert-popup-${cb?.variant}`,
                    actions:'app-alert-actions',
                    container:'app-alert-container',
                    htmlContainer:`app-alert-htmlcontainer ${(cb?.icon || cb?.image) ? '' : 'no-icon'}`,
                    confirmButton: 'app-alert-btn app-alert-btn-success',
                    cancelButton: 'app-alert-btn app-alert-btn-danger',
                },
                buttonsStyling: false,
            }).fire(cb)
        }
    }
}

