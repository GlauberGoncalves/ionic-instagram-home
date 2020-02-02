import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public stories = [    
    {'nome': 'jessica', 'img':'assets/usuarios/2.jpg'},
    {'nome': 'zelia', 'img':'assets/usuarios/3.jpg'},
    {'nome': 'wellington', 'img':'assets/usuarios/4.jpg'},
    {'nome': 'douglas', 'img':'assets/usuarios/5.jpg'},
    {'nome': 'luana', 'img':'assets/usuarios/6.jpg'},
    {'nome': 'ms', 'img':'assets/usuarios/7.jpg'},
    {'nome': 'windersonnunes', 'img':'assets/usuarios/8.jpg'}
  ]

  public posts = [
    {'nome': 'jessica', 'img':'assets/usuarios/2.jpg', 'imgPost': 'assets/posts/post_1.jpg'},
    {'nome': 'zelia', 'img':'assets/usuarios/3.jpg', 'imgPost': 'assets/posts/post_2.jpg'},
    {'nome': 'wellington', 'img':'assets/usuarios/4.jpg', 'imgPost': 'assets/posts/post_3.jpg'},
    {'nome': 'douglas', 'img':'assets/usuarios/5.jpg', 'imgPost': 'assets/posts/post_4.jpg'},
    {'nome': 'luana', 'img':'assets/usuarios/6.jpg', 'imgPost': 'assets/posts/post_5.jpg'},
    {'nome': 'ms', 'img':'assets/usuarios/7.jpg', 'imgPost': 'assets/posts/post_6.jpg'},
    {'nome': 'windersonnunes', 'img':'assets/usuarios/8.jpg', 'imgPost': 'assets/posts/post_7.jpg'}
  ]

  constructor() {}

}
