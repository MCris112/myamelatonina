import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SchemaBase } from './seo.types';
import { isPlatformServer } from '@angular/common';

@Injectable({providedIn: 'root'})
export class SeoService {
  private tagId = "seo_json_ld"

  constructor(
    @Inject( PLATFORM_ID) private _platformId: Object
  ) { }

  updateJsonLd(data: SchemaBase): void {

    if( isPlatformServer(this._platformId) ) return

    let scriptTag: HTMLScriptElement = document.getElementById(this.tagId) as HTMLScriptElement;
    const json = JSON.stringify(data);

    if (!scriptTag) {
      scriptTag = document.createElement('script');

      scriptTag.type = 'application/ld+json';
      scriptTag.id = this.tagId;
      scriptTag.textContent = json;
      document.head.appendChild(scriptTag);
      return;
    }

    scriptTag.textContent = json;
  }

  renderAboutUs()
  {
    // this.updateJsonLd({
    //   "@context": "https://schema.org",
    //   "@type": "Organization",
    //   "name": environment.company.name,
    //   "description": environment.company.introduction,
    //   "foundingDate": "10/05/2019",
    //   "founder": {
    //     "@type": "Person",
    //     "name": environment.company.legal.name
    //   },
    //   "location": {
    //     "@type": "Place",
    //     "address": {
    //       "@type": "PostalAddress",
    //       "streetAddress": "Your physical address",
    //       "addressLocality": "City",
    //       "postalCode": "Postal Code",
    //       "addressCountry": "Country"
    //     }
    //   },
    //   "contactPoint": {
    //     "@type": "ContactPoint",
    //     "contactType": "Customer Support",
    //     "email": "contact@yourcompany.com",
    //     "telephone": "Your contact number"
    //   },
    //   "sameAs": [
    //     "Facebook URL",
    //     "Twitter URL",
    //     "LinkedIn URL",
    //     "Instagram URL"
    //   ],
    //   "product": [
    //     {
    //       "@type": "Product",
    //       "name": "Melatonina Pills - Type 1",
    //       "description": "Description of melatonina pills type 1.",
    //       "image": "URL to product image",
    //       "offers": {
    //         "@type": "Offer",
    //         "priceCurrency": "Currency",
    //         "price": "Product Price",
    //         "availability": "https://schema.org/InStock",
    //         "url": "URL to product page"
    //       }
    //     },
    //     {
    //       "@type": "Product",
    //       "name": "Melatonina Pills - Type 2",
    //       "description": "Description of melatonina pills type 2.",
    //       "image": "URL to product image",
    //       "offers": {
    //         "@type": "Offer",
    //         "priceCurrency": "Currency",
    //         "price": "Product Price",
    //         "availability": "https://schema.org/InStock",
    //         "url": "URL to product page"
    //       }
    //     }
    //   ],
    //   "review": [
    //     {
    //       "@type": "Review",
    //       "author": {
    //         "@type": "Person",
    //         "name": "Customer Name"
    //       },
    //       "reviewRating": {
    //         "@type": "Rating",
    //         "ratingValue": "5",
    //         "bestRating": "5"
    //       },
    //       "reviewBody": "This melatonina pill has greatly improved my sleep quality!"
    //     },
    //     {
    //       "@type": "Review",
    //       "author": {
    //         "@type": "Person",
    //         "name": "Customer Name"
    //       },
    //       "reviewRating": {
    //         "@type": "Rating",
    //         "ratingValue": "4",
    //         "bestRating": "5"
    //       },
    //       "reviewBody": "Effective product with noticeable results."
    //     }
    //   ]
    // })
  }
}
