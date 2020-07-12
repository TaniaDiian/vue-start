import Vue from "vue";
import {post} from "./post";
import {comments} from "./comments";

export default {
    install(Vue, options) {
        Vue.prototype.$api = {
            //it is the same as post:post
            post,
            comments,
        };
    }
  };