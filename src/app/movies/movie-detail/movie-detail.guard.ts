import { CanActivateFn } from '@angular/router';

export const movieDetailGuard: CanActivateFn = (route, state) => {
  const id = Number(route.paramMap.get('id'))
  if(isNaN(id)||id<1){
    alert("Invalid Movie ID");
    return false
  }
  return true
};
