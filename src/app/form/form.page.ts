import { Component, OnInit } from '@angular/core';
import {ConcertInterface, ConcertService} from '../services/concert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public concert: ConcertInterface;

  constructor(private concertSrv: ConcertService,
              private router: Router) { }

  ngOnInit() {
    this.concert = this.concertSrv.getNewConcert();
  }

  validateForm() {
    // insertion du concert
    this.concertSrv.insertConcert(this.concert);
    //retour vers home
    this.router.navigateByUrl('/home');

  }
}
