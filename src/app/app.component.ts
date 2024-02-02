import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  list:any[]=[]
  filteredList: any[] = []; 
  searchTerm: string = '';

  addname(item:string){
    console.log(item)
    this.list.push({id:this.list.length+1,username:item})
    console.log(this.list)
  }
  capitalName(item:any){
    item.username = item.username.toUpperCase();
}

searchNames() {
  this.filteredList = this.list.filter(item =>
    item.username.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
}

