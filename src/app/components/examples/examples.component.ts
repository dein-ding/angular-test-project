import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  persons = [
    {
      firstName: "bob",
      lastName: "parker",
      age: 13,
    },
    {
      firstName: "lisa",
      lastName: "smith",
      age: 25,
    },
    {
      firstName: "marco",
      lastName: "diliberto",
      age: 45,
    },
  ]

  newFullName: string;
  newAge: number;
  
  addPerson() {
    const fullName = this.newFullName.split(" ");
    const firstName = fullName.slice(0, -1).join(" ");
    const lastName = fullName[fullName.length - 1] || "no-last-name";

    this.persons.push({
      firstName,
      lastName,
      age: this.newAge,
    })
    
    this.newFullName = "";
    this.newAge = null;
  }

  ngOnInit(): void {
  }

}
