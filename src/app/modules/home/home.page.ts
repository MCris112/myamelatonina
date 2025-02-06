import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Swiper } from 'swiper/types';
import { ProductService } from '../products/products.service';
import { Product, ProductItem } from '../products/product.types';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductItemComponent } from "../products/components/item/product-item.component";
import { TestimonialSectionComponent } from '../../components/section/testimonial-section/testimonial-section.component';
import { TextParserPipe } from '../../text-parser.pipe';
import { FeaturesSectionComponent } from '../../components/section/features-section/features-section.component';
import { BrandSectionComponent } from '../../components/section/brand-section/brand-section.component';

type Slider = {
  subtitle: string;
  title: string;
  description: string;
  price?: {
    normal: number;
    discount: number;
  }

  buttons: {
    label: string;
    color: "primary" | "secondary",
    route: string
  }[]
}

@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ProductItemComponent, TestimonialSectionComponent, RouterLink, TextParserPipe, FeaturesSectionComponent, BrandSectionComponent]
})

export default class HomePaqge implements OnInit {

  sliders: Slider[] = [
    {
      subtitle: "Suplementos para dormir",
      title: "Venta de {{Melatonina}}",
      description: "{{Duerme mejor}} y disfruta tus sueños como ningun otro para tu día a día quitar esos malestares y despertar comodamente en tu hogar junto a un mejor amanecer",
      buttons: [
        {
          label: "Ver productos",
          color: "primary",
          route: "/productos"
        }
      ]
    }
  ]

  products: ProductItem[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this._productService.getAsItem(6)
  }


}
