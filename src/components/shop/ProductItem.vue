<template>
  <el-card>
    <div class="product_item">
      <div class="product_item__content">

        <div class="product_item__photo__wrapper">
          <div class="product_item__quick_view_link__wrapper">
            <el-link
              href="#"
              :underline="false"
              class="product_item__quick_view_link">
              Быстрый просмотр
            </el-link>
          </div>

          <el-image
            :src="imgUrl"
            alt=""
            fit="cover"
            :lazy="true"
            class="product_item__photo__img"></el-image>

          <div class="product_item__discount_badge">
            14%
          </div>
        </div>

        <div class="product_item__info__wrapper">

          <div class="product_item__price_top">
            <div class="product_item__price_top__left">
              86 956 ₽
            </div>
            <div class="product_item__price_top__right">
              99 990 ₽
            </div>
          </div>

          <div class="product_item__price_bottom">
            85 251 ₽
          </div>

          <div v-html="params" class="product_item__params">
          </div>

          <div class="product_item__rating">
            87
          </div>

          <div class="product_item__purchase_terms">
            <div class="product_item__purchase_terms__content">
              Рассрочка 0-0-6
            </div>
          </div>

          <div class="product_item__toCart_and_favorite">
            <el-button class="product_item__toCart_button">
              В корзину
            </el-button>
            <img
              :src="favoriteIcon"
              alt=""
              class="product_item__favorite_icon__img">
          </div>
        </div>

      </div>
    </div>
  </el-card>
</template>

<script>
import favoriteIcon from '../../assets/favoriteIcon.svg';

export default {
  name: 'ProductItem',
  data() {
    return {
      imgUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      params: 'Apple / Смартфон iPhone 12 Pro 128GB / 6.1" / 2532&#215;1170 / OLED / 128 Гб',
      favoriteIcon,
    };
  },
};
</script>
