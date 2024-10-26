import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrMobile: string = '';
  password: string = '';
  users = [
    { emailOrMobile: '9934848562', password: '1234' },
    { emailOrMobile: '7061864538', password: '2580' },
    { emailOrMobile: 'agarwalrohit@gmail.com', password: '4280' },
    { emailOrMobile: 'rohitagarwal@gmail.com', password: '123456' },
    { emailOrMobile: 'guest@example.com', password: 'GuestPassword' },
  ];
  loginMessage: string = '';
  showUsers: boolean = false;

  onLogin() {
    // Handle login logic here
    console.log('Login attempt', { emailOrMobile: this.emailOrMobile, password: this.password });

    // Validate phone number or email format
    const isPhoneNumberValid = /^\d{10}$/.test(this.emailOrMobile);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.emailOrMobile);
    
    if (!isPhoneNumberValid && !isEmailValid) {
      this.loginMessage = 'Please enter a valid phone number or email.';
      return;
    }

    // Check if the user is valid
    const user = this.users.find(user => 
      user.emailOrMobile === this.emailOrMobile && user.password === this.password
    );

    if (user) {
      this.loginMessage = 'Login successful!';
      console.log('Login successful:', user);
      // Proceed with successful login logic
    } else {
      this.loginMessage = 'Login failed: Invalid credentials';
      console.log('Login failed: Invalid credentials');
    }

    // Clear the form after submission if needed
    this.emailOrMobile = '';
    this.password = '';
  }

  // Method to populate fields with sample data
  populateSampleData() {
    // Example: Populate with the first user
    this.emailOrMobile = this.users[0].emailOrMobile;
    this.password = this.users[0].password;
  }

  toggleShowUsers() {
    this.showUsers = !this.showUsers;
  }
}
