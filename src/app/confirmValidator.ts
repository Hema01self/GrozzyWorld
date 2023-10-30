
import { FormGroup } from "@angular/forms";

export function ConfirmValidator(password:string,cpassword:string){
  return (formgroup:FormGroup)=>{
    const pass=formgroup.controls[password];
    const cpass=formgroup.controls[cpassword];
    if(pass.value!==cpass.value){
      cpass.setErrors({ConfirmValidator:true})
    }
    else{
      cpass.setErrors(null);
    }
  }
}
