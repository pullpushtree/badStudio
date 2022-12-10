import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuVariable = false;
  menuIconVariable = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  openMenu(){
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }

  closeMenu(){
    this.menuVariable = false;
    this.menuIconVariable = false;
  }

  scroll(el: Element){
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  home(){
    this.router.navigate(['/home']);
  }

  about(){
    this.router.navigate(['/about']);
  }

  resume(){
    this.router.navigate(['/resume']);
  }

}
