import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StoriesPage implements OnInit {
  stories = [
    {
      imageUri: 'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
      postedTime: '25 m',
    }, {
      imageUri: 'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      postedTime: '25 m',
    }, {
      imageUri: 'https://lh3.googleusercontent.com/proxy/cTB66Af39yCQmn0Z5Dy9YGYG8NCTmtLVB4QzOYNMs6ejl3SpWcGK6rEsIKCDpeeetC8b5jE5iyDk-suYMRDJe5zvmfjYAmuzDG5JcKnQQ59pI9caMwYrg5aTjqoEgVzaBNH7BvUkGk8TXsqSYTutYCkuBYp6osmM',
      postedTime: '25 m',
    }
  ];
  public progress = 0;
  // currentStory = 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
  currentStory = 1;

  constructor() {
    
  }

  ngOnInit() {
    setInterval(() => {
      if (this.progress < 1) {
        this.progress += 0.05
      } else {
        this.changeStory();
      }
    }, 100);
    /* setInterval(() => {
      this.changeStory()
    }, 3000); */
  }

  changeStory() {
    // this.currentStory = 'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg';
  }

  setStoryProgress(index: number) {
    if (index < this.currentStory) {
      return 1;
    }
    if (index === this.currentStory) {
      return this.progress;
    }
    if (index > this.currentStory) {
      return 0;
    }
    return 0;
  }
}
