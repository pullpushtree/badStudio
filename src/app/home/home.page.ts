import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { element } from 'protractor';
import Typewriter from 't-writer.js';

@HostListener('window:resize', ['$event'])
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  showSideMenu = false;
  menuVariable = false;
  menuIconVariable = false;
  segment = 'skills';
  screenSize: number;
  constructor(private menuCtrl: MenuController ) {}
  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
        // else {
        //   entry.target.classList.remove('show');
        // }
      });
    });
    // //const move = document.addEventListener('mousemove', parallax);
    // const move = document.addEventListener('mousemove', parallax =>{
    //   document.querySelectorAll<HTMLElement>('.layer').forEach(layer => {
    //     const speed: any = layer.getAttribute('data-speed');
    //     const x = (window.innerWidth - parallax.pageX*speed)/100;
    //     const y = (window.innerHeight - parallax.pageY*speed)/100;
    //     layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    //   });
    // });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    const target = document.querySelector('.tw');
      const writer = new Typewriter(target, {
        loop: false,
        typeSpeed: 30,
        deleteSpeed: 10,
        animateCursor: true,
        blinkSpeed: 400,
        typeColor: '#F2F2F2;',
        cursorColor: '#28285c;'
      });
      writer
        .rest(2000)
        .type('I like to craft solid and scalable fronted products with great user experinces.')
        .rest(4000)
        .clear()
        .type('I specialize in responsive web, desktop, and mobile app design.',)
        .rest(4000)
        .changeOps({ deleteSpeed: 10 })
        .remove(65)
        .type('I help companies to develop intuitive digital products and online experiences.',)
        .rest(4000)
        .changeOps({ deleteSpeed: 10 })
        .start();
  }
  scroll(el: Element){
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  openMenu(){
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }

  closeMenu(){
    this.menuVariable = false;
    this.menuIconVariable = false;
  }
  // parallax(e){
  //   document.querySelectorAll<HTMLElement>('.layer').forEach(layer => {
  //     const speed: any = layer.getAttribute('data-speed');
  //     const x = (window.innerWidth - e.pageX*speed)/100;
  //     const y = (window.innerHeight - e.pageY*speed)/100;
  //     layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //   });
  // }

}
