import count from "./js/count";
import sum from "./js/sum";
// 要想webpack打包资源，必须引入该资源
import "./css/index.css"
import "./less/index.less"
import "./stylus/index.styl"


console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));