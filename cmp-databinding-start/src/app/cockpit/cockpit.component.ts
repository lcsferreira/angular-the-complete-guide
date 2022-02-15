import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  newServerContent = '';

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value)
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.newServerContent });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ blueprintName: nameInput.value, blueprintContent: this.newServerContent });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
