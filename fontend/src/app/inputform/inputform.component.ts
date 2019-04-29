import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  dataArr: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(inputdata) {
    alert(JSON.stringify(inputdata));
    this.http.post<any>('http://localhost:8080/cal', inputdata).subscribe(result => {
      this.dataArr = result;
    });
  }

}
