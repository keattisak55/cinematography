import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreName'
})
export class GenreNamePipe implements PipeTransform {

  genres :any;
  transform(value: any,value1: any): any {
    value1.forEach((element: any) => {
    
      if(element.id== value){
        this.genres = element.name;
      }
});  
   
    return this.genres;
  }


}
