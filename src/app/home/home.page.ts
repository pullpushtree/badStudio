import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { element } from 'protractor';
import Typewriter from 't-writer.js';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

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
  submitted: boolean;
  constructor(
    public afs: AngularFirestore,
    public toastCtrl: ToastController
    ) {}

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
        .type('I like to craft solid and scalable fronted products with great user experiences.')
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

  openLinkedin(url: string) {
    window.open(url, '_system', 'location=yes');
  }

  openGitHub(url: string) {
    window.open(url, '_system', 'location=yes');
  }

  openBehance(url: string) {
    window.open(url, '_system', 'location=yes');
  }

  onSubmit(val: any ) {
    this.submitted = true;
    const date: Date = new Date();
    const date2: number = Date.now();
    const msgPayload = {
      subject: val.subject,
      name: val.fname,
      email: val.emailAddress,
      body: val.body,
      date,
      date2,
    };
    console.log('form submitted', val);

    this.afs
      .collection('messages')
      .add(msgPayload)
      .then((res) => {
        this.messageSuccess();
      })
      .catch((err) => {
        this.messageFailed();
        console.log('ERROR => ', err);
      });
  }

  async messageSuccess(){
    await this.toastCtrl.create({
      message: 'Thank You!, Your message has been sent',
      duration: 5000,
      position: 'bottom',
      color: 'warning'

    }).then(res => res.present());
  }

  async messageFailed(){
    await this.toastCtrl.create({
      message: 'Something went wrong. Please try Again!',
      duration: 5000,
      position: 'bottom',
      color: 'danger'

    }).then(res => res.present());
  }

}
