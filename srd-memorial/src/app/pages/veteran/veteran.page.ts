import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-veteran',
  templateUrl: './veteran.page.html',
  styleUrls: ['./veteran.page.scss'],
})
export class VeteranPage implements OnInit {
  term: '';
  data: any[];
  cp: number = 1;
  currentData = null;
  currentIndex = -1;
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.getVeteranData();
  }
  refreshList(): void {
    this.currentData = null;
    this.currentIndex = -1;
    this.getVeteranData();
  }
  getVeteranData(): void {
    this.auth
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((res) => {
        res.shift();
        this.data = res;
      });
  }
}
