import React from 'react';

import { Container, Option, Img, Label } from './styles';

import img1 from '../../assets/img/01.png';
import img2 from '../../assets/img/02.png';
import img3 from '../../assets/img/03.png';
import img4 from '../../assets/img/04.png';
import img5 from '../../assets/img/05.png';
import img6 from '../../assets/img/06.png';
import img7 from '../../assets/img/07.png';

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: 'Recarga',
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Uber',
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Transporte',
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'TV',
  },
  {
    key: String(Math.random()),
    img: img5,
    label: 'Central de Doações',
  },
  {
    key: String(Math.random()),
    img: img6,
    label: 'Pagar conta',
  },
  {
    key: String(Math.random()),
    img: img7,
    label: 'FAQ',
  },
];


export default function Suggestions(){
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
}