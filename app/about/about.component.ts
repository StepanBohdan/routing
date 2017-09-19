/**
 * Created by bodya on 14.09.17.
 */
import { Component } from '@angular/core';

export class User {
    id: number;
    name: string;
    username: string;
    avatar: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Chris',
        username: 'sevilayha',
        avatar: 'https://image.freepik.com/free-icon/apple-logo_318-40184.jpg'
    },
    {
        id: 2,
        name: 'Nick',
        username: 'whatnicktweets',
        avatar: 'https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg'
    },
    {
        id: 3,
        name: 'Holly',
        username: 'hollywally',
        avatar: 'https://image.freepik.com/free-vector/abstract-logo-with-colorful-leaves_1025-695.jpg'
    }
]
@Component({
    selector: 'about-page',
    styles: [`
        .profile-card {
            background: #f3f3f3;
            border-radius: 4px;
            padding: 30px;
            text-align: center;
        }
        .profile-card img {
            max-width: 50%;
            margin: 15px auto;
        }

    `],
    template: `
        <div class="row" *ngIf="users">
            <div class="col-sm-4" *ngFor="let user of users">
                
                <div class="profile-card" [routerLink]="['/about', user.username]">
                    <img [src]="user.avatar" class="img-responsive img-circle" alt="">
                    
                    <h2>{{ user.name}}</h2>
                    <p>
                        <a href="https://twitter.com/{{ user.username }}">
                            {{ user.username }}
                        </a>
                    </p>
                    
                </div>
            </div>
        </div>
        about page
    `
})
export class AboutComponent {
    users: User[] = users;
}