import { Component, OnInit } from '@angular/core';
import { BreadcumbComponent } from '../../components/breadcumb/breadcumb.component';
import { FeaturesSectionComponent } from '../../components/section/features-section/features-section.component';
import { TestimonialSectionComponent } from '../../components/section/testimonial-section/testimonial-section.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'about-us-page',
    templateUrl: 'about-us.page.html',
    imports: [ BreadcumbComponent, FeaturesSectionComponent, TestimonialSectionComponent, RouterLink ]
})

export default class AboutUsPage implements OnInit {

    constructor() { }

    ngOnInit() { }
}
