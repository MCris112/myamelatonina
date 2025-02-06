import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'section-testimonial',
  imports: [],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialSectionComponent {

  testimonials = [
    {
      message: "Desde que comencé a usar los productos de Myamelatonina, he notado una mejora significativa en la calidad de mi sueño. El servicio al cliente es excelente y siempre responden a mis dudas rápidamente",
      author: "María Fernanda López"
    },
    {
      message: "He probado varias marcas de melatonina, pero los productos de Myamelatonina son los mejores que he encontrado. Me siento más descansado y con más energía durante el día",
      author: "Juan Carlos Pérez",
    },
    {
      message: "El proceso de compra fue muy sencillo y la entrega fue rápida. Estoy muy contenta con los resultados y definitivamente seguiré comprando aquí.",
      author: "Ana Patricia Rojas",
    }
  ]

}
