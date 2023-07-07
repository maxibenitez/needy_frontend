import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: User[], search: string = ''): User[] {

    const filteredResults = users.filter((user) => user.skills.some(
      (skill) => skill.name.toLowerCase().includes(search))
    );

    return filteredResults;
  }

}
