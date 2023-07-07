import { Pipe, PipeTransform } from '@angular/core';
import { Need } from '../interfaces/need';

@Pipe({
  name: 'filterNeed'
})
export class FilterNeedPipe implements PipeTransform {

  transform(needs: Need[], search: string = ''): Need[] {

    const filteredResults = needs.filter( (need) => need.requestedSkills.some( 
      (skill) => skill.name.toLowerCase().includes(search))
    );

    return filteredResults;    
  }

}
