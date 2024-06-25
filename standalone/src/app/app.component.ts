import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
})
export class AppComponent {
  const userInput = '<script>alert("XSS")</script>';
document.getElementById('output').innerHTML = userInput;
  title = 'Auth0 Angular SDK Sample';

    title = 'Original Component';
  description = 'This is the original component';
}
@Component({
  selector: 'app-duplicated',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  `
})
export class DuplicatedComponent {
  title = 'Duplicated Component';
  description = 'This is the duplicated component';
}
