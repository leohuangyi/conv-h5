# Conv-h5
Conv-h5是一个使用Swiper、Animate.css便捷构建H5活动页的库。它将开源项目Swiper、Animate.css的进行整合，同时提供了$conv_h5.animate()使Swiper和Animate.css可以无缝链接。使用它开发者可以便捷的编写出html5活动页。

# Use

***
	<link href="conv-h5.1.0.0.min.css" type="text/css" />
	<script src="zepto.min.js"></script>
	<script src="conv-h5.1.0.0.min.js"></script>

	//html
	<div id="J-swiper1" class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide slide1">
            	    <h1 data-duration="2s" data-delay="0" data-animation="bounceIn" class="will-animated">这里将会动哦</h1><div id="J-swiper1" class="swiper-container">
            </div>
            <div class="swiper-slide slide2">
                    <h1 data-duration="2s" data-delay="0" data-animation="bounceIn" class="will-animated">这里将会动哦</h1><div id="J-swiper1" class="swiper-container">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

	//js
	var swiper1 = new Swiper ('#J-swiper1', {
        direction: 'vertical',
        loop: true,
        pagination: '.swiper-pagination',
        onTransitionStart: function(){
            $conv_h5.animate($('.swiper-slide-active .will-animated'));
        }
    });

***

* [Demo](http://leohuangyi.github.io/conv-h5/demos/demo1)
* [Swiper官网](http://idangero.us/swiper/)
* [Animate.css官网](https://daneden.github.io/animate.css/)

# Dist
conv-h5使用gulp来构建，你可以进入项目根目录，然后执行以下命令，即可在dist目录得到适用于生产环境的资源文件。

***
    npm install
    gulp build #生产环境
    gulp dev #开发
***

# Contributing
* /src/conv-h5.js 提供了animate函数的实现
* /gulpfile.js文件中对Swiper、Animate.css进行了整合,开发者可以参照这两个项目的文档，在./src/libs/中进行相应个性化定制，比如减少Animate.css的生成模块，从而减少css文件的体积等

# Todo
* 现在暂时只能给一个动画元素设置一类动画(可以多种动画类型，但是都是同时发生)，后期需要实现一个元素可以添加多类动画，可以不同时发生，如滑入，然后旋转，然后再淡出等