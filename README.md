# conv-h5
conv-h5是一个使用Swiper、Animate.css便捷构建h5活动页的工具。它将开源项目Swiper、Animate.css的资源文件合并起来生成新的资源文件，方便用户直接引入。

# Use

***
	<link href="conv-h5.1.0.0.min.css" type="text/css" />
	<script src="conv-h5.1.0.0.min.js"></script>
***

* [Demo](http://leohuangyi.github.com/conv-h5)
* [Swiper官网](http://idangero.us/swiper/)
* [Animate.css官网](https://daneden.github.io/animate.css/)

# Dist
conv-ht使用gulp来构建，你可以进入项目根目录，然后执行以下命令，即可在dist目录得到适用于生产环境的资源文件。

***
    npm install --global gulp
    npm install
    gulp build
***

# Contributing
/src/libs/conv-h5.js 提供了animate函数的实现
/gulpfile.js文件中对Swiper、Animate.css进行了整合,开发者可以参照这两个项目的文档，在./src/libs/中进行相应个性化定制，比如减少Animate.css的生成模块，从而减少css文件的体积等。