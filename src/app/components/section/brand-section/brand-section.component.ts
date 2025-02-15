import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'brand-section',
  imports: [],
  templateUrl: './brand-section.component.html',
  styleUrl: './brand-section.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class BrandSectionComponent {

  companies: { slug: string; img: string}[] = [
    {
      slug: "natrol",
      img: "natrol.png"
    },
    {
      slug: "puritians-pride",
      img: "puritians_pride.png"
    },
    {
      slug: "carlyle",
      img: "carlyle.png"
    },
    {
      slug: "vitamatic",
      img: "vitamatic.png"
    },
    {
      slug: "best-naturals",
      img: "best-naturals.png"
    },
    {
      slug: "bronson",
      img: "bronson.png"
    }
  ]
}
