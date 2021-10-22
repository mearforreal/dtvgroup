import React from "react";
import "./comment.scss";
import person1 from "../../assets/img/person1.png";
import person2 from "../../assets/img/person2.png";
import person3 from "../../assets/img/person3.png";

function Comment() {
  return (
    <div className="comments__wrapper main__container">
      <p className="comments__title">Отзывы покупателей</p>
      <div className="comments_conatiner">
        <div className="comment__section">
          <img src={person3} alt="" className="avatar" />
          <div className="comment_text_container">
            <p className="short_review">
              {" "}
              <span>«</span>Прогревает комнату очень хорошо... <span>»</span>{" "}
            </p>
            <p className="comment_description">
              У меня автономное отопление, в большой комнате тепла не хватает, и
              когда ко мне приходила моя маленькая внучка, я очень беспокоилась
              за неё. Теперь моя проблема разрешилась! С этим обогревателем я
              могу быстро с огреть любое помещение.
            </p>
            <p className="person_info">Баглан, Алматы</p>
          </div>
        </div>
        <div className="comment__section">
          <img src={person1} alt="" className="avatar" />
          <div className="comment_text_container">
            <p className="short_review">
              <span>«</span>Компактный и мощный! <span>»</span>
            </p>
            <p className="comment_description">
              С началом осени собрались с мужем купить обогреватель -
              отопительный сезон в нашем доме начинается очень не скоро.
              Ненавижу огромные масляные батареи, поэтому решили попробовать
              что-то поменьше и получше. Выбор пал на данный обогреватель.
              Безумно довольны покупкой.
            </p>
            <p className="person_info">Камила, талдыкорган</p>
          </div>
        </div>
        <div className="comment__section">
          <img src={person2} alt="" className="avatar" />
          <div className="comment_text_container">
            <p className="short_review">
              <span>«</span>Быстро нагревает помещение <span>»</span>
            </p>
            <p className="comment_description">
              Откровенно говоря, вообще не мог поверить, что такой маленький
              приборчик может обогреть комнату даже в 16 кв.м. Но греет ведь!
              Подключили к розетке посреди комнаты - и через минут 10 воздух
              прогрелся с +20 до +27. Я все еще в себя не пришел, это просто
              бомба!
            </p>
            <p className="person_info">Айдана, петропавловск</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
