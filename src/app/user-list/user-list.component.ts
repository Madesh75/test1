import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(private router: Router, private dialog: MatDialog) {}

  users: any[] = [
    { id: 1, name: 'Madesh', email: 'madesh@gmail.com' },
    { id: 2, name: 'Yuvaraj', email: 'yuvaraj@gmail.com' },
    { id: 3, name: 'Hemath', email: 'hemath@gmail.com' },
    { id: 4, name: 'Prasth', email: 'prasath@gmail.com' },
  ];

  // editUserDetails(userId: number) {
  //   this.router.navigate(['/edit-user', userId]);
  // }
  
  

  deleteUser(userId: number) {
 
  }
  openEditDialog(user: any) {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '300px',
      data: { user: { ...user } },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const index = this.users.findIndex(u => u.id === result.id);
        if (index !== -1) {
          this.users[index] = result;
        }
      }
    });
    
}
}