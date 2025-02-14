import { Component, Input } from '@angular/core';
import { InvestmentResults } from '../../Models/investment.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() investmentCalculationResult: InvestmentResults[];

  ngAfterViewChanges() {
    console.log('inside result comp', this.investmentCalculationResult);
  }
}
