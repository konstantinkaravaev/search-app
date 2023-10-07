// placeholder.animation.ts

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const placeholderAnimation = trigger('placeholderAnimation', [
  state('unfocused', style({ color: '#888' })), // Начальное состояние placeholder
  state('focused', style({ color: '#f00' })), // Состояние placeholder при фокусировке (измените на желаемый цвет)
  transition('unfocused => focused', animate('0.3s ease-in')), // Анимация при фокусировке
  transition('focused => unfocused', animate('0.3s ease-out')), // Анимация при потере фокуса
]);
