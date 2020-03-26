<template>
  <div class="app-container">
    <div class="main-container">
      <div class="item left">
        <div class="typeItem" />
        <div class="typeItem" v-for="val in articlesType" :key="val.id" @click="handleChoose(val)">
          <span></span>
          <span>{{val.lable}}</span>
        </div>
      </div>
      <div class="item center">
        <p class="serchBox">
          <el-input size="small" placeholder="搜索查询"></el-input>
        </p>
        <div class="listWrap">
          <ul class="articles-list">
            <!-- <transition-group appear tag="ul"> -->
            <li
              @click="articleDetail(article)"
              v-for="(article) in articlesList"
              :key="article._id"
              class="itemcontent"
            >
              <a href>
                <img
                  class="wrap-img img-blur-done"
                  :data-src="article.img_url"
                  data-has-lazy-src="false"
                  :src="article.img_url"
                  alt="文章封面"
                />
                <div class="content">
                  <h4 class="title">{{article.title}}</h4>
                  <p class="abstract">{{article.desc}}</p>
                  <div class="meta">
                    <span>查看 {{article.meta.views}}</span>
                    <span>评论 {{article.meta.comments}}</span>
                    <span>赞 {{article.meta.likes}}</span>
                    <span class="time">{{article.create_time}}</span>
                  </div>
                </div>
              </a>
            </li>
            <!-- </transition-group> -->
          </ul>
        </div>
        <PaginationIndex
          :total="table.total"
          :page.sync="listQuery.pageNum"
          :limit.sync="listQuery.pageSize"
          :pageSizes="[5,8,10,12,15]"
          @pagination="getList"
        />
      </div>
      <div class="item right">
        <div></div>
        <div></div>
        <div></div>
        <div class="tianqi">
          <iframe
            name="weather_inc"
            src="http://i.tianqi.com/index.php?c=code&id=48"
            width="auto"
            height="45"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import PaginationIndex from "@c/Pagination";
import "@/utils/autoload.js";
@Component({
  components: { PaginationIndex }
})
export default class HomeIndex extends Vue {
  private articlesList = [
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    },
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    },
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    },
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    },
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    },
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    },
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    },
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    },
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    },
    {
      category: ["5bf014e8bc1e7805eb83dba7"],
      create_time: "2019-07-04T08:37:49.860Z",
      desc:
        "算法为王，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法，更值得我们学习与推敲。",
      img_url:
        "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      meta: { views: 368, likes: 2, comments: 11 },
      tags: ["5cf37d2874289f3d47ed1468"],
      title: "JavaScript 数据结构与算法之美 - 递归",
      _id: "5d1dbaddffe7604ffc4dc87c"
    }
  ];
  private articlesType = [
    {
      id: 12,
      lable: "JavaScript",
      value: "",
      img_url:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyBzdHlsZT0id2lkdGg6MzA4cHg7aGVpZ2h0OjMwOHB4OyIgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5b2iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwMjRweCIgaGVpZ2h0PSIxMDI0cHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMjQgMTAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iIzAwYmI5YyIgZD0iTTQxNiAxNzYuMDAybC0xNjAgMCAwIDQyNC45OTZjMCAxMDUuMTYtMzYuMDY0IDEzNC41MjItOTguODI0IDEzNC41MjItMjkuNDEgMC01NS44OTYtNS4wNDItNzYuNS0xMi4xMjZMNjQgODQ3LjgwOGMyOS40IDEwLjEyNCA3NC41MTggMTYuMTkyIDEwOS44MTQgMTYuMTkyQzMxNy45MSA4NjQgNDE2IDc5Ni4yNTggNDE2IDYwMi4wNEw0MTYgMTc2LjAwMiA0MTYgMTc2LjAwMnoiIC8+CjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzEiIGZpbGw9IiMwMGJiOWMiIGQ9Ik03NjQuOTI2IDE2MEM2MTAuMDQgMTYwIDUxMiAyNDcuOTk2IDUxMiAzNjQuMzA4YzAgMTAwLjE2NiA3NS41MDIgMTYyLjg4IDE4NS4yODIgMjAzLjMzIDc5LjQgMjguMzE2IDExMC43ODQgNTMuNjE2IDExMC43ODQgOTUuMDc4IDAgNDUuNTEyLTM2LjI3OCA3NC44NS0xMDQuODk2IDc0Ljg1LTYzLjcyNiAwLTEyMS41NzgtMjEuMjgtMTYwLjc4OC00Mi41MWwwLTAuMDQyTDUxMiA4MjEuNDU0YzM3LjI3OCAyMS4yNzYgMTA2Ljg4MiA0Mi41MSAxODIuMzM0IDQyLjUxQzg3NS43MDggODYzLjk2IDk2MCA3NjYuODYgOTYwIDY1Mi41NjhjMC05Ny4xLTUzLjkxNi0xNTkuOC0xNzAuNTU2LTIwNC4zMjYtODYuMjc4LTM0LjM4Mi0xMjIuNTQtNTMuNTktMTIyLjU0LTk3LjA4NCAwLTM0LjQgMzEuMzc2LTY1LjczOCA5Ni4wODYtNjUuNzM4IDYzLjY5MiAwIDEwNy40ODggMjEuNDE0IDEzMy4wMSAzNC41ODJsMzguMjUtMTI4Qzg5NC4yNSAxNzQuNDQgODQwLjM3NiAxNjAgNzY0LjkyNiAxNjBMNzY0LjkyNiAxNjB6IiAvPgoKPC9zdmc+Cg=="
    },
    {
      id: 13,
      lable: "CSS",
      value: "",
      img_url:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyBzdHlsZT0id2lkdGg6MzA4cHg7aGVpZ2h0OjMwOHB4OyIgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5b2iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwMjRweCIgaGVpZ2h0PSIxMDI0cHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMjQgMTAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iIzAwYmI5YyIgZD0iTTQxNiAxNzYuMDAybC0xNjAgMCAwIDQyNC45OTZjMCAxMDUuMTYtMzYuMDY0IDEzNC41MjItOTguODI0IDEzNC41MjItMjkuNDEgMC01NS44OTYtNS4wNDItNzYuNS0xMi4xMjZMNjQgODQ3LjgwOGMyOS40IDEwLjEyNCA3NC41MTggMTYuMTkyIDEwOS44MTQgMTYuMTkyQzMxNy45MSA4NjQgNDE2IDc5Ni4yNTggNDE2IDYwMi4wNEw0MTYgMTc2LjAwMiA0MTYgMTc2LjAwMnoiIC8+CjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzEiIGZpbGw9IiMwMGJiOWMiIGQ9Ik03NjQuOTI2IDE2MEM2MTAuMDQgMTYwIDUxMiAyNDcuOTk2IDUxMiAzNjQuMzA4YzAgMTAwLjE2NiA3NS41MDIgMTYyLjg4IDE4NS4yODIgMjAzLjMzIDc5LjQgMjguMzE2IDExMC43ODQgNTMuNjE2IDExMC43ODQgOTUuMDc4IDAgNDUuNTEyLTM2LjI3OCA3NC44NS0xMDQuODk2IDc0Ljg1LTYzLjcyNiAwLTEyMS41NzgtMjEuMjgtMTYwLjc4OC00Mi41MWwwLTAuMDQyTDUxMiA4MjEuNDU0YzM3LjI3OCAyMS4yNzYgMTA2Ljg4MiA0Mi41MSAxODIuMzM0IDQyLjUxQzg3NS43MDggODYzLjk2IDk2MCA3NjYuODYgOTYwIDY1Mi41NjhjMC05Ny4xLTUzLjkxNi0xNTkuOC0xNzAuNTU2LTIwNC4zMjYtODYuMjc4LTM0LjM4Mi0xMjIuNTQtNTMuNTktMTIyLjU0LTk3LjA4NCAwLTM0LjQgMzEuMzc2LTY1LjczOCA5Ni4wODYtNjUuNzM4IDYzLjY5MiAwIDEwNy40ODggMjEuNDE0IDEzMy4wMSAzNC41ODJsMzguMjUtMTI4Qzg5NC4yNSAxNzQuNDQgODQwLjM3NiAxNjAgNzY0LjkyNiAxNjBMNzY0LjkyNiAxNjB6IiAvPgoKPC9zdmc+Cg=="
    },

    {
      id: 14,
      lable: "VueJs",
      value: ""
    },
    {
      id: 15,
      lable: "ReactJs",
      value: ""
    }
  ];
  private table = { total: 20 };
  private listQuery = { pageNum: 1, pageSize: 10 };
  private handleChoose(item: any) {
    alert(item.id);
  }
  private articleDetail(data: any) {
    console.log("data::", data);
  }
  get fillHeight() {
    return document.documentElement.clientHeight - 10;
  }
}
</script>
<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  padding: 0.5em;
  background-color: rgba(255, 255, 255, 0.1);
  overflow-y: auto;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  border: 1px solid;
  .item {
    border: 1px solid red;
    height: 100%;
  }
  .left {
    width: 15%;
    .typeItem {
      width: 100%;
      padding: 0.3em;
      height: 4em;
      line-height: 4em;
      border: 1px solid;
      span {
        display: inline-block;
      }
      span:nth-child(1) {
        width: 2em;
        margin-left: 2em;
      }
      img {
        width: 100%;
      }
    }
  }
  .center {
    width: 65%;
    padding: 0 1em;
    .listWrap {
      height: 86%;
      overflow-y: auto;
    }
    .serchBox {
      width: 70%;
      padding-top: 1em;
      margin: 0 auto;
    }
    .articles-list {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: left;
      .title {
        color: #333;
        margin: 7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
      }
      .itemcontent > div {
        padding-right: 140px;
      }
      .itemcontent .wrap-img {
        position: absolute;
        top: 50%;
        margin-top: -50px;
        right: 0;
        width: 125px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          border: 1px solid #f0f0f0;
        }
      }
      li {
        line-height: 20px;
        position: relative;
        // width: 100%;
        padding: 15px 0px;
        padding-right: 150px;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
        cursor: pointer;
        &:hover {
          .title {
            color: #000;
          }
        }
        .abstract {
          min-height: 30px;
          margin: 0 0 8px;
          font-size: 13px;
          line-height: 24px;
          color: #555;
        }
        .meta {
          padding-right: 0 !important;
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          a {
            margin-right: 10px;
            color: #b4b4b4;
            &::hover {
              transition: 0.1s ease-in;
              -webkit-transition: 0.1s ease-in;
              -moz-transition: 0.1s ease-in;
              -o-transition: 0.1s ease-in;
              -ms-transition: 0.1s ease-in;
            }
          }
          span {
            margin-right: 10px;
            color: #666;
          }
        }
      }
    }
  }
  .right {
    width: 20%;
    & > div {
      width: 94%;
      height: 25%;
      margin: 0 auto;
      border: 1px solid;
    }
    .tianqi {
      overflow: hidden;
    }
  }
}
</style>
