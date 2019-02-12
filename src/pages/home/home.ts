import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  factors = [
    {name: 'Age', options: [{key: '<65', value: 0}, {key: '65-74', value: 1}, {key: '>=75', value: 2}], color: ''},
    {name: 'Sex', options: [{key: 'Female', value: 1}, {key: 'Male', value: 0}], color: ''},
    {name: 'CHF history', options: [{key: 'No', value: 0}, {key: 'Yes', value: 1}], color: ''},
    {name: 'Hypertension history', options: [{key: 'No', value: 0}, {key: 'Yes', value: 1}], color: ''},
    {name: 'Stroke/TIA/Thromboembolism history', options: [{key: 'No', value: 0}, {key: 'Yes', value: 2}], color: ''},
    {name: 'Vascular disease history', options: [{key: 'No', value: 0}, {key: 'Yes', value: 1}], color: ''},
    {name: 'Diabetes history', options: [{key: 'No', value: 0}, {key: 'Yes', value: 1}], color: ''}
  ];

  myRiskFactors = {};
  myScore = 0;

  constructor(public navCtrl: NavController) {

  }

  handleFactorChanged($event): void {
    this.myRiskFactors[$event.key] = $event.value;
    this.updateScore();
  }

  updateScore(): void {
    let score = 0;
    for (let k in this.myRiskFactors) {
      score += this.myRiskFactors[k];
    }
    this.myScore = score;
    console.log(`Score: ${this.myScore}`);
  }
}
