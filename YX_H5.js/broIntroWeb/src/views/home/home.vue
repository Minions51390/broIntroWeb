<template>
  <div class="home">
    <img alt="bick" src="../../assets/home/bick.webp">
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      $http: this.$http
    }
  },
  components: {
    HelloWorld
  },
  created() {
    // 测试封装请求函数、拦截器、proxy是否可行
    let url = "/sugrec?prod=pc_his&from=pc_web&json=1&sid=30748_1429_21095_30794&hisdata=%5B%7B%22time%22%3A1581780484%2C%22kw%22%3A%22%E6%B2%88%E9%87%8D%22%7D%2C%7B%22time%22%3A1581780484%2C%22kw%22%3A%22%E6%B2%88%E9%87%8D%20%E7%BB%93%E5%B1%80%22%7D%2C%7B%22time%22%3A1581780484%2C%22kw%22%3A%22%E5%BA%86%E4%BD%99%E5%B9%B4%E7%AC%AC%E4%BA%8C%E5%AD%A3%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%92%AD%22%7D%2C%7B%22time%22%3A1577863963%2C%22kw%22%3A%22%E7%BA%A2%E8%89%B2%E8%AD%A6%E6%88%92%E5%90%A7%22%7D%2C%7B%22time%22%3A1578813232%2C%22kw%22%3A%22%E7%BA%A2%E8%89%B2%E8%AD%A6%E6%88%92%E5%9C%B0%E5%9B%BE%E6%94%BE%E5%9C%A8%E5%93%AA%22%7D%2C%7B%22time%22%3A1578813302%2C%22kw%22%3A%22%E7%BA%A2%E8%89%B2%E8%AD%A6%E6%88%922%E5%9C%B0%E5%9B%BE%E6%94%BE%E5%9C%A8%E5%93%AA%22%7D%2C%7B%22time%22%3A1578813933%2C%22kw%22%3A%22%E7%BA%A2%E8%89%B2%E8%AD%A6%E6%88%922%E9%80%80%E5%87%BA%E5%88%B0%E4%B8%BB%E8%8F%9C%E5%8D%95%22%7D%2C%7B%22time%22%3A1580180544%2C%22kw%22%3A%22%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B%E7%94%B5%E8%84%91mac%E5%9C%B0%E5%9D%80%22%7D%2C%7B%22time%22%3A1581220327%2C%22kw%22%3A%22%E6%88%91%E6%9C%AC%E5%B0%86%E5%BF%83%E5%90%91%E6%98%8E%E6%9C%88%E4%BB%80%E4%B9%88%E8%AF%97%22%7D%2C%7B%22time%22%3A1581220935%2C%22kw%22%3A%22%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%B9%B3%E5%8F%B0%22%7D%5D&req=2&csor=0";
    this.$http.get(url).then((res) => {
      console.log(11, res);
    }).catch((err) => {
      console.log(err);
    });
  }
}
</script>
