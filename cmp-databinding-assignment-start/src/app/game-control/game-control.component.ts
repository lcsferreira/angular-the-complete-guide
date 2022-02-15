import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>(); //Evento pode ser escutado fora do componente
  interval;
  gameNumber: number = 0;
  started: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onStartIncrementing() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.gameNumber + 1);
      this.gameNumber++;
    }, 1000);
  }

  onStopIncrementing() {
    clearInterval(this.interval);
  }

}
