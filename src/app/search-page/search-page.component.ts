import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
data = [
  {name: 'Mount Ulap', description: 'One of the most famous hikes in Benguet is Mt Ulap in Itogon.', image: '../../assets/Camp Images/Mount Ulap.jpg'},
  {name: 'Calaguas Islands', description: 'A paradise of islands that can rival the white sand beauty of Boracay.', image: '../../assets/Camp Images/Calaguas Island.jpg'},
  {name: 'Onay Beach', description: 'This is one of the best beach camping sites, beautiful and pristine.', image: '../../assets/Camp Images/Onay Beach.jpg'},
  {name: 'Seven Sisters Waterfall', description: 'The seven sisters is the 39th tallest waterfall in Norway.', image: '../../assets/Camp Images/Seven Sisters Waterfall.jpg'},
  {name: 'Latik Riverside', description: 'Phillipines is one of the most dazzling countries in all of Asia.', image: '../../assets/Camp Images/Latik Riverside.jpg'},
  {name: 'Buloy Springs', description: 'This is one of the best beach camping sites, beautiful and pristine.', image: '../../assets/Camp Images/Buloy Springs.jpg'}


]
  constructor() { }

  ngOnInit() {
  }

}
