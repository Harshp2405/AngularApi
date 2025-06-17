import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  accordionItems = [
    {
      id: 'one',
      title: 'Accordion Item #1',
      content: 'This is the first item\'s accordion body.'
    },
    {
      id: 'two',
      title: 'Accordion Item #2',
      content: 'This is the second item\'s accordion body.'
    },
    {
      id: 'two',
      title: 'Accordion Item #2',
      content: 'This is the second item\'s accordion body.'
    },
    {
      id: 'two',
      title: 'Accordion Item #2',
      content: 'This is the second item\'s accordion body.'
    },
    {
      id: 'two',
      title: 'Accordion Item #2',
      content: 'This is the second item\'s accordion body.'
    },
    {
      id: 'two',
      title: 'Accordion Item #2',
      content: 'This is the second item\'s accordion body.'
    },
    {
      id: 'three',
      title: 'Accordion Item #3',
      content: 'This is the third item\'s accordion body.'
    }
  ];
}
