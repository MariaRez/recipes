import React from 'react';
import './About.css';
import photo1 from '../../images/about/photo1.jpeg';
import photo2 from '../../images/about/photo2.jpeg';
import photo3 from '../../images/about/photo3.jpeg';
import photo4 from '../../images/about/photo4.jpeg';
import photo5 from '../../images/about/photo5.jpeg';
import NavTab from '../NavTab/NavTab';

function About() {
  return (
    <section className="section">
      <NavTab title="О проекте" />
      <div className="about section">
        <p className="about-text dark-color-text small-text">
          С самых ранних лет моей страстью была готовка. Мама приходила довольно
          поздно с работы, но ее всегда ждал вкусный изысканный &#40;по моему
          мнению&#41; ужин. Вероянее всего это было что-то простое - макароны с
          сыром, вареная картошка с зеленью или коронное блюдо - разогретый в
          микроволновке сыр до состояния корочки и хлеб. Поверьте, тогда было
          ощущение что я великий кулинар раз смогла сама что-то сварить или
          пожарить.
        </p>
        <p className="about-text dark-color-text small-text">
          Многие не понимали такую &quot;одержимость&quot; едой. Серьезно, я говорила о
          ней 24/7, рассказывала про интересные факты о продуктах и блюдах, о
          найденных в интернете или &quot;Поваренной книге Дарьи Донцовой&quot; рецептах и
          возможности их воплощения в жизнь. Научилась готовить блюда разных
          кухнь и народов мира, но мне не с кем было поделиться своим восторгом
          по поводу современного мира кулинарии.
        </p>
        <p className="about-text dark-color-text small-text">
          В 22 я встретила своего будущего мужа. В плане кулинарии мы оказались
          как две капли воды - можем круглые сутки говорить о еде, искать
          ресторан на будущий праздник за месяц, при этом досконально изучив
          меню, продумывать новый кулинарый шедевр, во время готовки
          предыдущего.
        </p>
        <p className="about-text dark-color-text small-text">
          Данный сайт я создала с целью как можно скорее поделиться этой
          безграничной любовью во всеми вами, поделиться нашими экспериментами и
          проверенными блюдами. Зарядить вас на новые кулинарные свершения.
          Очень надеемся, что вы попробуете один или несколько рецептов и
          останетесь довольны.
        </p>
        <ul className="about-fotos">
          <li>
            <img
              className="about-foto"
              src={photo1}
              alt="Брускетты с чесноком"
            />
          </li>
          <li>
            <img className="about-foto" src={photo2} alt="Карпаччо" />
          </li>
          <li>
            <img
              className="about-foto"
              src={photo3}
              alt="Тако с растительным мясом"
            />
          </li>
          <li>
            <img className="about-foto" src={photo4} alt="Булочки с маком" />
          </li>
          <li>
            <img className="about-foto" src={photo5} alt="Рамен" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
