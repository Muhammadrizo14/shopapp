<template>
  <div>
    <Header />
    <main class="main">
      <heading title="Регистрационное поле" />
      <section class="registration">
        <div class="registration__content_wrapper container">
          <form action="#" method="post" class="Регистрационная форма">
            <fieldset class="registration__fieldset">
              <legend class="registration__form_name_legend">Ваше имя</legend>
              <input
                type="text"
                class="registration__form_input"
                id="Имя"
                placeholder="Имя"
              />
              <input
                type="text"
                class="registration__form_input"
                id="Фамилия"
                placeholder="Фамилия"
              />
            </fieldset>
            <fieldset class="registration__fieldset_radio">
              <legend class="visually-hidden">Ваш пол</legend>
              <input
                type="radio"
                name="gender"
                id="male"
                class="registration__form_radio"
              />
              <label for="male" class="registration__form_gender"
                >мужской</label
              >

              <input
                type="radio"
                name="gender"
                id="female"
                class="registration__form_radio"
              />
              <label for="female" class="registration__form_gender"
                >женский</label
              >
            </fieldset>
            <fieldset class="registration__fieldset">
              <legend class="registration__form_login_legend">
                Данные для входа
              </legend>
              <input
                type="email"
                class="registration__form_input"
                id="email"
                placeholder="Email"
              />
              <input
                type="password"
                class="registration__form_input"
                id="password"
                placeholder="Пароль"
              />
              <p class="registration__form_text">
                Пожалуйста, используйте 8 или более символов, по крайней мере, с
                1 цифрой и смесь прописных и строчных букв
              </p>
            </fieldset>
            <button type="submit" class="registration__form_submit">
              Присоединяйся сейчас
            </button>
          </form>
          <div class="registration__text">
            <h3 class="registration__text_heading">
              лояльность имеет свои преимущества
            </h3>
            <p class="registration__text_subheading">
              Примите участие в программе лояльности, где вы можете зарабатывать
              очки и разблокировать серьезные льготы. Начиная с этого, как
              только вы присоединитесь:
            </p>
            <ul class="registration__list">
              <li class="registration__list_item">
                15% скидка на приветственное предложение
              </li>
              <li class="registration__list_item">
                Бесплатная доставка, возврат и обмен на все заказы
              </li>
              <li class="registration__list_item">
                Скидка 10 долларов на покупку в день рождения
              </li>
              <li class="registration__list_item">Ранний доступ к продуктам</li>
              <li class="registration__list_item">
                Эксклюзивные предложения и награды
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="main__overlay"></div>
    </main>
    <footer>
      <contact />
      <copyright />
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Heading from "@/components/Heading.vue";
import Contact from "@/components/footer/Contact.vue";
import Copyright from "@/components/footer/copyright.vue";
export default {
  name: "registration-v",
  components: { Header, Heading, Contact, Copyright },
};
</script>

<style>
</style>