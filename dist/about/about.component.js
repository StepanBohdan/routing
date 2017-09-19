"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by bodya on 14.09.17.
 */
var core_1 = require("@angular/core");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var users = [
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
];
var AboutComponent = (function () {
    function AboutComponent() {
        this.users = users;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about-page',
        styles: ["\n        .profile-card {\n            background: #f3f3f3;\n            border-radius: 4px;\n            padding: 30px;\n            text-align: center;\n        }\n        .profile-card img {\n            max-width: 50%;\n            margin: 15px auto;\n        }\n\n    "],
        template: "\n        <div class=\"row\" *ngIf=\"users\">\n            <div class=\"col-sm-4\" *ngFor=\"let user of users\">\n                \n                <div class=\"profile-card\" [routerLink]=\"['/about', user.username]\">\n                    <img [src]=\"user.avatar\" class=\"img-responsive img-circle\" alt=\"\">\n                    \n                    <h2>{{ user.name}}</h2>\n                    <p>\n                        <a href=\"https://twitter.com/{{ user.username }}\">\n                            {{ user.username }}\n                        </a>\n                    </p>\n                    \n                </div>\n            </div>\n        </div>\n        about page\n    "
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map