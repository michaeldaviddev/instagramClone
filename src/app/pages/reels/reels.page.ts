import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.page.html',
  styleUrls: ['./reels.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ReelsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
